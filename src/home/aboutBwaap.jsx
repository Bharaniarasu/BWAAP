import React from "react";
import { withRouter } from "react-router-dom";
import { Row, Col, Button } from "antd";

const AboutBwaap = () => {
  return (
    <Row className=" about-bwaap p-2">
      <Col
        span={24}
        className="about-bwaap-text"
        data-aos="fade-up"
        data-aos-duration="3000"
      >
        <h2>About</h2>
        <p>
          We are BWAAP, a Social Entrepreneurship firm focused on making People
          Healthier, Planet Greener and Nurturing Nature. We blends Large Scale
          Organic Food Produce with Automated Smart Digital Farming system,
          Smart Farm to Home Business model & Omni-Channel customer experience
          with a firm belief of addressing Global challenges of Food, Climate,
          Land, Resources & Soil.
          <br />
          Organic Food Produce to nurture Nature & People holistically, Smart
          Digital Farming for real-time forecast & efficient farm output, Smart
          Farm to Home model to offer healthy products at shareholder price &
          Omni-Channel marketing for enriched consumer experience.
        </p>
        <Button>About Us</Button>
      </Col>
    </Row>
  );
};
export default withRouter(AboutBwaap);
