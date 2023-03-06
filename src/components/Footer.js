import React from "react";


const Footer = () => {
  const aboutStyle = {
    //overlay on top of lottie background
    position: 'absolute',
    width: '100%',
    textAlign: 'center',
    bottom: "20px",
    zIndex: 1,
    color: '#37474F',
    fontFamily: "'Playfair Display', 'serif'",
  }
  const mailtoStyle = {
    color: '#37474F',

  }
  return (
    <div className={"footer"} style={aboutStyle}>
      <a style={mailtoStyle} href="mailto:turner@newcareer.app">Get In Touch</a> To Find Out More
    </div>);
};

export default Footer;
