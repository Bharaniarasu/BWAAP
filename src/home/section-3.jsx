import { auto } from 'async';
import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import { Row, Col, Typography } from 'antd';

const { Title } = Typography
const Section3 = (props) => {

  return (
    <section className="padd odd one">
      <Title className="under">About Us</Title>
    <p>
      BWAAP aims to plant millions of trees through its Smart Agroforestry &amp; Agri-Plantation initiative benefiting Nature, Society &amp; Country to the greatest level.
      BWAAP desires to bring like-minded people who wish to spread Health, Wealth, Success, Spirituality &amp; Happiness to the complete Mankind to create a World of Well-Being.
      Forests are termed as 'Gills of the Planet'. One mature tree absorbs approximately 13 pounds of carbon dioxide a year. For every ton of wood a forest grows, it removes 1.47 tons of carbon dioxide and replaces it with 1.07 tons of oxygen.
      BWAAP through its Agroforestry project envisages creating a land-use system that integrates trees and shrubs on farmlands to enhance productivity, profitability, diversity, and ecosystem sustainability. It would be developed as a dynamic, ecologically based, natural resource management system that, through the integration of woody perennials on farms and in the agricultural landscape, diversifies and sustains production and also builds social institutions.
      BWAAP also intends for the development of an Agri-Plantations project involving commercial farming in which the farm areas are typically mono cropped with perennials and the crop production may be further processed on the farm or in nearby factories and small-scale industries to produce a value-added product.
    </p>
    </section>      
  )
}
export default withRouter(Section3);
