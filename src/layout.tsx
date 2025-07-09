import { DetectNewVersion } from './DetectNewVersion';
import Footer from './Footer';
import { AnimatePresence } from 'framer-motion';
import { Outlet } from 'react-router';

export const Layout = () => {
  return (
    <>
      <div className="flex flex-col h-screen text-center select-none bg-brand-primary">
        <main className="flex-grow">
          <AnimatePresence mode="wait">
            <Outlet />
          </AnimatePresence>
        </main>
        <Footer />
        <DetectNewVersion />
      </div>
      <hr />
    </>
  );
};
