import { useState, useEffect, useRef } from "react";

export const useFullScreenSize = () => {
  const [size, setSize] = useState({ width: 500, height: 500 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setSize({
      width: containerRef.current?.clientWidth ?? 0,
      height: containerRef.current?.clientHeight ?? 0,
    });
    const abortController = new AbortController();
    window.addEventListener("resize", () => {
      setSize({
        width: containerRef.current?.clientWidth ?? 0,
        height: containerRef.current?.clientHeight ?? 0,
      });
      },
      { signal: abortController.signal }
    );
    return () => abortController.abort();
  }, []);

  return { size, containerRef };
};
