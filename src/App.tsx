import React, { createContext, useState, useContext } from 'react';
import './App.css';
import { Box} from '@mui/material';
import { Routes, Route, BrowserRouter as Router} from 'react-router-dom';

import Home from "./pages/home/Home";
import Header from './components/header/Header'
import Favorites from './pages/favorites/Favorites'
import {DarkModeProvider, DarkModeContext} from './DarkModeProvider'


function App() {
  const darkMode = useContext(DarkModeContext)
  return (
    <DarkModeProvider>
      <div className={ darkMode ? 'container-dark' : 'container-light' }>
        <header>
          <Header />
        </header>
          <Box sx= {{ pt: 10, minHeight: '90vh'}}>
            <Routes>
              <Route path="/" element={ <Home />} />
              <Route path="/home" element={ <Home />} />
              <Route path ="/favorites" element={ <Favorites />} />
            </Routes>
          </Box>
      </div>
    </DarkModeProvider>
  );
}

export default App;
