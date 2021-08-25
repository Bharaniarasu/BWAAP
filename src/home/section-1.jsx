import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import { Row, Col } from 'antd';


const Section1 = (props) => {

  return (
    <Row>
      <Col className="sup-head"></Col>
      <Col className="sup-head"></Col>
      <Col className="sup-head"></Col>
      <Col className="sup-head"></Col>
    </Row>
  )
}

export default withRouter(Section1);
