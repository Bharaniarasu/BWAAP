import React from "react";
import { withRouter } from "react-router-dom";
import { Row, Col } from "antd";
// import Section1 from "./section-1";
import Target from "../assets/images/020.png";

const About = () => 
<>
<Row className="about-banner section">
    <Col  span={24} className="">
        <div className="banner-title">
            <h3>bwaap</h3>
            <h2>About Us</h2>
        </div>
    </Col>
</Row>

<Row className="section about-content">
    <Col className="" span={12}>
        <div className="content">
            <h3>about</h3>
            <h2>Bwaap</h2>
            <div className="quotes">
                <span>"</span>
                <h3>We come from the earth, we return to the earth, and in between, we garden the earth, <br/>says Bees.
                <br/>We follow the path of Bees nurturing World'', says Bees World Organization.  </h3>
            </div>   
            <p>Bees are the batteries of orchards, gardens, and they pollinate crops, serve the Food Cycle, and nurtures Nature. Bees World Organization desires to mimic Bees in nurturing Nature, People & Planet Earth.  </p>         
        </div>
    </Col>
</Row>
</>;

export default withRouter(About);
