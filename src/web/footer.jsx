// import { auto } from 'async';
// import React, { useEffect, useState } from 'react';
import React from "react";
import { withRouter, Link } from "react-router-dom";
import { Row, Col } from "antd";
import {  MailOutlined,  PhoneOutlined, DribbbleOutlined, LinkedinOutlined, InstagramOutlined, TwitterOutlined, FacebookOutlined, RightOutlined} from "@ant-design/icons";

import happinessIcon from "../assets/images/icons/happiness.png";


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
                <li> <RightOutlined /> <Link to="/"> About Us</Link></li>
                <li> <RightOutlined /><Link to="/">Business</Link></li>
                <li> <RightOutlined /><Link to="/">Farms</Link> </li>
                <li> <RightOutlined /><Link to="/"> Projects</Link></li>
                <li> <RightOutlined /><Link to="/">Technology</Link></li>
                <li> <RightOutlined /><Link to="/">Projects</Link></li>
            </ul>
        </Col>

        <Col span={6}>
            <div className="social-links">
            <h3>Touch with us</h3>
            <ul className="snip1275">
                <li><Link to="/"><FacebookOutlined /> Facebook</Link></li>
                <li><Link to="/"><TwitterOutlined /> Twitter</Link></li>
                <li><Link to="/"><InstagramOutlined /> Instagram </Link></li>
                <li><Link to="/"><LinkedinOutlined /> Linkedin</Link></li>
                <li><Link to="/"><DribbbleOutlined /> Dribble</Link></li>
            </ul>
            </div>
        </Col>
      </Row>
      <Row className="copy-right">
        <Col span={24} align="center">
          <p>All Rights Reserved @BWAAP 2021</p>
        </Col>
      </Row>
    </>
  );
};
export default withRouter(Footer);
