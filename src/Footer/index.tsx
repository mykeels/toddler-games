import { useNavigateToRoot } from "@/utils/useNavigateToRoot";

function Footer() {
  const pkgVersion = __APP_VERSION__;
  const navigateToRoot = useNavigateToRoot();
  return (
    <footer
      onClick={async () => {
        await navigateToRoot();
      }}
      className="text-sm text-center text-white cursor-pointer 
      absolute bottom-0 right-0 w-[30dvh] mb-2"
      style={{
        textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
      }}
    >
      Toddler Games {pkgVersion}
    </footer>
  );
}

export default Footer;
