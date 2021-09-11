import React from "react";
import { withRouter } from "react-router-dom";
import { Row, Col } from "antd";

import agarwoodIcon from "../assets/images/icons/agar-wood.png";
import redsanderIcon from "../assets/images/icons/red-sanders.png";
import vegtableIcon from "../assets/images/icons/vegetables.png";
import fruitsIcon from "../assets/images/icons/fruits.png";
import honeyIcon from "../assets/images/icons/honey.png";
import mediplantIcon from "../assets/images/icons/medicinalplant.png";
import livestockIcon from "../assets/images/icons/livestock.png";
import fishIcon from "../assets/images/icons/fish.png";
import spicesIcon from "../assets/images/icons/spices.png";

const GlobalChallenges = (props) => {
  return (
    <Row className="section farms-plantations">
      <Col span={10} align="left">
        <div className="bwaap-title-common text-bg">
          <h3>bwaap's</h3>
          <h2>Farms &amp; Plantation</h2>
        </div>
      </Col>

      <Col span={14}>
        <Row>
          <Col span={5} className="farm-cards" data-aos="fade-up">
            <Row className="">
              <Col span={12}>
                <img src={agarwoodIcon} width="100%" alt="bwaap" />
              </Col>
              <Col span={12} className="hectares">
                <h2>4000</h2>
                <h3>Hectare</h3>
              </Col>

              <Col span={24} align="middle" className="plantation">
                <h4>Agarwood Plantation</h4>
              </Col>
            </Row>
          </Col>

          <Col
            span={5}
            className="farm-cards"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <Row className="">
              <Col span={12}>
                <img src={redsanderIcon} width="100%" alt="bwaap" />
              </Col>
              <Col span={12} className="hectares">
                <h2>4000</h2>
                <h3>Hectare</h3>
              </Col>

              <Col span={24} align="middle" className="plantation">
                <h4>Redsanders Plantation</h4>
              </Col>
            </Row>
          </Col>

          <Col
            span={5}
            className="farm-cards"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            <Row className="">
              <Col span={12}>
                <img src={vegtableIcon} width="100%" alt="bwaap" />
              </Col>
              <Col span={12} className="hectares">
                <h2>1000</h2>
                <h3>Hectare</h3>
              </Col>

              <Col span={24} align="middle" className="plantation">
                <h4>Vegetables</h4>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col span={5} className="farm-cards" data-aos="fade-up">
            <Row className="">
              <Col span={12}>
                <img src={fruitsIcon} width="100%" alt="bwaap" />
              </Col>
              <Col span={12} className="hectares">
                <h2>1000</h2>
                <h3>Hectare</h3>
              </Col>

              <Col span={24} align="middle" className="plantation">
                <h4>Fruits Farming</h4>
              </Col>
            </Row>
          </Col>

          <Col
            span={5}
            className="farm-cards"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <Row className="">
              <Col span={12}>
                <img src={honeyIcon} width="100%" alt="bwaap" />
              </Col>
              <Col span={12} className="hectares">
                <h2>All</h2>
                <h3>Farms</h3>
              </Col>

              <Col span={24} align="middle" className="plantation">
                <h4>Honey Bee Farming</h4>
              </Col>
            </Row>
          </Col>

          <Col
            span={5}
            className="farm-cards"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            <Row className="">
              <Col span={12} className="hectares">
                <img src={mediplantIcon} width="100%" alt="bwaap" />
              </Col>
              <Col span={12} className="hectares">
                <h2>100</h2>
                <h3>Hectare</h3>
              </Col>

              <Col span={24} align="middle" className="plantation">
                <h4>Medicinal Plantation</h4>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col span={5} className="farm-cards" data-aos="fade-up">
            <Row className="">
              <Col span={12}>
                <img src={livestockIcon} width="100%" alt="bwaap" />
              </Col>
              <Col span={12} className="hectares">
                <h2>500</h2>
                <h3>Hectare</h3>
              </Col>

              <Col span={24} align="middle" className="plantation">
                <h4>Livestock</h4>
              </Col>
            </Row>
          </Col>

          <Col
            span={5}
            className="farm-cards"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <Row className="">
              <Col span={12}>
                <img src={fishIcon} width="100%" alt="bwaap" />
              </Col>
              <Col span={12} className="hectares">
                <h2>100</h2>
                <h3>Hectare</h3>
              </Col>

              <Col span={24} align="middle" className="plantation">
                <h4>Fish Farming</h4>
              </Col>
            </Row>
          </Col>

          <Col
            span={5}
            className="farm-cards"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            <Row className="">
              <Col span={12}>
                <img src={spicesIcon} width="100%" alt="bwaap" />
              </Col>
              <Col span={12} className="hectares">
                <h2>500</h2>
                <h3>Hectare</h3>
              </Col>

              <Col span={24} align="middle" className="plantation">
                <h4>Spices Farming</h4>
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};
export default withRouter(GlobalChallenges);
