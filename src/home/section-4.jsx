import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import { Row, Col, Typography } from 'antd';
import Target from '../assets/images/target-circle.png';

const { Title } = Typography
const Section4 = (props) => {

  return (
    <Row>
      <Col span={8}>
        <span>
          <Title level={3}>Planet</Title>
          <p> To be a responsible Global Family member and make a difference by helping build and support sustainable  communities and also protecting Mother Earth.</p>
        </span>
        <span>
          <Title level={3}>Plantation</Title>
          <p>To Create a Positive Ecological contribution through Plantation generating Cleaner Air & Water, Carbon Sequestration, and to bring a Positive Socio-Economic contribution through Employment, Poverty Alleviation, Food Security, Healthy Products for day-to-day life, Economic Growth of People and Country. </p>
        </span>
        <span>
          <Title level={3}>People</Title>
          <p>To make people live a Happiest, Holistic, Healthy Living and travel alongside the company as a Shareholder/Business Owner where rewards and contributions are inherited for generations.</p>
        </span>
      </Col>
      <Col span={8}>
        <img src={Target} width="100%" />
      </Col>
      <Col span={8}>
        <span>
          <Title level={3}>Portfolio</Title>
          <p>To bring to the World, a portfolio of Superior, healthy, nature-friendly products that anticipate and satisfy people's desires, needs and also ensuring healthier lifestyle.  </p>
        </span>
        <span>
          <Title level={3}>Productivity</Title>
          <p>To be a highly effective, lean, and fast-moving organization having a conscience of changing people's lives better.</p>
        </span>
        <span>
          <Title level={3}>Prosperity</Title>
          <p>To Maximize long-term returns to shareholders while being mindful of our overall responsibilities. </p>
        </span>
      </Col>
      <Col span={8} offset={8}>
        <span>
          <Title level={3}>Partners</Title>
          <p>To Nurture a Winning network of shareholders, franchisees, entrepreneurs, and other stakeholders together in creating a mutual, enduring environment paving way for shared success.  </p>
        </span>
      </Col>
    </Row>
  )
}
export default withRouter(Section4);
