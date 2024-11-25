import React from "react";
import { onTouch } from "@/utils/touch";
import { useState } from "react";
import { motion } from "framer-motion";
export type MenuProps = {
    open?: boolean;
    children?: React.ReactNode;
}

export const Menu = ({
    open,
    children
}: MenuProps) => {
    const { isOpen, toggleMenu } = useToggleMenu({ open });

    return <div className="flex flex-col items-center justify-center relative bg-brand-primary">
        <button {...onTouch(toggleMenu)}>
            <motion.div
                animate={{
                    rotate: isOpen ? 180 : 0,
                }}
                transition={{
                    duration: 0.3,
                    ease: "easeInOut"
                }}
            >
                {
                    isOpen ? <img src="./icons/close-white.svg" alt="close" /> : <img src="./icons/menu-white.svg" alt="menu" />
                }
            </motion.div>
        </button>
        {
            <motion.ul
                initial={{ opacity: 0, y: -20 }}
                animate={{
                    opacity: isOpen ? 1 : 0,
                    y: isOpen ? 0 : -20,
                    display: isOpen ? "flex" : "none"
                }}
                transition={{
                    duration: 0.2,
                    ease: "easeOut"
                }}
                className="absolute top-full left-[-25%] w-[150%] bg-brand-primary text-black p-2 shadow-lg mt-4 rounded 
          flex flex-col items-center justify-center gap-4"
            >
                {React.Children.map(children, (child) => {
                    if (React.isValidElement(child) && child.type === Menu.Item) {
                        return <li className="flex">
                            {child}
                        </li>
                    }
                })}
            </motion.ul>
        }
    </div>
}

const Item = ({
    children
}: {
    children: React.ReactNode;
}) => {
    return <>{children}</>
}

Menu.Item = Item;

export const useToggleMenu = ({
    open
}: {
    open?: boolean;
}) => {
    const [isOpen, setIsOpen] = useState(open ?? false);
    const toggleMenu = () => setIsOpen(!isOpen);
    return { isOpen, toggleMenu };
}