import { useNavigateToRoot } from "@/utils/useNavigateToRoot";
import { motion } from "framer-motion";

function Footer() {
  const pkgVersion = __APP_VERSION__;
  const navigateToRoot = useNavigateToRoot();
  return (
    <motion.footer
      onClick={async () => {
        await navigateToRoot();
      }}
      className="text-sm text-center text-white cursor-pointer 
      absolute bottom-0 right-0 w-[30dvh] mb-2"
      style={{
        textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
      }}
      initial={{ opacity: 0, y: 10, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      Toddler Games {pkgVersion}
    </motion.footer>
  );
}

export default Footer;
