import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import { Carousel } from 'antd';


const contentStyle = {
  height: '20em',
  color: '#fff',
  lineHeight: '20em',
  textAlign: 'center',
  background: '#364d79',
};

const Section5 = (props) => {

  return (
    <Carousel autoplay dotPosition={'right'}>
    <div>
      <h1 style={contentStyle}>Bees World (BeeGC)</h1>
    </div>
    <div>
      <h1 style={contentStyle}>BWAAP</h1>
    </div>
    <div>
      <h1 style={contentStyle}>BWI</h1>
    </div>
    <div>
      <h1 style={contentStyle}>BWACS</h1>
    </div>
    <div>
      <h1 style={contentStyle}>BeeC</h1>
    </div>
  </Carousel>     
  )
}
export default withRouter(Section5);
