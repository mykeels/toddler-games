export const hasTouch = () => "ontouchstart" in window;

export const onTouch = (
  handler: (e: React.TouchEvent | React.MouseEvent) => void
) => {
  return {
    onTouchStart: hasTouch() ? handler : undefined,
    onMouseDown: hasTouch() ? undefined : handler,
  };
};

export const tap = (element: HTMLElement) => {
  element.dispatchEvent(new MouseEvent("mousedown", { bubbles: true, cancelable: true }));
  element.dispatchEvent(new TouchEvent("touchstart", { bubbles: true, cancelable: true }));
  element.click();
}

declare global {
  interface Element {
    tap: () => void;
  }
}

Element.prototype.tap = function() {
  tap(this as HTMLElement);
};

