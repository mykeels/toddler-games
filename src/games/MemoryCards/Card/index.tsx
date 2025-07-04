import { onTouch } from '@/utils/touch';
import { vibrate } from '@/utils/vibrate';
import classNames from 'clsx';
import { useRef } from 'react';

export function Card({
  children,
  name,
  value,
  onClick,
  isFlipped,
  isMatched,
}: {
  children: React.ReactNode;
  name: string;
  value: string;
  onClick: () => void;
  isFlipped: boolean;
  isMatched: boolean;
}) {
  const radioRef = useRef<HTMLInputElement>(null);
  return (
    <label className="flex flex-col items-center justify-center w-auto select-auto group">
      <div
        {...onTouch(() => {
          if (!isMatched) {
            onClick();
            vibrate();
          }
        })}
        data-value={value.toLowerCase()}
        className={classNames(
          'w-14 h-14 sm:w-16 sm:h-16',
          'cursor-pointer border-2 border-black flex items-center justify-center text-4xl rounded text-black',
          {
            'bg-white': !isFlipped && !isMatched,
            'bg-yellow-300': isFlipped && !isMatched,
            'bg-brand-accent-green': isMatched,
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
