import "./App.css";
import Raect from "react";
import { Routes, Route, Link } from "react-router-dom";
import MainPage from "./Pages/MainPage";
import AboutPage from "./Pages/AboutPage";

function App() {
  return (
    <div className="hui">
      <Routes>
        <Route index element={<MainPage />} />
        <Route path="/about/:id" element={<AboutPage />} />
      </Routes>
    </div>
  );
}

export default App;
