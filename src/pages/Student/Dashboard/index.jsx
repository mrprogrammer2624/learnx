import { useTitle } from "@/App";

export const Dashboard = () => {
  const { setHeaderText } = useTitle();
  setHeaderText("Student Dashboard");
  return <div>Dashboard</div>;
};
