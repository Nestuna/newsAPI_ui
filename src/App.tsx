import React from 'react';
import './App.css';
import Home from "./pages/home/Home";
import Header from './components/header/Header'
import { Container } from '@mui/material';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <Container className="App-content" sx= {{ mt: 7}}>
        <Home />
      </Container>
    </div>
  );
}

export default App;
