import { Container, Button } from "react-bootstrap";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export default function HeroSection() {
  const { darkMode } = useContext(AppContext);

  return (
    <div
      className={`text-center py-5 ${
        darkMode ? "bg-dark text-light" : "bg-light text-dark"
      }`}
    >
      <Container>
        <h1 className="fw-bold">Welcome to CU Fest 2026</h1>
        <p className="lead">Music • Tech • Innovation</p>

        <Button variant="primary" size="lg">
          Register Now
        </Button>
      </Container>
    </div>
  );
}