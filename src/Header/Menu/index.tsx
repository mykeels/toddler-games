import React from 'react';
import { motion } from 'framer-motion';
import { useToggleMenu } from '../useToggleMenu';
import { useClickOutside } from '../useClickOutside';
import { getBaseUrl } from '@/utils/url';
import { vibrate } from '@/utils/vibrate';

export type MenuProps = {
  open?: boolean;
  children?: React.ReactNode;
};

export const Menu = ({ open, children }: MenuProps) => {
  const baseUrl = getBaseUrl();
  const { isOpen, toggleMenu, closeMenu } = useToggleMenu({ open });
  const ref = useClickOutside(closeMenu);
  return (
    <div className="flex flex-col items-center justify-center relative bg-brand-primary print:hidden mr-3" ref={ref}>
      <button onClick={toggleMenu}>
        <motion.div
          animate={{
            rotate: isOpen ? 180 : 0,
          }}
          transition={{
            duration: 0.3,
            ease: 'easeInOut',
          }}
        >
          {isOpen ? (
            <img src={`${baseUrl}/icons/close-white.svg`} alt="close" />
          ) : (
            <img src={`${baseUrl}/icons/menu-white.svg`} alt="menu" />
          )}
        </motion.div>
      </button>
      {
        <>
          {isOpen ? (
            <div className="fixed top-0 left-0 w-full h-full bg-black opacity-50" onClick={closeMenu}></div>
          ) : null}
          <motion.ul
            initial={{ opacity: 0, y: -20 }}
            animate={{
              opacity: isOpen ? 1 : 0,
              y: isOpen ? 0 : -20,
              display: isOpen ? 'flex' : 'none',
            }}
            transition={{
              duration: 0.2,
              ease: 'easeOut',
            }}
            className="absolute top-full  w-[250%] text-black shadow-lg mt-4 
            flex flex-col items-center justify-center gap-4 rounded-t-none"
          >
            {React.Children.map(children, (child) => {
              if (React.isValidElement(child) && child.type === Menu.Item) {
                return (
                  <li
                    onClick={() => {
                      vibrate();
                    }}
                    className="flex hover:scale-110 transition-all duration-300 border border-white rounded-full p-1 hover:bg-brand-accent-pink"
                  >
                    <span className="w-10 h-10 flex items-center justify-center">{child}</span>
                  </li>
                );
              }
            })}
          </motion.ul>
        </>
      }
    </div>
  );
};

const Item = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

Menu.Item = Item;
