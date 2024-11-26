import React from "react";
import { motion } from "framer-motion";
import { useToggleMenu } from "../useToggleMenu";
import { useClickOutside } from "../useClickOutside";
export type MenuProps = {
    open?: boolean;
    children?: React.ReactNode;
}

export const Menu = ({
    open,
    children
}: MenuProps) => {
    const { isOpen, toggleMenu, closeMenu } = useToggleMenu({ open });
    const ref = useClickOutside(closeMenu);
    return <div className="flex flex-col items-center justify-center relative bg-brand-primary shadow print:hidden" ref={ref}>
        <button onClick={toggleMenu}>
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
            <>
                {
                    isOpen ? <div className="fixed top-0 left-0 w-full h-full bg-black opacity-50" onClick={closeMenu}></div> : null
                }
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
                    className="absolute top-full left-[-25%] w-[150%] bg-brand-accent-pink text-black p-2 shadow-lg mt-4 rounded 
            flex flex-col items-center justify-center gap-4 border border-t-0 border-white rounded-t-none"
                >
                    {React.Children.map(children, (child) => {
                        if (React.isValidElement(child) && child.type === Menu.Item) {
                            return <li className="flex hover:scale-110 transition-all duration-300">
                                {child}
                            </li>
                        }
                    })}
                </motion.ul>
            </>
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