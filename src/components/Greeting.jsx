import React from 'react';
import Typewriter from '../containers/Typewriter';

const Greeting = () => (
  <div className="greeting">
    <div className="greeting__container">
      <Typewriter />
      <p>my name is Bernardo de Stefano.</p>
      <p>I am a front-end developer</p>
      <p>based in the beautiful city of <span className="greeting__city">Zürich</span>,</p>
      <p>Switzerland.</p>
    </div>
  </div>
);


export default Greeting;
