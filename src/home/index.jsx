import React from "react";
import { withRouter } from "react-router-dom";

import Banner from "./banner";
import Moto from "./moto";
import AboutBwaap from "./aboutBwaap";
import Business from "./business";
import GlobalChallenges from "./globalChallenges";
import FarmsPlantion from "./farmsPlantion";
import Products from "./products";
import Technologies from "./technologies";

const Home = () => (
  <>
    <Banner />
    <Moto />
    <AboutBwaap />
    <Business />
    <GlobalChallenges />
    {/* <FarmsPlantion /> */}
    <Products />
    <Technologies />
  </>
);

export default withRouter(Home);
