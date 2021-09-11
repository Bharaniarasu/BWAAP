import React from "react";
import { withRouter } from "react-router-dom";
import { Row, Col, Button } from "antd";

import businessIcon from "../assets/images/why.jpg";

const Business = (props) => {
  return (
    <Row className="farms-projects section">
      <Col span={16}>
        <div
          className="bwaap-title-common"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <h3>Bwaap</h3>
          <h2>Business</h2>
        </div>
        <div className="" data-aos="fade-up" data-aos-duration="3000">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <Button className="bwaap-btn-primary">Click Here</Button>
        </div>
      </Col>
      <Col span={8} data-aos="fade-up" data-aos-duration="2000">
        <img src={businessIcon} width="100%" alt="bwaap" />
      </Col>
    </Row>
  );
};
export default withRouter(Business);
