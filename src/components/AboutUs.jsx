import React from 'react';
import dog from '../assets/images/1.png';

function AboutUs(){
  return (
    <div>
      <style global jsx>{`
        .pics{
          width: 500px;
        }
      `}</style>
      <div className="container">
        <p>ABOUT US PAGE</p>
        <hr/>
        <p>here is a dog, he works here</p>
        <img src={dog} className="pics"/>
      </div>
    </div>
  );
}

export default AboutUs;
