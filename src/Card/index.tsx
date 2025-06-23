import { onTouch } from "@/utils/touch";
import { vibrate } from "@/utils/vibrate";
import classNames from "clsx";
import { useRef } from "react";

export function Card({
  children,
  name,
  value,
  selectedValue,
  onClick,
  className,
}: {
  children: React.ReactNode;
  name: string;
  value: string;
  selectedValue: string | null;
  onClick: () => void;
  className?: string | Record<string, boolean | string>;
}) {
  const radioRef = useRef<HTMLInputElement>(null);
  const isCorrect = value === selectedValue;
  const classNameOptions = typeof className === "object" ? className || {} : {};
  return (
    <label className="flex flex-col items-center justify-center w-auto select-auto group">
      <div
        {...onTouch(() => {
          onClick();
          if (value !== selectedValue) {
            vibrate();
          }
        })}
        data-value={value.toLowerCase()}
        className={classNames(
          "width" in classNameOptions
            ? classNameOptions.width
            : "portrait:min-w-[16dvw] portrait:h-[16dvw] landscape:min-w-[18dvh] landscape:h-[18dvh]",
          "cursor-pointer border-2 border-black flex items-center justify-center text-4xl rounded text-black",
          {
            "group-has-[input:checked]:bg-brand-accent-green": isCorrect,
            "group-has-[input:checked]:bg-brand-accent-orange group-has-[input:checked]:animate-vibrate":
              !isCorrect,
            "group-has-[input:not(:checked)]:bg-white": true,
          },
          className
        )}
      >
        {children}
      </div>
      <input type="radio" name={name} ref={radioRef} className="hidden" />
    </label>
  );
}

export default Card;
