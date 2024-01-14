import { Routes, Route } from "react-router-dom";


import './App.css';
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ResumePage from "./pages/ResumePage";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";
// import { useEffect } from "react";


function App() {
  // const location = useLocation(); // import { useLocation } from 'react-router-dom';

  // useEffect(() => {
  //   // Scroll top when location changes
  //   window.scrollTo(0, 0);
  // }, [location]);

  return (
    <div className="App font-poppins">
      <Routes>
        <Route index path="/" element={<HomePage />} />
        <Route index path="/About" element={<AboutPage />} />
        <Route index path="/Resumé" element={<ResumePage />} />
        <Route index path="/Projects" element={<ProjectsPage />} />
        <Route index path="/Contact" element={<ContactPage />} />
      </Routes>
    </div>
  );
}

export default App;
