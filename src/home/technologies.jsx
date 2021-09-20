import React from "react";
import { withRouter } from "react-router-dom";
import { Row, Col, Button } from "antd";

import businessIcon from "../assets/images/busines.png";

const Technologies = (props) => {
  return (
    <Row className="p-2">
      <Col span={7} data-aos="fade-up" data-aos-duration="1000" className="img-an">
        <img src={businessIcon} width="100%" alt="bwaap" />
      </Col>
      <Col span={16} offset={1} data-aos="fade-up" data-aos-duration="3000">
          <h2>Technologies</h2>
          <p>
            BWAAP Farms & Plantations will harness the potential of Smart
            Technologies like Variable rate Application technology, Airborne,
            and Satellite remote sensing, Artificial Intelligence (AI), Internet
            of Things (IoT) , Multispectral and hyper-spectral ground-based
            computer modelling, Global positioning systems (GPS) & Geographic
            information systems (GIS), Robotic Driverless tractors, Sensor-based
            Smart irrigation, Unmanned Aerial Vehicle (UAV), Variable rate
            seeding, Hydroponics, Aquaponics, Aeroponics, Poly house farms,
            etc., making farming processes largely data-driven and data-enabled
            bringing an unprecedented level of control and automated
            decision-making to agriculture, making possible an enduring
            ecosystem of innovation in this eldest of industries which could
            address current & future challenges of agriculture industry.
          </p>
          <Button className="bwaap-btn-primary">Click Here</Button>
      </Col>
    </Row>
  );
};
export default withRouter(Technologies);
