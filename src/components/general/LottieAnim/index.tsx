import * as animationData from "assets/anim/loading.json";

import Lottie from "react-lottie";
import React from "react";

type Props = {};

const LottieAnim = (props: Props) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <Lottie
      options={defaultOptions}
      height={100}
      width={100}
      // isStopped={this.state.isStopped}
      // isPaused={this.state.isPaused}
    />
  );
};

export default LottieAnim;
