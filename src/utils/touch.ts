export const onTouch = (
  handler: (e: React.TouchEvent | React.MouseEvent) => void
) => {
  return {
    onTouchStart: "ontouchstart" in window ? handler : undefined,
    onMouseDown: "ontouchstart" in window ? undefined : handler,
  };
};
