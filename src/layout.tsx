import { DetectNewVersion } from './DetectNewVersion';
import Footer from './Footer';

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="flex flex-col h-screen text-center select-none">
        <main className="flex-grow">{children}</main>
        <Footer />
        <DetectNewVersion />
      </div>
      <hr />
    </>
  );
};
