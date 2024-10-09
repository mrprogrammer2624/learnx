import { Footer, Header } from "@/components";
import { Outlet } from "react-router-dom";

export const StudentLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
