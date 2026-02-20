import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export default function NavigationBar() {
  const { darkMode } = useContext(AppContext);

  return (
    <Navbar bg={darkMode ? "dark" : "light"} variant={darkMode ? "dark" : "light"}>
      <Container>
        <Navbar.Brand as={Link} to="/">CU Fest 2026</Navbar.Brand>
        <Nav>
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/details">Details</Nav.Link>
          <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
          <Nav.Link as={Link} to="/rsvp">RSVP</Nav.Link>
          <ThemeToggle />
        </Nav>
      </Container>
    </Navbar>
  );
}