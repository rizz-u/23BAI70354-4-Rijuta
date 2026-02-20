import NavigationBar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import EventDetails from "./pages/EventDetails";
import Contact from "./pages/Contact";
import RSVP from "./pages/RSVP";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "./context/AppContext";

function App() {
  const { darkMode } = useContext(AppContext);

  return (
    <BrowserRouter>
      <div
  className={
    darkMode
      ? "bg-dark text-light min-vh-100"
      : "bg-light text-dark min-vh-100"}>
        <NavigationBar />

        <div className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/details" element={<EventDetails />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/rsvp" element={<RSVP />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;