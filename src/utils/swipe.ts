import { useEffect, useRef } from "react";
import SwipeListener from "swipe-listener";
import { hasTouch } from "./touch";

type SwipeEventData = {
  directions: {
    left: number;
    right: number;
    up: number;
    down: number;
  };
  x: [number, number];
  y: [number, number];
  distance: [number, number];
};

type SwipeEvent = {
  detail: SwipeEventData;
};

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
        const x: [number, number] = event.detail.x;
        const y: [number, number] = event.detail.y;
        const distance: [number, number] = [
          Math.abs(x[0] - x[1]),
          Math.abs(y[0] - y[1]),
        ];
        console.log(directions, x, y, distance);
        const maxDistance = Math.max(...distance);
        if (maxDistance > 120) {
          onSwipe?.({
            directions,
            x,
            y,
            distance,
          });
        }
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

export const useHorizontalSwipe = ({
  onSwipe,
}: {
  onSwipe: (data: SwipeEventData) => void;
}) => {
  return useSwipe({
    onSwipe: (data) => {
      if (data.directions.left || data.directions.right) {
        onSwipe(data);
      }
    },
  });
};

export const useVerticalSwipe = ({
  onSwipe,
}: {
  onSwipe: (data: SwipeEventData) => void;
}) => {
  return useSwipe({
    onSwipe: (data) => {
      if (data.directions.up || data.directions.down) {
        onSwipe(data);
      }
    },
  });
};
