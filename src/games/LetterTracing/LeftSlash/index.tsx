import { SvgProps } from "../LetterTracing.types";
import {
    DEFAULT_LETTER_SIZE,
    DEFAULT_COLOR,
} from "../LetterTracing.consts";

export default function LeftSlash({
    size = DEFAULT_LETTER_SIZE,
    color = DEFAULT_COLOR,
}: SvgProps) {
    return (
        <svg width={size} height={size} viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 8L132 132" stroke={color} strokeWidth="3" strokeDasharray="8 4" />
        </svg>
    );
}
