import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router';

interface OptionalShadowDomProps {
  useShadowDom?: boolean;
  shadowRootHead?: Node;
  shadowRootContainer?: HTMLElement;
}

type ExtendedMountProps = { [key: string]: unknown } & OptionalShadowDomProps;

let _mountProps: MfeMountProps;
export const getMountProps = () => _mountProps;
const setMountProps = (mountProps: MfeMountProps) => {
  _mountProps = mountProps;
};

export function getModuleFederationEntry<
  TMountProps extends ExtendedMountProps,
>(
  Component: (props: { mountProps: TMountProps }) => React.ReactElement
): ModuleFederationEntry<TMountProps> {
  return {
    mount(containerRef: string | HTMLElement, mountProps: TMountProps) {
      setMountProps(mountProps as unknown as MfeMountProps);
      const container = getHTMLElement(containerRef);
      const { useShadowDom, shadowRootHead, shadowRootContainer } = mountProps;

      if (container?.getAttribute('data-mf-mounted') === 'true') {
        return () => {
          defaultUnmount(container!);
        };
      }
      container?.setAttribute('data-mf-mounted', 'true');

      let containerRoot = container!;

      if (useShadowDom) {
        let mfeHead = shadowRootHead;
        let mfeContainer = shadowRootContainer;

        if (!shadowRootHead || !shadowRootContainer) {
          mfeHead = document.createElement('head');
          mfeContainer = document.createElement('div');

          const shadowRoot = container?.attachShadow({ mode: 'open' });
          shadowRoot?.appendChild(mfeHead);
          shadowRoot?.appendChild(mfeContainer!);

          mountProps.shadowRootHead = mfeHead;
          mountProps.shadowRootContainer = shadowRootContainer;
        }

        containerRoot = mfeContainer!;
      }

      const root = createRoot(containerRoot!);
      root.render(
        <React.StrictMode>
          <Component {...{ mountProps }} />
        </React.StrictMode>
      );
      return () => {
        try {
          root.unmount();
          removeAttribute(container);
          // eslint-disable-next-line no-empty
        } catch {}
      };
    },
    unmount: defaultUnmount,
  };
}

function removeAttribute(containerRef: HTMLElement | null) {
  containerRef?.removeAttribute('data-mf-mounted');
}

function defaultUnmount(containerRef: HTMLElement) {
  ReactDOM.unmountComponentAtNode(containerRef);
  removeAttribute(containerRef);
}

export type ModuleFederationEntry<TMountProps extends ExtendedMountProps> = {
  mount: (
    containerRef: string | HTMLElement,
    mountProps: TMountProps
  ) => () => void;
  unmount: (containerRef: HTMLElement) => void;
};

export const getHTMLElement = (ref: HTMLElement | string) =>
  ref instanceof HTMLElement ? ref : document.getElementById(ref);

type TRouter = Parameters<typeof RouterProvider>[0]['router'];

/**
 * These props are expected to be passed in from the host app to every MFE.
 */
export type MfeMountProps = {
  apiRootUrl: string;
  router?: TRouter;
};