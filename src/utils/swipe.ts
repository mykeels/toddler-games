import { useEffect, useRef } from "react";
import SwipeListener from "swipe-listener";
import { hasTouch } from "./touch";

type SwipeEventData = {
    directions: {
        left: number;
        right: number;
        up: number;
        down: number;
    },
    x: [number, number];
    y: [number, number];
}

type SwipeEvent = {
    detail: SwipeEventData;
}

export const useSwipe = ({
  onSwipe,
}: {
  onSwipe: (data: SwipeEventData) => void;
}) => {
  const ref = useRef<HTMLElement>();

  useEffect(() => {
    if (!hasTouch()) {
      return;
    }
    const listener = new SwipeListener(ref.current);
    const element = ref.current as HTMLElement;
    const controller = new AbortController();
    element.addEventListener(
      "swipe",
      (e) => {
        const event = e as unknown as SwipeEvent;
        const directions = event.detail.directions;
        const x = event.detail.x;
        const y = event.detail.y;
        console.log(directions, x, y);
        onSwipe?.({
          directions,
          x,
          y,
        });
      },
      {
        signal: controller.signal,
      }
    );
    return () => {
      controller.abort();
      listener.off();
    };
  }, [onSwipe]);

  return {
    ref,
  };
};
