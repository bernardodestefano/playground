import React from 'react';
import Greeting from './Greeting';
import '../style.scss';

const Slider = () => (
  <section>
    <div className="slider slide-left-page">
      <div className="slider__title slide-left-intro">HELLO!</div>
    </div>
    <Greeting />
  </section>
);

export default Slider;
