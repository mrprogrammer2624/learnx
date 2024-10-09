import { Container } from "@/components";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <Container>
      <Link to={"admin"} className="d-block">Admin</Link>
      <Link to={"teacher"} className="d-block">Teacher</Link>
      <Link to={"student"} className="d-block">Student</Link>
    </Container>
  );
};
