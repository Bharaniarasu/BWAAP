import React from 'react';
import { withRouter } from 'react-router-dom';
// import {Row, Col, Typography  } from 'antd';

import Banner from './banner';
import Footer from './footer';


// const { Title } = Typography;

const Web = () => (
  <>
 <Banner />
<Footer />

    </>
  
);

export default withRouter(Web);
