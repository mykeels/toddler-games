import { useState } from "react";


export const useToggleMenu = ({
    open
}: {
    open?: boolean;
}) => {
    const [isOpen, setIsOpen] = useState(open ?? false);
    const toggleMenu = () => setIsOpen(!isOpen);
    return { isOpen, toggleMenu };
}