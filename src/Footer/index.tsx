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
      absolute bottom-0 right-0 w-[30dvh] bg-brand-primary py-4"
    >
      Toddler Games {pkgVersion}
    </footer>
  );
}

export default Footer;
