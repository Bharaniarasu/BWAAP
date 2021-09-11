import React from "react";
import { withRouter } from "react-router-dom";
import { Row, Col, Button } from "antd";

const AboutBwaap = (props) => {
  return (
    <Row className=" about-bwaap">
      <div className="overlay"></div>
      <Col span={18} offset={3}>
        <div
          className="section about-content bwaap-title-common"
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          <h3>About</h3>
          <h2>Bees World Agro-froestry and Agri plantation</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged
          </p>
          <Button className="bwaap-btn-secondary">About Us</Button>
        </div>
      </Col>
    </Row>
  );
};
export default withRouter(AboutBwaap);
