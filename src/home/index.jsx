import React from "react";
import { withRouter } from "react-router-dom";

import Banner from "./banner";
import Moto from "./moto";
import AboutBwaap from "./aboutBwaap";
import Rightlivelihood from './rightlivelihood';
import Business from "./business";
import GlobalChallenges from "./globalChallenges";
import SmartFarmsAndProducts from "./smartFarmsAndProducts";
import OmniChannel from "./omniChannel";
import Technologies from "./technologies";

const Home = () => (
  <>
    <Banner />
    <Moto />
    <AboutBwaap />
    <Rightlivelihood />
    <Technologies />
    <GlobalChallenges />
    <Business />
    <SmartFarmsAndProducts />
    <OmniChannel />
  </>
);

export default withRouter(Home);
