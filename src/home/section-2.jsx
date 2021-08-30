import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import { Row, Col } from 'antd';

const Section2 = (props) => {

  return (
    <Row className="mission-moto">
      <Col span={4} offset={2}>
          <p>Health</p>
      </Col>
      <Col span={4}>
          <p>Wealth</p>
      </Col>
      <Col span={4}>
          <p>Success</p>
      </Col>
      <Col span={4}>
          <p>Spirituality</p>
      </Col>
      <Col span={4}>
          <p>Happiness</p>
      </Col>
    </Row>
  )
}

export default withRouter(Section2);
