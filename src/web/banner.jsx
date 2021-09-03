// import { auto } from 'async';
// import React, { useEffect, useState } from 'react';
import React from "react";
import { withRouter } from "react-router-dom";
import { Row, Col, Typography, Button } from "antd";

// Images
// import Target from "../assets/svg/health.svg";
// import farmimage from "../assets/images/smart-farm.jpg";
import healthIcon from "../assets/images/icons/health.png";
import wealthIcon from "../assets/images/icons/wealth.png";
import successIcon from "../assets/images/icons/success.png";
import spritualityIcon from "../assets/images/icons/sprituality.png";
import happinessIcon from "../assets/images/icons/happiness.png";

import farmsProjects from "../assets/images/smart-farm.jpeg";

const { Title } = Typography;

const Banner = (props) => {
  return (
    <>
      <Row className=" home-page">
        {/* <div className="overlay"></div> */}
        <div className="home-bg"></div>
        <Col span={18} offset={3} align="center">
          <div className="captions">
            <Title>BWAAP</Title>
            <p>
              BWAAP aims to plant millions of trees through its Smart
              Agroforestry &amp;
              <br />
              Agri-Plantation initiative benefiting Nature, Society &amp;
              Country to the greatest level.
            </p>
          </div>
          <div className="btn-links">
            <Button>Products</Button>
            <Button>Farms & Projects</Button>
          </div>
        </Col>
      </Row>

      <Row className="section moto-quotes" justify="space-between" align="top">
        

        <Col className="moto-sec" span={24} offset={2}>
          <Row>
            <Col span={4}>
              <img src={healthIcon} width="100%" alt="bwaap" />
              <h2>Health</h2>
            </Col>
            <Col span={4}>
              <img src={wealthIcon} width="100%" alt="bwaap" />
              <h2>Wealth</h2>
            </Col>
            <Col span={4}>
              <img src={successIcon} width="100%" alt="bwaap" />
              <h2>Success</h2>
            </Col>
            <Col span={4}>
              <img src={spritualityIcon} width="100%" alt="bwaap" />
              <h2>Sprituality</h2>
            </Col>
            <Col span={4}>
              <img src={happinessIcon} width="100%" alt="bwaap" />
              <h2>Happiness</h2>
            </Col>
          </Row>
        </Col>
      </Row>

      <Row className=" about-bwaap">
          <div className="overlay"></div>
        <Col span={18} offset={3}>
          <div className="section about-content">
            <h3>About</h3>
            <h2>Bees World Agro-froestry and Agri plantation</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged
            </p>
            <Button>About Us</Button>
          </div>
        </Col>
      </Row>

      <Row className="farms-projects section" gutter={50}>
      <Col span={8}>
          <Row className="moto-content">
            <Col span={4}>
              <img src={healthIcon} width="100%" alt="bwaap" />
            </Col>
            <Col span={20}>
              <h2>Health</h2>
            </Col>
            <Col span={24}>
              <p>
                To ensure we eat Organic nutrient Food products for
                our Healthy living.
              </p>
            </Col>
          </Row>
        </Col>

        <Col span={8}>
          <Row className="moto-content">
            <Col span={4}>
              <img src={wealthIcon} width="100%" alt="bwaap" />
            </Col>
            <Col span={20}>
              <h2>Wealth</h2>
            </Col>
            <Col span={24}>
              <p>
                To benefit ourselves from Entrepreneurial,
                Franchising, and Shareholder opportunities leading to
                a Wealthy Life. 
              </p>
            </Col>
          </Row>
        </Col>

        <Col span={8}>
          <Row className="moto-content">
            <Col span={4}>
              <img src={successIcon} width="100%" alt="bwaap" />
            </Col>
            <Col span={20}>
              <h2>Success</h2>
            </Col>
            <Col span={24}>
              <p>
                To lead our Personal & Professional Life with Right
                Livelihood involving Right View, Right Effort, Right
                Focus eventually bringing a Successful Outcome in our life.  {" "}
              </p>
            </Col>
          </Row>
        </Col>

        <Col span={8}>
          <Row className="moto-content">
            <Col span={4}>
              <img src={spritualityIcon} width="100%" alt="bwaap" />
            </Col>
            <Col span={20}>
              <h2>Spirituality </h2>
            </Col>
            <Col span={24}>
              <p>
                To enrich ourselves with continuous Learning, Training,
                Activities (ATMA Bank), and Charity Service building a
                Healthy mindset for us. 
              </p>
            </Col>
          </Row>
        </Col>

        <Col span={8}>
          <Row className="moto-content">
            <Col span={4}>
              <img src={happinessIcon} width="100%" alt="bwaap" />
            </Col>
            <Col span={20}>
              <h2>Happiness</h2>
            </Col>
            <Col span={24}>
              <p>
                To achieve Holistic Happiness & to spread Happiness to Family,
                Friends, Society, State, Nation & Universe.  
              </p>
            </Col>
          </Row>
        </Col>
      </Row>

      <Row className="strip-gc">
        <div className="overlay"></div>
        <Col span={18} align="center" offset="3">
          <div className="gc-captions">
                <h3>Bwaap</h3>
              <h2>Global Challenges</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <Button>Click Here</Button>
          </div>
        </Col>
      </Row>

      <Row className="section farms-projects">
        <Col span={24} align="center">
          <h3>Farms & Projects</h3>
          <h1>Farms & Projects</h1>
        </Col>
        <Col span={8}>
          <figure class="snip1487">
            <img src={farmsProjects} alt="sample79" />
            <figcaption>
              <h3>Farms & Projects</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </figcaption>
          </figure>
        </Col>

        <Col span={8}>
          <figure class="snip1487">
            <img src={farmsProjects} alt="sample79" />
            <figcaption>
              <h3>Farms & Projects</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </figcaption>
          </figure>
        </Col>

        <Col span={8}>
          <figure class="snip1487">
            <img src={farmsProjects} alt="sample79" />
            <figcaption>
              <h3>Farms & Projects</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </figcaption>
          </figure>
        </Col>
      </Row>


      <Row className="products-bwaap">
        <Col span={12} className="products-left"></Col>        
        <Col span={12}>
          <div className="content">
            <h3>BWAAP</h3>
            <h1>Products</h1>
            <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard  
            </p>
          </div>
        </Col>
      </Row>


      
      <Row className="section technology-bwaap">
        <Col span={18} offset={3}>
          <div className="about-content" align="center">
            <h3>BWAAP </h3>
            <h2>Technologies</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged
            </p>
          </div>
        </Col>
      </Row>
    </>
  );
};
export default withRouter(Banner);
