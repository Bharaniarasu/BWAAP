// import { auto } from 'async';
// import React, { useEffect, useState } from 'react';
import React from "react";
import { withRouter } from "react-router-dom";
import { Row, Col, Typography } from "antd";
import {  AimOutlined,  MailOutlined,  PhoneOutlined, DribbbleOutlined, LinkedinOutlined, InstagramOutlined, TwitterOutlined, FacebookOutlined, RightOutlined} from "@ant-design/icons";

import happinessIcon from "../assets/images/icons/happiness.png";

const { Title } = Typography;

const Footer = (props) => {
  return (
    <>
      <Row className="footer-section">
          <div className="overlay"></div>
        <Col span={6}>
          <div className="foot-logo">
            <img src={happinessIcon} width="50%" alt="bwaap" />
            <h2>BWAAP</h2>
            {/* <h4>  <AimOutlined /> Address</h4> */}
              <p>
              Tower 27, DLF Gardencity, DLF Garden City Rd, Semmancheri, Thazhambur, Tamil Nadu 600119.
              </p>
          </div>
        </Col>

        <Col span={6}>
          <div className="">
          <h3>Contact</h3>
           
              <h4> <MailOutlined /> Email</h4>
              <p>
              contact@bwaap.com
              </p>
              <h4>  <PhoneOutlined /> Phone</h4>
              <p>
              9876543210
              </p>          
          </div>
        </Col>

        <Col span={6}>
            <h3>Explore</h3>
            <ul className="snip1275">    
                <li> <RightOutlined /> <a href=""> About Us</a></li>
                <li> <RightOutlined /><a>Business</a></li>
                <li> <RightOutlined /><a>Farms</a> </li>
                <li> <RightOutlined /><a> Projects</a></li>
                <li> <RightOutlined /><a>Technology</a></li>
                <li> <RightOutlined /><a>Projects</a></li>
            </ul>
        </Col>

        <Col span={6}>
            <div className="social-links">
            <h3>Touch with us</h3>
            <ul className="snip1275">
                <li><a><FacebookOutlined /> Facebook</a></li>
                <li><a><TwitterOutlined /> Twitter</a></li>
                <li><a><InstagramOutlined /> Instagram </a></li>
                <li><a><LinkedinOutlined /> Linkedin</a></li>
                <li><a><DribbbleOutlined /> Dribble</a></li>
            </ul>
            </div>
        </Col>
      </Row>
    </>
  );
};
export default withRouter(Footer);
