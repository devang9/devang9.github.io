import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';


function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Resume />
      <Portfolio />
    </div>
  );
}

export default App;
