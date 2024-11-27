import clsx from "clsx";
import Draggable from "react-draggable";

type LetterProps = {
    value: string;
    fontSize?: string;
    color?: string;
    defaultPosition: {
        x: number;
        y: number;
    };
};

export const Letter = ({ value, fontSize = "text-9xl", color = "#000", defaultPosition }: LetterProps) => {
    return <Draggable defaultPosition={defaultPosition}>
        <span
            className={clsx(
                `px-4 font-bold fixed cursor-move draggable-letter`,
                fontSize,
            )}
            style={{
                userSelect: 'none',
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