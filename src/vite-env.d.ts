/// <reference types="vite/client" />

declare namespace globalThis {
  const __APP_VERSION__: string;
}

declare module "swipe-listener" {
  export default class SwipeListener {
    constructor(element: HTMLElement | undefined);
    off(): void;
  }
}
