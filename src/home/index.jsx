import React from 'react';
import { withRouter } from 'react-router-dom';
import {Row, Col, Typography  } from 'antd';
import Section1 from './section-1';
import Section2 from './section-2';
import Section3 from './section-3';
import Section4 from './section-4';
import Section5 from './section-5';
import Target from '../assets/images/020.png';


const { Title } = Typography;

const Home = () => (
  <>
  <Row className="home home-header">
    <Col span={12} className="">
      <div className="home-header-title">
        <Title>BWAAP</Title>
        <p>BWAAP aims to plant millions of trees through its Smart Agroforestry &amp;<br />
        Agri-Plantation initiative benefiting Nature, Society &amp; Country to the greatest level.</p>
      </div>
    </Col>
    <Col span={12}>
    <img src={Target} width="100%" />
    </Col>
    </Row>

    <Row>
    <Col span={24} className="mission">
      <Section2 />
    </Col>
    </Row>

    <Row>
    <Col span={24}>
      <Section3 />
    </Col>
    </Row>

    <Row>
    <Col span={24} className="sec-color padd">
      <Section4 />
    </Col>
    </Row>

    <Row>
    <Col span={24}>
      <Section5 />
    </Col>
    </Row>
    </>
  
);

export default withRouter(Home);
