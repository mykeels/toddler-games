import clsx from "clsx";
import Draggable from "react-draggable";
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
    (props: { children: React.ReactNode, onDrag: (isDragging: boolean) => void }) => {
        return draggable
            ? <Draggable defaultPosition={draggable.position}
                onStart={() => props.onDrag(true)}
                onStop={() => props.onDrag(false)}
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

    return <DraggableWrapper onDrag={(isDragging) => {
        distortableRef.current?.classList.toggle("animate-distort", isDragging);
    }}>
        <span
            className={clsx(
                `px-4 font-bold cursor-move draggable-letter text-9xl`,
                {
                    fixed: draggable
                }
            )}
            style={{
                userSelect: 'none',
                fontSize,
                color
            }}
        >
            <span className={
                clsx("absolute")
            } ref={distortableRef}>
                {value}
            </span>
        </span>
    </DraggableWrapper>;
};

export default Letter;