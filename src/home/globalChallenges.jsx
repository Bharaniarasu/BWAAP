import React from "react";
import { withRouter } from "react-router-dom";
import { Row, Col, Button } from "antd";

const GlobalChallenges = (props) => {
  return (
    <Row className="bwaap-global p-2">
      <Col
        span={24}
        align="center"
        data-aos="fade-up"
        data-aos-duration="3000"
        className="bwaap-global-text"
      >
          <h2>Global Challenges</h2>
          <p style={{ textAlign: 'justify' }}>
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
      </Col>
    </Row>
  );
};
export default withRouter(GlobalChallenges);
