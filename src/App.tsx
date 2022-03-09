import React from 'react';
import './App.css';
import { Box} from '@mui/material';
import { Routes, Route, BrowserRouter as Router} from 'react-router-dom';

import Home from "./pages/home/Home";
import Header from './components/header/Header'
import Favorites from './pages/favorites/Favorites'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <Box className="App-content" sx= {{ mt: 7}}>
        <Routes>
          <Route path="/" element={ <Home />} />
          <Route path="/home" element={ <Home />} />
          <Route path ="/favorites" element={ <Favorites />} />
        </Routes>
      </Box>
    </div>
  );
}

export default App;
