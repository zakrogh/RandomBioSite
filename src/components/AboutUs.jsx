import React from 'react';
import dog from '../assets/images/1.png';

function AboutUs(){
  return (
    <div>
      <p>ABOUT US PAGE</p>
      <img src={dog} className="pics"/>
    </div>
  );
}

export default AboutUs;
