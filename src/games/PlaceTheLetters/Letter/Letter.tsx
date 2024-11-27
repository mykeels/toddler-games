import clsx from "clsx";
import Draggable, { DraggableEvent } from "react-draggable";
import { DEFAULT_LETTER_COLOR, DEFAULT_LETTER_FONT_SIZE } from "../PlaceTheLetters.consts";
import { useRef } from "react";

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
    (props: { children: React.ReactNode, onDrag: (e: DraggableEvent, isDragging: boolean) => void }) => {
        return draggable
            ? <Draggable defaultPosition={draggable.position}
                onStart={(e) => {
                    props.onDrag(e, true);
                    (e.target as HTMLElement).dataset.value = (e.target as HTMLElement).textContent || "";
                }}
                onStop={(e) => props.onDrag(e, false)}
                onDrag={(e) => props.onDrag(e, true)}
            >{props.children}</Draggable>
            : <>{props.children}</>;
    }

export const Letter = ({
    value,
    fontSize = DEFAULT_LETTER_FONT_SIZE,
    color = DEFAULT_LETTER_COLOR,
    draggable
}: LetterProps) => {
    const DraggableWrapper = useDraggableWrapper(draggable);
    const distortableRef = useRef<HTMLSpanElement>(null);

    return <>
        <DraggableWrapper onDrag={(e, isDragging) => {
            distortableRef.current?.classList.toggle("animate-distort", isDragging);
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
        }}>
            <span
                className={clsx(
                    `px-4 font-bold`,
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
                <span className={clsx("stroke-black", {
                    "absolute": draggable
                })} ref={distortableRef}>
                    {value}
                </span>
            </span>
        </DraggableWrapper>
    </>;
};

export default Letter;