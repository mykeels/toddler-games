import { type StoryObj } from '@storybook/react';

export const story = <TProps, TComponent extends React.ComponentType<TProps>>(
  Component: TComponent,
  props: StoryObj<TComponent>
): StoryObj<TComponent> => Object.assign(Component, props);
