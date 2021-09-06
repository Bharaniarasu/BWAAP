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

import agarwoodIcon from "../assets/images/icons/agar-wood.png";
import redsanderIcon from "../assets/images/icons/red-sanders.png";
import vegtableIcon from "../assets/images/icons/vegetables.png";
import fruitsIcon from "../assets/images/icons/fruits.png";
import honeyIcon from "../assets/images/icons/honey.png";
import mediplantIcon from "../assets/images/icons/medicinalplant.png";
import livestockIcon from "../assets/images/icons/livestock.png";
import fishIcon from "../assets/images/icons/fish.png";
import spicesIcon from "../assets/images/icons/spices.png";

const { Title } = Typography;

const Banner = (props) => {
  return (
    <>
      <Row className=" home-page">
        {/* <div className="overlay"></div> */}
        <div className="home-bg"></div>
        <Col span={18} offset={3} align="center" data-aos="fade-down">
          <div className="captions" >
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
            <Button className="bwaap-btn-secondary">Products</Button>
            <Button className="bwaap-btn-secondary">Farms & Plantation</Button>
          </div>
        </Col>
      </Row>

      <Row className="section moto-quotes" justify="space-between" align="top">
        <Col className="moto-sec" span={24} offset={2}>
          <Row>
            <Col span={4} data-aos="fade-up">
              <img src={healthIcon} width="100%" alt="bwaap" />
              <h2>Health</h2>
            </Col>
            <Col span={4}  data-aos="fade-up"  data-aos-duration="1000">
              <img src={wealthIcon} width="100%" alt="bwaap" />
              <h2>Wealth</h2>
            </Col>
            <Col span={4}  data-aos="fade-up"  data-aos-duration="2000">
              <img src={successIcon} width="100%" alt="bwaap" />
              <h2>Success</h2>
            </Col>
            <Col span={4}  data-aos="fade-up"  data-aos-duration="3000">
              <img src={spritualityIcon} width="100%" alt="bwaap" />
              <h2>Sprituality</h2>
            </Col>
            <Col span={4}  data-aos="fade-up"  data-aos-duration="3000">
              <img src={happinessIcon} width="100%" alt="bwaap" />
              <h2>Happiness</h2>
            </Col>
          </Row>
        </Col>
      </Row>

      <Row className=" about-bwaap">
        <div className="overlay"></div>
        <Col span={18} offset={3}>
          <div className="section about-content bwaap-title-common" data-aos="fade-up"  data-aos-duration="3000">
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
            <Button className="bwaap-btn-secondary">About Us</Button>
          </div>
        </Col>
      </Row>

      <Row className="farms-projects section">
        <Col span={24} align="center">
          <div className="bwaap-title-common" data-aos="fade-up"  data-aos-duration="3000">
            <h3>Bwaap</h3>
            <h2>Business</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
        </Col>
        <Col span={8} data-aos="fade-up"  data-aos-duration="1000">
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

        <Col span={8} data-aos="fade-up"  data-aos-duration="2000">
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

        <Col span={8} data-aos="fade-up"  data-aos-duration="3000">
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

        <Col span={8} data-aos="fade-up"  data-aos-duration="1000">
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

        <Col span={8} data-aos="fade-up"  data-aos-duration="2000">
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
        <Col span={18} align="center" offset="3"  data-aos="fade-up"  data-aos-duration="3000"s>
          <div className="bwaap-title-common section">
            <h3>Bwaap</h3>
            <h2>Global Challenges</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <Button className="bwaap-btn-secondary">Click Here</Button>
          </div>
        </Col>
      </Row>

      
      <Row className="section farms-plantations">
        <Col span={24} align="center">
          <div className="bwaap-title-common">
            <h3>Farms & Plantation</h3>
            <h2>Farms & Plantation</h2>
          </div>
        </Col>

        <Col span={24} offset={2}>
          <Row>
            <Col span={5} className="farm-cards"  data-aos="fade-up"  >
              <Row className="">
                <Col span={12}>
                  <img src={agarwoodIcon} width="100%" alt="bwaap" />
                </Col>
                <Col span={12} className="hectares">
                  <h2>4000</h2>
                  <h3>Hectare</h3>
                </Col>

                <Col span={24} align="middle" className="plantation">
                  <h4>Agarwood Plantation</h4>
                </Col>
              </Row>
            </Col>

            <Col span={5} className="farm-cards"  data-aos="fade-up"  data-aos-duration="2000">
              <Row className="">
                <Col span={12}>
                  <img src={redsanderIcon} width="100%" alt="bwaap" />
                </Col>
                <Col span={12} className="hectares">
                  <h2>4000</h2>
                  <h3>Hectare</h3>
                </Col>

                <Col span={24} align="middle" className="plantation">
                  <h4>Redsanders Plantation</h4>
                </Col>
              </Row>
            </Col>

            <Col span={5} className="farm-cards" data-aos="fade-up"  data-aos-duration="3000">
              <Row className="">
                <Col span={12}>
                  <img src={vegtableIcon} width="100%" alt="bwaap" />
                </Col>
                <Col span={12} className="hectares">
                  <h2>1000</h2>
                  <h3>Hectare</h3>
                </Col>

                <Col span={24} align="middle" className="plantation">
                  <h4>Vegetables</h4>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col span={5} className="farm-cards" data-aos="fade-up"  >
              <Row className="">
                <Col span={12}>
                  <img src={fruitsIcon} width="100%" alt="bwaap" />
                </Col>
                <Col span={12} className="hectares">
                  <h2>1000</h2>
                  <h3>Hectare</h3>
                </Col>

                <Col span={24} align="middle" className="plantation">
                  <h4>Fruits Farming</h4>
                </Col>
              </Row>
            </Col>

            <Col span={5} className="farm-cards" data-aos="fade-up"  data-aos-duration="2000">
              <Row className="">
                <Col span={12}>
                  <img src={honeyIcon} width="100%" alt="bwaap" />
                </Col>
                <Col span={12} className="hectares">
                  <h2>All FARMS</h2>
                </Col>

                <Col span={24} align="middle" className="plantation">
                  <h4>Honey Bee Farming</h4>
                </Col>
              </Row>
            </Col>

            <Col span={5} className="farm-cards" data-aos="fade-up"  data-aos-duration="3000">
              <Row className="">
                <Col span={12} className="hectares">
                  <img src={mediplantIcon} width="100%" alt="bwaap" />
                </Col>
                <Col span={12} className="hectares">
                  <h2>100</h2>
                  <h3>Hectare</h3>
                </Col>

                <Col span={24} align="middle" className="plantation">
                  <h4>Medicinal Plantation</h4>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col span={5} className="farm-cards" data-aos="fade-up" >
              <Row className="">
                <Col span={12}>
                  <img src={livestockIcon} width="100%" alt="bwaap" />
                </Col>
                <Col span={12} className="hectares">
                  <h2>500</h2>
                  <h3>Hectare</h3>
                </Col>

                <Col span={24} align="middle" className="plantation">
                  <h4>Livestock</h4>
                </Col>
              </Row>
            </Col>

            <Col span={5} className="farm-cards" data-aos="fade-up"  data-aos-duration="2000">
              <Row className="">
                <Col span={12}>
                  <img src={fishIcon} width="100%" alt="bwaap" />
                </Col>
                <Col span={12} className="hectares">
                  <h2>100</h2>
                  <h3>Hectare</h3>
                </Col>

                <Col span={24} align="middle" className="plantation">
                  <h4>Fish Farming</h4>
                </Col>
              </Row>
            </Col>

            <Col span={5} className="farm-cards" data-aos="fade-up"  data-aos-duration="3000">
              <Row className="">
                <Col span={12}>
                  <img src={spicesIcon} width="100%" alt="bwaap" />
                </Col>
                <Col span={12} className="hectares">
                  <h2>500</h2>
                  <h3>Hectare</h3>
                </Col>

                <Col span={24} align="middle" className="plantation">
                  <h4>Spices Farming</h4>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>

      <Row className="products-bwaap">
        <Col span={12} className="products-left"  data-aos="fade-left"  data-aos-duration="2000"></Col>
        <Col span={12}  data-aos="fade-right"  data-aos-duration="2000">
          <div className="content bwaap-title-common ">
            <h3>BWAAP</h3>
            <h1>Products</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard
            </p>
            <Button className="bwaap-btn-primary">Click Here</Button>
          </div>
        </Col>
      </Row>

      <Row className="section technology-bwaap">
        <Col span={18} offset={3}  data-aos="fade-up"  data-aos-duration="2000">
          <div className="about-content bwaap-title-common " align="center">
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
            <Button className="bwaap-btn-primary">Click Here</Button>
          </div>
        </Col>
      </Row>
    </>
  );
};
export default withRouter(Banner);
