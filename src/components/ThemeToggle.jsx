import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export default function ThemeToggle() {
  const { darkMode, toggleTheme } = useContext(AppContext);

  return (
    <button onClick={toggleTheme} className="btn btn-warning ms-2">
      {darkMode ? "Light" : "Dark"}
    </button>
  );
}