import { Footer, Header } from "@/components";
import { Outlet } from "react-router-dom";

export const AdminLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
