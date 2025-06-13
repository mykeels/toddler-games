/* eslint-disable react-refresh/only-export-components */
import clsx from "clsx";
import { useToggleMenu } from "../useToggleMenu";
import { createContext, useContext, useRef, useState } from "react";
import { motion } from "framer-motion";
import { StoryFn } from "@storybook/react";
import { useDebouncedCallback } from 'use-debounce';
import { useClickOutside } from "../useClickOutside";
import { getBaseUrl } from "@/utils/url";

export const Levels = () => {
    const { isOpen, toggleMenu, closeMenu } = useToggleMenu({ open: false });
    const { level, setLevel } = useContext(LevelContext);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const updateTitle = (value: number) => {
        if (titleRef.current) {
            titleRef.current.textContent = `Level ${value}`;
        }
    }
    const ref = useClickOutside(closeMenu);
    const baseUrl = getBaseUrl();
    return <div className="flex flex-row gap-2 relative group" ref={ref}>
        <button onClick={toggleMenu} className="flex p-2">
            <img src={`${baseUrl}/icons/ladder-white.svg`} alt="ladder" className={
                clsx("transform duration-300 w-10 h-10", {
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
                className="absolute right-0 top-0 w-48 p-2 mr-12 flex flex-col gap-2 shadow border border-white rounded group-hover:bg-brand-accent-pink"
            >
                <h4 className="text-white text-sm text-center" ref={titleRef}>{`Level ${level}`}</h4>
                <input
                    type="range"
                    min="1"
                    max="5"
                    step="1"
                    defaultValue={level.toString()}
                    onChange={(e) => {
                        setLevel(parseInt(e.target.value));
                        updateTitle(parseInt(e.target.value));
                    }}
                    className="w-full cursor-pointer"
                />
            </motion.div>
        }
    </div>
}

const LevelContext = createContext<{ level: number, setLevel: (level: number) => void }>({ level: 1, setLevel: () => { } });

Levels.LevelContext = LevelContext;

const $window = typeof window !== "undefined" ? window : undefined;
const LEVEL_KEY = "tg:level";

export const LevelContextProvider = ({
    children,
    getLevel = () => parseInt($window?.localStorage?.getItem(LEVEL_KEY) || "1"),
    saveLevel = (level) => $window?.localStorage.setItem(LEVEL_KEY, level.toString())
}: {
    children: React.ReactNode,
    getLevel?: () => number,
    saveLevel?: (level: number) => void
}) => {
    const [level, setLevel] = useState(getLevel ? getLevel() : 1);
    const debouncedSetLevel = useDebouncedCallback((level: number) => {
        setLevel(level);
        if (saveLevel) saveLevel(level);
    }, 1000);
    return <LevelContext.Provider value={{
        level, setLevel: level => debouncedSetLevel(level)
    }}>
        {children}
    </LevelContext.Provider>
}

Levels.ContextProvider = LevelContextProvider;

export const useLevel = () => {
    const { level } = useContext(LevelContext);
    return level;
}

export const withLevels = (Story: StoryFn) => {
    return <LevelContextProvider>
        <Story />
    </LevelContextProvider>
}