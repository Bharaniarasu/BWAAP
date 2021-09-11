import React from "react";
import { withRouter } from "react-router-dom";
import { Row, Col, Typography, Button } from "antd";

const { Title } = Typography;

const Banner = (props) => {
  return (
    <Row className=" home-page">
      <div className="home-bg"></div>
      <Col span={18} offset={3} align="center" data-aos="fade-down">
        <div className="captions">
          <Title>BWAAP</Title>
          <p>
            BWAAP aims to plant millions of trees through its Smart Agroforestry
            &amp;
            <br />
            Agri-Plantation initiative benefiting Nature, Society &amp; Country
            to the greatest level.
          </p>
        </div>
        <div className="btn-links">
          <Button className="bwaap-btn-secondary">Products</Button>
          <Button className="bwaap-btn-secondary">
            Farms &amp; Plantation
          </Button>
        </div>
      </Col>
    </Row>
  );
};

export default withRouter(Banner);
