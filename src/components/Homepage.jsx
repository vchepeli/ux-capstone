import React from 'react';
import Hero from './Hero';
import Specials from './Specials';
import CustomersSay from './CustomersSay';
import './Homepage.css';
import Chicago from './Chicago';

const Homepage = () => {
  return (
    <div>
      <main>
        <Hero />
        <Specials />
        <CustomersSay />
        <Chicago />
      </main>
    </div>
  );
};

export default Homepage;
