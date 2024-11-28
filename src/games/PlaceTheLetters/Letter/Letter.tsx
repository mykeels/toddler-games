import clsx from "clsx";
import Draggable, { DraggableEvent } from "react-draggable";
import { DEFAULT_LETTER_COLOR, DEFAULT_LETTER_FONT_SIZE } from "../PlaceTheLetters.consts";
import { useRef } from "react";
import { useFloatAround } from "@/FloatAround";
import { fx } from "@/utils/sound";

type LetterProps = {
    value: string;
    fontSize?: string;
    color?: string;
    draggable?: {
        position: {
            x: number;
            y: number;
        }
    };
};


const useDraggableWrapper = (draggable: LetterProps["draggable"]) =>
    (props: {
        children: React.ReactNode,
        onDrag: (e: DraggableEvent, isDragging: boolean) => void,
        onDragStart?: (e: DraggableEvent) => void,
        onDragStop?: (e: DraggableEvent) => void
    }) => {
        return draggable
            ? <Draggable
                defaultPosition={draggable.position}
                allowAnyClick
                enableUserSelectHack
                onStart={(e) => {
                    props.onDrag(e, true);
                    // props.onDragStart?.(e);
                    (e.target as HTMLElement).dataset.value = (e.target as HTMLElement).textContent || "";
                }}
                onStop={(e) => props.onDrag(e, false)}
                onDrag={(e) => props.onDrag(e, true)}
            >{props.children}</Draggable>
            : <>{props.children}</>;
    }

const throttle = (func: (...args: unknown[]) => void, limit: number) => {
    let inThrottle: NodeJS.Timeout | false | undefined = undefined;
    return (...args: unknown[]) => {
        if (!inThrottle) {
            func(...args)
            inThrottle = setTimeout(() => inThrottle = false, limit)
        }
    }
}

export const Letter = ({
    value,
    fontSize = DEFAULT_LETTER_FONT_SIZE,
    color = DEFAULT_LETTER_COLOR,
    draggable
}: LetterProps) => {
    const DraggableWrapper = useDraggableWrapper(draggable);
    const distortableRef = useRef<HTMLSpanElement>(null);
    const rateRef = useRef(1);
    const speakLetter = throttle(() => {
        rateRef.current = 1 + Math.abs(Math.sin(Date.now() / 200) * 0.5);
        fx.phonics.play(value, { rate: rateRef.current });
    }, 300);
    const { classId, style } = useFloatAround(3);

    return <>
        <style>{style}</style>
        <DraggableWrapper
            onDragStart={() => {
            }}
            onDrag={(e, isDragging) => {
                distortableRef.current?.classList.toggle("animate-distort", isDragging);
                distortableRef.current?.classList?.toggle(classId, !isDragging);
                speakLetter();
                const mouseX = (e as MouseEvent).clientX;
                const mouseY = (e as MouseEvent).clientY;

                const elementsUnderCursor = document.elementsFromPoint(mouseX, mouseY);
                const elementsBehind = elementsUnderCursor.filter(el => el !== distortableRef.current);
                const dragOverSlots = elementsBehind.filter(el => el.classList.contains('letter-slot'));
                const allSlots = document.querySelectorAll('.letter-slot');
                const dispatchEvent = (el: Element, name: string) => {
                    const event = new DragEvent(name, {
                        bubbles: true,
                        cancelable: true,
                        clientX: mouseX,
                        clientY: mouseY,
                        dataTransfer: new DataTransfer(),
                        relatedTarget: distortableRef.current
                    });
                    event.dataTransfer?.setData('text/plain', value);
                    el.dispatchEvent(event);
                }
                allSlots.forEach(slot => {
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
            <span
                className={clsx(
                    `px-2 lg:px-4 font-bold`,
                    {
                        "fixed cursor-move draggable-letter": draggable
                    }
                )}
                style={{
                    userSelect: 'none',
                    fontSize,
                    color
                }}
            >
                <span
                    className={clsx("stroke-white", {
                        "absolute": draggable,
                        [classId]: true
                    })}
                    ref={distortableRef}
                    style={{
                        color
                    }}
                >
                    {value}
                </span>
            </span>
        </DraggableWrapper>
    </>;
};

export default Letter;