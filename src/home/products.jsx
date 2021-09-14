import React from "react";
import { withRouter } from "react-router-dom";
import { Row, Col, Button } from "antd";

const GlobalChallenges = (props) => {
  return (
    <Row className="p-2 alt-section">
      <Col span={24} data-aos="fade-right" data-aos-duration="2000">
          <h3>BWAAP</h3>
          <h1>Products</h1>
          <p>
            At BWAAP, we produce a plethora of natural and organically prepared
            products like aroma enriched Agar items to make you feel calm and
            smell the Royal Fragrance, Multi Flavour Medi-Honey to enrich
            yourself with Vital Anti-Ageing & Vital Immune booster naturally,
            Fresh Organic, Nutrient Fruits & Vegetables, Natural Live Stock
            Products, Fishes, Spices and Medicinal Plants to make
            Customers/Shareholders experience the real taste of goodness paving
            way for holistic health. BWAAP will deploy Omni-channel
            retail providing seamless integrated customer experience whether the
            shareholder/ customer is shopping online from a mobile device, a
            laptop, or by telephone or in a brick-and-mortar physical store. Our
            Smart Farm To Smart Home model paves way for a Rapid Delivery to get
            our farm fresh products directly to your home, we make rapid
            processing, and Delivering also you can get to Monitor orders, quick
            & accurately.
          </p>
          <Button className="bwaap-btn-primary">Click Here</Button>
      </Col>
    </Row>
  );
};
export default withRouter(GlobalChallenges);
