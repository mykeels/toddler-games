import { useNavigate, useLocation } from "@tanstack/react-router";

function Footer() {
  const pkgVersion = __APP_VERSION__;
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <footer
      onClick={async () => {
        if ("serviceWorker" in navigator) {
          navigator.serviceWorker.getRegistrations().then((registrations) => {
            for (const registration of registrations) {
              registration.update();
            }
          });
        }
        if (location.pathname === "/") {
          await navigate({ to: "/" });
          window.location.reload();
        } else {
          navigate({ to: "/" });
        }
      }}
      className="text-gray-800 text-sm text-center cursor-pointer"
    >
      Toddler Games {pkgVersion}
    </footer>
  );
}

export default Footer;
