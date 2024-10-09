import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export const Aside = () => {
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState(location.pathname);

  useEffect(() => {
    switch (location.pathname) {
      case "/":
        setCurrentPage("/");
        break;
      case "/admin":
        setCurrentPage("/admin");
        break;
      case "/admin/manage-users":
        setCurrentPage("/admin/manage-users");
        break;
      case "/teacher":
        setCurrentPage("/teacher");
        break;
      case "/student":
        setCurrentPage("/student");
        break;
      default:
        break;
    }
  }, [location.pathname]);

  return { currentPage };
};
