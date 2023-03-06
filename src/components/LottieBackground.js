import React from "react";
import { useLottie } from "lottie-react";
import circles from "./assets/circles.json";

const LottieBackground = () => {
  const style = {
    height: '100vh',
    backgroundColor: '#CFD8DC'
  };

  const options = {
    animationData: circles,
    loop: true,
    speed: 1,
    style: style
  };

  const lottie = useLottie(options);
  lottie.setSpeed(.25)
  return lottie.View;
};

export default LottieBackground;
