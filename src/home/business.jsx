import React from "react";
import { withRouter } from "react-router-dom";
import { Row, Col, Button } from "antd";

import businessIcon from "../assets/images/why.jpg";

const Business = () => {
  return (
    <Row className="p-2 alt-section" align="middle">
      <Col
        span={16}
        data-aos="fade-up"
        data-aos-duration="1000"
        style={{ padding: "0 2em" }}
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
      <Col span={8} data-aos="fade-up" data-aos-duration="1000">
        <img src={businessIcon} width="100%" alt="bwaap" className="da" />
      </Col>
    </Row>
  );
};
export default withRouter(Business);
