export const hasTouch = () => "ontouchstart" in window;

export const onTouch = (
  handler: (e: React.TouchEvent | React.MouseEvent) => void
) => {
  return {
    onTouchStart: hasTouch() ? handler : undefined,
    onMouseDown: hasTouch() ? undefined : handler,
  };
};

