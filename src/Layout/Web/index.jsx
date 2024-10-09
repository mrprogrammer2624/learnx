import { Footer, Header } from "@/components";
import { Outlet } from "react-router-dom";

export const WebLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
