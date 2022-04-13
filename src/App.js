import React, { useState } from "react";
import './App.css';
import Navbar from './components/Navbar';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Values from './components/pages/Values';
import Menu from './components/pages/Menu';
import Order from './components/pages/Order';
import Footer from "./components/Footer";

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
        <Route path='/values' element={<Values language={language}/>}>
        </Route>
        <Route path='/menu' element={<Menu language={language}/>}>
        </Route>
        <Route path='/order' element={<Order language={language}/>}>
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
