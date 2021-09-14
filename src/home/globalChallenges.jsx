import React from "react";
import { withRouter } from "react-router-dom";
import { Row, Col, Button } from "antd";

const GlobalChallenges = (props) => {
  return (
    <Row className="bwaap-global test">
      <div className="bwaap-global-overlay"></div>
      <Col
        span={18}
        align="center"
        offset="3"
        data-aos="fade-up"
        data-aos-duration="3000"
        className="p-2"
      >
        <div className="bwaap-title-common section">
          <h2>Global Challenges</h2>
          <p>
            BWAAP has a larger vision of addressing Global challenges such as
            Growing food Demand, Expanding Food Insecurity, Costlier Calories,
            Water Scarcity, Rising Resource Costs, Land Degradation, Alarming
            Climate Change, Increasing Pathogen Virulence, Shrinking Tree
            Canopy, etc., by following several approaches like Indoor Vertical
            farming, Technology aided Land farming, Organic Agriculture &
            Natural inputs, Direct Smart Farm to Home food delivery, Large scale
            commercial afforestation, etc.,
          </p>
          <Button className="bwaap-btn-secondary">Click Here</Button>
        </div>
      </Col>
    </Row>
  );
};
export default withRouter(GlobalChallenges);
