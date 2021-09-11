import React from "react";
import { withRouter } from "react-router-dom";
import { Row, Col, Button } from "antd";

const GlobalChallenges = (props) => {
  return (
    <Row className="strip-gc test">
      <div className="overlay"></div>
      <Col
        span={18}
        align="center"
        offset="3"
        data-aos="fade-up"
        data-aos-duration="3000"
      >
        <div className="bwaap-title-common section">
          <h3>Bwaap</h3>
          <h2>Global Challenges</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <Button className="bwaap-btn-secondary">Click Here</Button>
        </div>
      </Col>
    </Row>
  );
};
export default withRouter(GlobalChallenges);
