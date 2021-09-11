import React from "react";
import { withRouter } from "react-router-dom";
import { Row, Col } from "antd";

import Banner from "./banner";
import Moto from "./moto";
import AboutBwaap from "./aboutBwaap";
import Business from "./business";
import GlobalChallenges from "./globalChallenges";
import FarmsPlantion from "./farmsPlantion";
import Products from "./products";
import Technologies from "./technologies";

const Home = () => (
  <Row>
    <Col span={24}>
      <Banner />
    </Col>
    <Col span={24}>
      <Moto />
    </Col>
    <Col span={24}>
      <AboutBwaap />
    </Col>
    <Col span={24}>
      <Business />
    </Col>
    <Col span={24}>
      <GlobalChallenges />
    </Col>
    <Col span={24}>
      <FarmsPlantion />
    </Col>
    <Col span={24}>
      <Products />
    </Col>
    <Col span={24}>
      <Technologies />
    </Col>
  </Row>
);

export default withRouter(Home);
