import Footer from 'components/Footer';
import Header from 'components/Header';
import About from 'pages/About';
import Contact from 'pages/Contact';
import LandingPage from 'pages/LandingPage';
import Skills from 'pages/Skills';
import Studies from 'pages/Studies';
import React from 'react';
import './assets/styles/global.css';

function App() {
  return (
    <>
      <Header />
      <LandingPage />
      <About />
      <Studies />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
