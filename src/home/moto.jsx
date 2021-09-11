import React from "react";
import { withRouter } from "react-router-dom";
import { Row, Col } from "antd";

import healthIcon from "../assets/images/icons/health.png";
import wealthIcon from "../assets/images/icons/wealth.png";
import successIcon from "../assets/images/icons/success.png";
import spritualityIcon from "../assets/images/icons/sprituality.png";
import happinessIcon from "../assets/images/icons/happiness.png";

const Moto = (props) => {
  return (
    <Row className="section moto-quotes" justify="space-between" align="top">
      <Col className="moto-sec" span={22} offset={2}>
        <Row>
          <Col span={4} data-aos="fade-up">
            <img src={healthIcon} width="100%" alt="bwaap" />
            <h2>Health</h2>
          </Col>
          <Col span={4} data-aos="fade-up" data-aos-duration="1000">
            <img src={wealthIcon} width="100%" alt="bwaap" />
            <h2>Wealth</h2>
          </Col>
          <Col span={4} data-aos="fade-up" data-aos-duration="2000">
            <img src={successIcon} width="100%" alt="bwaap" />
            <h2>Success</h2>
          </Col>
          <Col span={4} data-aos="fade-up" data-aos-duration="3000">
            <img src={spritualityIcon} width="100%" alt="bwaap" />
            <h2>Sprituality</h2>
          </Col>
          <Col span={4} data-aos="fade-up" data-aos-duration="3000">
            <img src={happinessIcon} width="100%" alt="bwaap" />
            <h2>Happiness</h2>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default withRouter(Moto);
