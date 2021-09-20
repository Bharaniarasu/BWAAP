import React from "react";
import { withRouter } from "react-router-dom";
import { Row, Col, Button } from "antd";

import businessIcon from "../assets/images/busines.png";

const Business = () => {
  return (
    <Row className="p-2 alt-section" align="middle">
      <Col
        span={16}
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <h2>Business</h2>
        <p>
          BWAAP considers all the stakeholders (Shareholders, Consumers, Product
          Vendors, Franchisees, Intrapreneurs, Entrepreneurs, Volunteers,
          Employees) of a company collectively called as BWAAP Family members.
          Primarily, BWAAP Shareholders can either perform a solitary role as a
          shareholder or they can also be a Consumer, Franchisee, Entrepreneur,
          Product vendor, etc., along with being a shareholder. BWAAP provides
          life-enriching opportunities for our shareholders to exhibit their
          talents and acumen as Franchisee, Entrepreneur, Product vendor,
          Business Developer, etc., and to attain considerable economic & social
          benefits by being a part of our BWAAP Family journey.
        </p>
        <Button className="bwaap-btn-primary">Click Here</Button>
      </Col>
      <Col span={7} offset={1} data-aos="fade-up" data-aos-duration="1000" className="img-an">
        <img src={businessIcon} width="100%" alt="bwaap" />
      </Col>
    </Row>
  );
};
export default withRouter(Business);
