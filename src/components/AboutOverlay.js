import React from "react";
import { TypeAnimation } from 'react-type-animation';


const AboutOverlay = () => {
  const aboutStyle = {
    //overlay on top of lottie background
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',

    //center text
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexFlow: 'column',
    //text color
    color: '#37474F',
    fontFamily: "'Playfair Display', 'serif'",
    fontSize: '4vw',
    zIndex: 1
  }

  const aboutWrapperStyle = {
    //margins
    marginLeft: '10px',
    marginRight: '10px',
    textAlign: 'center',
  }
  const titleStyle = {};

  const innerStyle = {
    fontSize: '1.5rem',
  };

  let textReplace = (textOptions) => {
    const textSequence = textOptions.map((text) => {return [text, 1500]}).flat();
    console.log(textSequence)
    return (<TypeAnimation
      // Same String at the start will only be typed once, initially
      sequence={textSequence}
      speed={20} // Custom Speed from 1-99 - Default Speed: 40
      style={{ fontSize: '1.3em' }}
      wrapper="span" // Animation will be rendered as a <span>
      repeat={Infinity} // Repeat this Animation Sequence infinitely
    />);
  }

  return (
    <div className={"about"} style={aboutStyle}>
      <div style={aboutWrapperStyle}>
        <div style={titleStyle}>
          <h1>NewCareer</h1>
        </div>
        <div style={innerStyle}>
          <p>NewCareer redefines the approach to finding the perfect {textReplace(["job", "career", "gig"])} for you.</p>
          <p>Using cutting edge artificial intelligence, NewCareer will continuously tune to your likes and dislikes until you land on the perfect opportunity for you.</p>
        </div>
      </div>
    </div>);
};

export default AboutOverlay;
