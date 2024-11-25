
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
}: {
    children: React.ReactNode;
    name: string;
    value: string;
    selectedValue: string | null;
    onClick: () => void;
}) {
    const radioRef = useRef<HTMLInputElement>(null);
    const isCorrect = value === selectedValue;
    return (
        <label
            className="flex flex-col items-center justify-center w-auto select-auto group">
            <div
                {...onTouch(() => {
                    onClick();
                    if (value !== selectedValue) {
                        vibrate();
                    }
                })}
                className={classNames(
                    "portrait:w-[16dvw] portrait:h-[16dvw] landscape:w-[18dvh] landscape:h-[18dvh]",
                    "cursor-pointer border-2 border-black flex items-center justify-center text-4xl rounded text-black",
                    {
                        "group-has-[input:checked]:bg-brand-accent-green": isCorrect,
                        "group-has-[input:checked]:bg-brand-accent-orange group-has-[input:checked]:animate-vibrate": !isCorrect,
                        "group-has-[input:not(:checked)]:bg-white": true,
                    }
                )}
            >
                {children}
            </div>
            <input type="radio" name={name} ref={radioRef} className="hidden" />
        </label>
    );
}

export default Card;
