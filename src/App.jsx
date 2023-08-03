import React, { useEffect, useState } from "react";
import "./CSS/App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Nav from "./Components/Nav";
import car from "./Assets/metrocar regency.jpg";
import Translation from "./Translation/Languages.json";
import { Button, IconButton } from "@mui/material";
import Fleet from "./Pages/Fleet";
import Coverage from "./Pages/Coverage";
import { cars } from "./Cars";
import Carfocus from "./Pages/Carfocus";

function App() {
  const [language, setLanguage] = useState("spanish");
  const [translation, setTranslation] = useState({});

  useEffect(() => {
    if (language === "english") {
      setTranslation(Translation.english);
    } else if (language === "spanish") {
      setTranslation(Translation.spanish);
    }
  }, [language]);

  return (
    <div className="App">
      <Router>
        <Nav translation={translation} />
        <div className="translate__btns">
          <IconButton className="translate__btns--phone" onClick={() => setLanguage("spanish")}>
            <p>🇪🇸</p>
          </IconButton>
          <IconButton className="translate__btns--phone" onClick={() => setLanguage("english")}>
            <p>🇺🇸</p>
          </IconButton>
          <Button  className="translate__btns--desktop" onClick={() => setLanguage("spanish")}>
            Español
          </Button>
          <Button  className="translate__btns--desktop" onClick={() => setLanguage("english")}>
            English
          </Button>
        </div>
        <Routes>
          <Route path="/" element={<Home translation={translation} />} />
          <Route path="/fleet" element={<Fleet translation={translation} />} />
          <Route path="/fleet/:id" element={<Carfocus cars={cars} language={language} />} />
          <Route path="/coverage" element={<Coverage translation={translation} cars={cars} />} />
        </Routes>
        <figure className="car__background">
          <img src={car} alt="" />
        </figure>
      </Router>
    </div>
  );
}

export default App;
