import clsx from "clsx";
import Draggable from "react-draggable";
import { DEFAULT_LETTER_COLOR, DEFAULT_LETTER_FONT_SIZE } from "../PlaceTheLetters.consts";

type LetterProps = {
    value: string;
    fontSize?: string;
    color?: string;
    defaultPosition: {
        x: number;
        y: number;
    };
};

export const Letter = ({ 
    value, 
    fontSize = DEFAULT_LETTER_FONT_SIZE, 
    color = DEFAULT_LETTER_COLOR, 
    defaultPosition 
}: LetterProps) => {
    return <Draggable defaultPosition={defaultPosition}>
        <span
            className={clsx(
                `px-4 font-bold fixed cursor-move draggable-letter text-9xl`,
            )}
            style={{
                userSelect: 'none',
                fontSize,
                color
            }}
        >
            <span className="animate-distort absolute">
                {value}
            </span>
        </span>
    </Draggable>;
};

export default Letter;