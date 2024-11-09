import { SvgProps } from "../LetterTracing.types";
import {
    DEFAULT_LETTER_SIZE,
    DEFAULT_COLOR,
} from "../LetterTracing.consts";

export default function Square({
    size = DEFAULT_LETTER_SIZE,
    color = DEFAULT_COLOR,
}: SvgProps) {
    return (
        <svg
            width={size}
            height={size} viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="8" y="8" width="130" height="130" fill="white" stroke={color}
                strokeWidth="3"
                strokeDasharray="8 4" />

        </svg>

    );
}
