import { SvgProps } from "../LetterTracing.types";
import {
    DEFAULT_LETTER_SIZE,
    DEFAULT_COLOR,
} from "../LetterTracing.consts";

export default function Triangle({
    size = DEFAULT_LETTER_SIZE,
    color = DEFAULT_COLOR,
}: SvgProps) {
    return (
        <svg
            width={size}
            height={size} viewBox="0 0 140 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.58399 119.5L70 1L138.416 119.5H1.58399Z" fill="white" stroke={color} />
            
        </svg>

    );
}
