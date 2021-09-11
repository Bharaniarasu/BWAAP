import React from "react";
import { withRouter } from "react-router-dom";
import { Row, Col, Button } from "antd";

const Technologies = (props) => {
  return (
    <Row className="section technology-bwaap">
      <Col span={18} offset={3} data-aos="fade-up" data-aos-duration="2000">
        <div className="about-content bwaap-title-common " align="center">
          <h3>BWAAP </h3>
          <h2>Technologies</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged
          </p>
          <Button className="bwaap-btn-primary">Click Here</Button>
        </div>
      </Col>
    </Row>
  );
};
export default withRouter(Technologies);
