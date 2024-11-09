import { SvgProps } from "../LetterTracing.types";
import {
    DEFAULT_LETTER_SIZE,
    DEFAULT_COLOR,
} from "../LetterTracing.consts";

export default function Circle({
    size = DEFAULT_LETTER_SIZE,
    color = DEFAULT_COLOR,
}: SvgProps) {
    return (
        <svg
            width={size}
            height={size} viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle
                cx="75"
                cy="75"
                r="70"
                stroke={color}
                strokeWidth="4"
                strokeDasharray="1 8"
                strokeLinecap="round"
                fill="none"
            />
        </svg>

    );
}
