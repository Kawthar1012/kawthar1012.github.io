import React, { useState } from "react";
import './App.css';
import Navbar from './components/Navbar';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Order from './components/pages/Order';
import Footer from "./components/Footer";
import Journey from "./components/pages/Journey";
import Projects from "./components/pages/Projects";
import Bounce from "./components/pages/Bounce";
import Trirac from "./components/pages/Trirac";
import Todo from "./components/pages/Todo";
import Dutchman from "./components/pages/Dutchman";
import Ants from "./components/pages/Ants";
import Games from "./components/pages/Games";

function App() {
  let languageStoredInLocalStorage = localStorage.getItem("language");
  let [language, setLanguage] = useState(
    languageStoredInLocalStorage ? languageStoredInLocalStorage : "English"
  );
  return (
    <>
      <Router>
      <Navbar language={language}
        handleSetLanguage={language => {
          setLanguage(language);
          storeLanguageInLocalStorage(language);
          window.location.reload(false);
        }} path={window.location.pathname}/>
      <Routes>
        <Route path='/' element={<Home language={language}/>}>
        </Route>
        <Route path='/journey' element={<Journey language={language}/>}>
        </Route>
        <Route path='/projects' element={<Projects language={language}/>}>
        </Route>
        <Route path='/projects/bounce_reloaded' element={<Bounce language={language}/>}>
        </Route>
        <Route path='/projects/tri_rac' element={<Trirac language={language}/>}>
        </Route>
        <Route path='/projects/choices' element={<Todo language={language}/>}>
        </Route>
        <Route path='/projects/the_flying_dutchman' element={<Dutchman language={language}/>}>
        </Route>
        <Route path='/projects/ants' element={<Ants language={language}/>}>
        </Route>
        <Route path='/projects/multi_games' element={<Games language={language}/>}>
        </Route>
      </Routes>
      <Footer language={language}/>
      </Router>
    </>
  );
}

function storeLanguageInLocalStorage(language) {
  localStorage.setItem("language", language);
}

export default App;
