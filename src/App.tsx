import Header from 'components/Header';
import About from 'pages/About';
import LandingPage from 'pages/LandingPage';
import React from 'react';
import './assets/styles/global.css';

function App() {
  return (
    <>
      <Header />
      <LandingPage />
      <About />
    </>
  );
}

export default App;
