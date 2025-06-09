import { useLocation, useNavigate } from "react-router";

export const useNavigateToRoot = () => {
  const navigate = useNavigate();
  const location = useLocation();
  return async () => {
    if (location.pathname === "/") {
      await navigate("/");
      window.location.reload();
    } else {
      navigate("/");
    }
  };
};
