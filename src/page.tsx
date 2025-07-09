// src/components/Page.tsx
import { motion } from 'framer-motion';
import { useLocation } from 'react-router';

const transition = { duration: 0.8, ease: [0.4, 0.0, 0.2, 1] };
const fadeInFadeOut = {
  initial: { opacity: 0, transition },
  animate: { opacity: 1, transition },
  exit: { opacity: 0, transition },
};

export const Page = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();

  return (
    <motion.div
      key={location.pathname + location.search}
      variants={fadeInFadeOut}
      initial="initial"
      animate="animate"
      exit="exit"
      style={{ height: '100dvh' }}
    >
      {children}
    </motion.div>
  );
};
