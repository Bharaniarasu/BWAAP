import React from "react";
import { withRouter } from "react-router-dom";
import { Row, Col, Button } from "antd";

const Technologies = (props) => {
  return (
    <Row className="p-2 technology-bwaap">
      <Col span={18} offset={3} data-aos="fade-up" data-aos-duration="2000">
        <div className="about-content bwaap-title-common " align="center">
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
        </div>
      </Col>
    </Row>
  );
};
export default withRouter(Technologies);
