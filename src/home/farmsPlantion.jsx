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
    <Row className="farms-plantations p-3">
      <Col span={8}>
        <Row>
          <Col span={3}>
            <img src={livestockIcon} width="100%" alt="bwaap" />
            <h4>Livestock</h4>
          </Col>
          <Col span={3} offset={16}>
            <img src={livestockIcon} width="100%" alt="bwaap" />
            <h4>Livestock</h4>
          </Col>
          <Col span={3}>
            <img src={livestockIcon} width="100%" alt="bwaap" />
            <h4>Livestock</h4>
          </Col>
        </Row>
      </Col>
      <Col span={8}>
        <div className="bwaap-title-common text-bg">
          <h3>Farms &amp; Plantation</h3>
        </div>
      </Col>
      <Col span={8}>
        <Row>
          <Col span={3} push={16}>
            <img src={livestockIcon} width="100%" alt="bwaap" />
            <h4>Livestock</h4>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};
export default withRouter(GlobalChallenges);
