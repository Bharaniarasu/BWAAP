import React from "react";
import { withRouter } from "react-router-dom";
import { Row, Col, Button } from "antd";

const GlobalChallenges = (props) => {
  return (
    <Row className="products-bwaap">
      <Col
        span={12}
        className="products-left"
        data-aos="fade-left"
        data-aos-duration="2000"
      ></Col>
      <Col span={12} data-aos="fade-right" data-aos-duration="2000">
        <div className="content bwaap-title-common ">
          <h3>BWAAP</h3>
          <h1>Products</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard
          </p>
          <Button className="bwaap-btn-primary">Click Here</Button>
        </div>
      </Col>
    </Row>
  );
};
export default withRouter(GlobalChallenges);
