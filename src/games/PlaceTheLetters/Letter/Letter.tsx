import '../LetterSlot/LetterSlot.css';
import clsx from 'clsx';
import Draggable, { DraggableEvent } from 'react-draggable';
import { DEFAULT_LETTER_COLOR, DEFAULT_LETTER_FONT_SIZE } from '../PlaceTheLetters.consts';
import { useRef } from 'react';
import { useFloatAround } from '@/FloatAround/useFloatAround.hook';
import { vibrate } from '@/utils/vibrate';
import { isLightColor } from '@/utils/colors';
import { useSpeak } from '@/utils/speak';

const useDraggableWrapper =
  (draggable: LetterProps['draggable'], nodeRef: React.RefObject<HTMLDivElement>) =>
  (props: {
    children: React.ReactNode;
    onDrag: (e: DraggableEvent, isDragging: boolean) => void;
    onDragStart?: (e: DraggableEvent) => void;
    onDragStop?: (e: DraggableEvent) => void;
  }) => {
    return (
      <Draggable
        defaultPosition={draggable?.position}
        allowAnyClick
        disabled={!draggable}
        onStart={(e) => {
          props.onDrag(e, true);
          // props.onDragStart?.(e);
          (e.target as HTMLElement).dataset.value = (e.target as HTMLElement).textContent || '';
        }}
        onStop={(e) => props.onDrag(e, false)}
        onDrag={(e) => props.onDrag(e, true)}
        bounds="body"
        cancel=".no-drag"
        enableUserSelectHack={false}
        nodeRef={nodeRef}
      >
        {props.children}
      </Draggable>
    );
  };

const throttle = (func: (...args: unknown[]) => void, limit: number) => {
  let inThrottle: NodeJS.Timeout | false | undefined = undefined;
  return (...args: unknown[]) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = setTimeout(() => (inThrottle = false), limit);
    }
  };
};

type LetterProps = {
  value: string;
  fontSize?: string;
  color?: string;
  textShadowColor?: string;
  draggable?: {
    position: {
      x: number;
      y: number;
    };
  };
  canBeDropped?: boolean;
  spoken?: boolean;
};

export const Letter = ({
  value,
  fontSize = DEFAULT_LETTER_FONT_SIZE,
  color = DEFAULT_LETTER_COLOR,
  draggable,
  canBeDropped = false,
  spoken = false,
}: LetterProps) => {
  const { speak } = useSpeak();
  const nodeRef = useRef<HTMLDivElement>(null);
  const DraggableWrapper = useDraggableWrapper(draggable, nodeRef);
  const distortableRef = useRef<HTMLSpanElement>(null);
  const rateRef = useRef(1);
  const speakLetter = throttle(() => {
    rateRef.current = 1 + Math.abs(Math.sin(Date.now() / 200) * 0.5);
    speak(value.toUpperCase(), { rate: rateRef.current });
    vibrate();
  }, 300);
  const { classId, style } = useFloatAround(3);
  const textShadowColor = isLightColor(color) ? '#000' : '#fff';

  const Wrapper = ({ children }: { children: React.ReactNode }) => {
    return draggable ? (
      <>
        <style>{style}</style>
        <DraggableWrapper
          onDragStart={() => {}}
          onDrag={(e, isDragging) => {
            distortableRef.current?.classList.toggle('animate-breathe', canBeDropped && !isDragging);
            distortableRef.current?.classList.toggle('animate-distort', isDragging);
            distortableRef.current?.classList?.toggle(classId, !isDragging);
            if (canBeDropped) {
              speakLetter();
            }
            const mouseX = (e as MouseEvent).clientX || (e as TouchEvent).changedTouches?.[0]?.clientX;
            const mouseY = (e as MouseEvent).clientY || (e as TouchEvent).changedTouches?.[0]?.clientY;

            if (!mouseX || !mouseY) {
              return;
            }

            const elementsUnderCursor = document.elementsFromPoint(mouseX, mouseY);
            const elementsBehind = elementsUnderCursor.filter((el) => el !== distortableRef.current);
            const dragOverSlots = elementsBehind.filter((el) => el.classList.contains('letter-slot'));
            const allSlots = document.querySelectorAll('.letter-slot');
            const dispatchEvent = (el: Element, name: string) => {
              const event = new DragEvent(name, {
                bubbles: true,
                cancelable: true,
                clientX: mouseX,
                clientY: mouseY,
                dataTransfer: new DataTransfer(),
                relatedTarget: distortableRef.current,
              });
              event.dataTransfer?.setData('text/plain', value);
              el.dispatchEvent(event);
            };
            allSlots.forEach((slot) => {
              if (dragOverSlots.includes(slot)) {
                if (isDragging) {
                  dispatchEvent(slot, 'dragover');
                } else {
                  dispatchEvent(slot, 'drop');
                }
              } else {
                dispatchEvent(slot, 'dragleave');
              }
            });
          }}
        >
          {children}
        </DraggableWrapper>
      </>
    ) : (
      children
    );
  };

  return (
    <Wrapper>
      <span
        className={clsx(`py-2 px-1 font-bold`, {
          'absolute cursor-move draggable-letter': draggable,
          'scale-150': spoken,
        })}
        style={{
          userSelect: 'none',
          fontSize,
          color,
        }}
        ref={nodeRef}
      >
        <span
          className={clsx('', {
            absolute: draggable,
            [classId]: !canBeDropped && !spoken,
            'animate-breathe': canBeDropped,
          })}
          ref={distortableRef}
          style={{
            color,
            textShadow: `-2px -2px 0 ${textShadowColor},
                                    2px -2px 0 ${textShadowColor},
                                    -2px 2px 0 ${textShadowColor},
                                    2px 2px 0 ${textShadowColor}`,
          }}
        >
          {value}
        </span>
      </span>
    </Wrapper>
  );
};

export default Letter;
