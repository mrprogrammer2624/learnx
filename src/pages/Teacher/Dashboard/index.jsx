import { useTitle } from "@/App";

export const Dashboard = () => {
  const { setHeaderText } = useTitle();
  setHeaderText("Teacher Dashboard");
  return <div>Dashboard</div>;
};
