import { useLocation, useNavigate } from "@tanstack/react-router";

export const useNavigateToRoot = () => {
  const navigate = useNavigate();
  const location = useLocation();
  return async () => {
    if (location.pathname === "/") {
      await navigate({ to: "/" });
      window.location.reload();
    } else {
      navigate({ to: "/" });
    }
  };
};
