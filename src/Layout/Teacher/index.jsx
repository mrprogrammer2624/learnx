import { Footer, Header } from "@/components";
import { Outlet } from "react-router-dom";

export const TeacherLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
