import clsx from "clsx";
import { useToggleMenu } from "../useToggleMenu";
import { onTouch } from "@/utils/touch";
import { useState } from "react";
import { motion } from "framer-motion";

export const Levels = () => {
    const { isOpen, toggleMenu } = useToggleMenu({ open: false });
    const [level, setLevel] = useState(1);
    return <div className="flex flex-row gap-2 relative">
        <button {...onTouch(toggleMenu)}>
            <img src="./icons/ladder-white.svg" alt="ladder" className={
                clsx("transform duration-300", {
                    "rotate-[30deg]": isOpen,
                    "rotate-0": !isOpen
                })
            } />
        </button>
        {
            <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{
                    opacity: isOpen ? 1 : 0,
                    x: isOpen ? 0 : 20,
                    display: isOpen ? "flex" : "none"
                }}
                transition={{
                    duration: 0.2,
                    ease: "easeOut"
                }}
                className="absolute right-0 top-[-50%] w-48 bg-brand-primary p-1 mr-8 rounded flex flex-col gap-2"
            >
                <h4 className="text-white text-sm text-center">Level {level}</h4>
                <input
                    type="range"
                    min="1"
                    max="5" 
                    step="1"
                    value={level}
                    onChange={(e) => setLevel(parseInt(e.target.value))}
                    className="w-full cursor-pointer"
                />
            </motion.div>
        }
    </div>
}