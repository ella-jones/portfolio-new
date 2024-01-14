import { Routes, Route } from "react-router-dom";


import './App.css';
import HomePage from "./pages/HomePage";
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
      </Routes>
    </div>
  );
}

export default App;
