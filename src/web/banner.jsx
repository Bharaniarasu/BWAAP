// import { auto } from 'async';
// import React, { useEffect, useState } from 'react';
import React from 'react';
import { withRouter } from 'react-router-dom';
import { Row, Col, Typography, Button, Card } from 'antd';

import Target from '../assets/svg/health.svg';
import farmimage from '../assets/images/smart-farm.jpg';

const { Title } = Typography;
const { Meta } = Card;

const Banner = (props) => {

    return (
        <>
            <Row className=" home-page">
                <div className="overlay"></div>
                <Col span={18} offset={3} align="center">
                    <div className="captions">
                        <Title>BWAAP</Title>
                        <p>BWAAP aims to plant millions of trees through its Smart Agroforestry &amp;<br />
                            Agri-Plantation initiative benefiting Nature, Society &amp; Country to the greatest level.</p>
                    </div>
                    <div className="btn-links">
                        <Button >Products</Button>
                        <Button >Farms & Projects</Button>

                    </div>
                </Col>
            </Row>

            <Row className="section moto-quotes" justify="space-between" align="top">
                <Col span={8}>
                    <Row className="moto-content" >
                        <Col span={4}>
                            <img src={Target} width="100%" alt="bwaap" />
                        </Col>
                        <Col span={20}>
                            <h2>Health</h2>
                        </Col>
                        <Col span={24}>
                            <p>To ensure we eat Organic nutrient Food products for our Healthy living.  </p>
                        </Col>
                    </Row>
                </Col>

                <Col span={8}>
                    <Row className="moto-content">
                        <Col span={4}>
                            <img src={Target} width="100%" alt="bwaap" />
                        </Col>
                        <Col span={20}>
                            <h2>Wealth</h2>
                        </Col>
                        <Col span={24}>
                            <p>To benefit ourselves from Entrepreneurial, Franchising, and Shareholder opportunities leading to a Wealthy Life. </p>
                        </Col>
                    </Row>
                </Col>

                <Col span={8}>
                    <Row className="moto-content">
                        <Col span={4}>
                            <img src={Target} width="100%" alt="bwaap" />
                        </Col>
                        <Col span={20}>
                            <h2>Success</h2>
                        </Col>
                        <Col span={24}>
                            <p>To lead our Personal & Professional Life with Right Livelihood involving Right View, Right Effort, Right Focus eventually bringing a Successful Outcome in our life.   </p>
                        </Col>
                    </Row>
                </Col>

                <Col span={8}>
                    <Row className="moto-content">
                        <Col span={4}>
                            <img src={Target} width="100%" alt="bwaap" />
                        </Col>
                        <Col span={20}>
                            <h2>Spirituality </h2>
                        </Col>
                        <Col span={24}>
                            <p>To enrich ourselves with continuous Learning, Training, Activities (ATMA Bank), and Charity Service building a Healthy mindset for us. </p>
                        </Col>
                    </Row>
                </Col>

                <Col span={8}>
                    <Row className="moto-content">
                        <Col span={4}>
                            <img src={Target} width="100%" alt="bwaap" />
                        </Col>
                        <Col span={20}>
                            <h2>Happiness</h2>
                        </Col>
                        <Col span={24}>
                            <p>To achieve Holistic Happiness & to spread Happiness to Family, Friends, Society, State, Nation & Universe.  </p>
                        </Col>
                    </Row>
                </Col>
            </Row>

            <Row className="section about-bwaap">
               
                <Col span={18} offset={3}>
                    <div className="about-content">
                        <h2>About BWAAP</h2>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged
                        </p>
                    </div>
                </Col>
            </Row>



            <Row className="farms-projects section" gutter={50}>
                <Col span={8} className="gutter-row">
                    <Card
                        // style={{ width: 240 }}
                        cover={<img src={farmimage} width="100%" alt="bwaap" />}
                    >
                        <Meta title="Smart Farm"
                            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. " />
                    </Card>
                </Col>

                <Col span={8} className="gutter-row">
                    <Card
                        // style={{ width: 240 }}
                        cover={<img src={farmimage} width="100%" alt="bwaap" />}
                    >
                        <Meta title="Smart Farm"
                            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry." />
                    </Card>
                </Col>

                <Col span={8} className="gutter-row">
                    <Card
                        // style={{ width: 240 }}
                        cover={<img src={farmimage} width="100%" alt="bwaap" />}
                    >
                        <Meta title="Smart Farm"
                            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. " />
                    </Card>
                </Col>

            </Row>


            <Row className="strip-gc">
                <Col span={18} align="center" offset="3">
                    <div className="gc-captions">
                        <Title><h2>Global Challenges</h2></Title>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        <Button >Click Here</Button>
                    </div>
                </Col>
            </Row>

            <Row className="section moto-quotes">
                <Col span={8}>
                    <Row className="moto-content" >
                        <Col span={4}>
                            <img src={Target} width="100%" alt="bwaap" />
                        </Col>
                        <Col span={20}>
                            <h2>Health</h2>
                        </Col>
                        <Col span={24}>
                            <p>To ensure we eat Organic nutrient Food products for our Healthy living.  </p>
                        </Col>
                    </Row>
                </Col>

                <Col span={8}>
                    <Row className="moto-content">
                        <Col span={4}>
                            <img src={Target} width="100%" alt="bwaap" />
                        </Col>
                        <Col span={20}>
                            <h2>Wealth</h2>
                        </Col>
                        <Col span={24}>
                            <p>To benefit ourselves from Entrepreneurial, Franchising, and Shareholder opportunities leading to a Wealthy Life. </p>
                        </Col>
                    </Row>
                </Col>

                <Col span={8}>
                    <Row className="moto-content">
                        <Col span={4}>
                            <img src={Target} width="100%" alt="bwaap" />
                        </Col>
                        <Col span={20}>
                            <h2>Success</h2>
                        </Col>
                        <Col span={24}>
                            <p>To lead our Personal & Professional Life with Right Livelihood involving Right View, Right Effort, Right Focus eventually bringing a Successful Outcome in our life.   </p>
                        </Col>
                    </Row>
                </Col>

                <Col span={8}>
                    <Row className="moto-content">
                        <Col span={4}>
                            <img src={Target} width="100%" alt="bwaap" />
                        </Col>
                        <Col span={20}>
                            <h2>Spirituality </h2>
                        </Col>
                        <Col span={24}>
                            <p>To enrich ourselves with continuous Learning, Training, Activities (ATMA Bank), and Charity Service building a Healthy mindset for us. </p>
                        </Col>
                    </Row>
                </Col>

                <Col span={8}>
                    <Row className="moto-content">
                        <Col span={4}>
                            <img src={Target} width="100%" alt="bwaap" />
                        </Col>
                        <Col span={20}>
                            <h2>Happiness</h2>
                        </Col>
                        <Col span={24}>
                            <p>To achieve Holistic Happiness & to spread Happiness to Family, Friends, Society, State, Nation & Universe.  </p>
                        </Col>
                    </Row>
                </Col>
            </Row>



            <Row className="strip-farming">
                <div className="overlay"></div>
                <Col span={18} align="center" offset="3">
                    <div className="farmingprojects-captions">
                        <Title><h2>Smart Farming</h2></Title>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>

                </Col>
            </Row>

        </>
    )
}
export default withRouter(Banner);
