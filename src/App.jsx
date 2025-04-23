import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Hero from './components/hero';
import TrustedBy from "./components/TrustedBy";
import CoreFeatures from "./components/CoreFeatures";
import UseCases from "./components/UseCases";
import DeveloperTools from "./components/DeveloperTools";
import Metrics from "./components/Metrics";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from './components/Footer';

function App() {
  return (
    <main>
      <Header />
      <Hero />
      <TrustedBy />
      <CoreFeatures />
      <UseCases />
      <DeveloperTools />
      <Metrics />
      <Navbar />
      <Footer />
    </main>
  );
}

export default App;