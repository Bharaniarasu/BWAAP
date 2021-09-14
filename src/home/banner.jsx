import React from "react";
import { withRouter } from "react-router-dom";

import sample from "../assets/video/bwaap.mp4";

const Banner = () => {
  return (
    <div className="banner">
      <div className="home-header"></div>
      <video autoPlay loop muted playsinline>
        <source src={sample} type="video/mp4" />
      </video>
    </div>
  );
};

export default withRouter(Banner);
