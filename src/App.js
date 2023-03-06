import React from "react";
import LottieBackground from "./components/LottieBackground";
import AboutOverlay from "./components/AboutOverlay";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <AboutOverlay/>
      <LottieBackground />
      <Footer/>
    </div>
  );
};

export default App;
