import React from 'react';
import { withRouter } from 'react-router-dom';
import {Row, Col} from 'antd';
import Section1 from './section-1';
import Section2 from './section-2';
import Section3 from './section-3';
import Section4 from './section-4';
import Section5 from './section-5';

const Home = () => (
  <Row className="home">
    <Col span={24} className="home-header">
      <div span={18} className="home-header-title">
        <h1><b>BWAAP</b></h1>
        <p>BWAAP aims to plant millions of trees through its Smart Agroforestry &amp;<br />
        Agri-Plantation initiative benefiting Nature, Society &amp; Country to the greatest level.</p>
      </div>
    </Col>
    <Col span={24} className="home-header">
      <Section1 />
    </Col>
  </Row>
);

export default withRouter(Home);
