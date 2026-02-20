import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export default function Footer() {
  const { darkMode } = useContext(AppContext);

  return (
    <div
      className={`text-center p-3 ${
        darkMode ? "bg-dark text-light" : "bg-light text-dark"
      }`}
    >
      © 2026 CU Fest | Chandigarh University
    </div>
  );
}
