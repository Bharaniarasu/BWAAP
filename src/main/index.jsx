import React, { Component } from "react";
import { Layout, Menu, Row, Col } from "antd";
import { Link } from "react-router-dom";
// import { DownOutlined } from "@ant-design/icons";

import Footersection from "../footer/footer";

const { Header, Content, Footer } = Layout;
const { SubMenu } = Menu;

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeClass: "",
    };
  }
  componentDidMount() {
    window.addEventListener("scroll", () => {
      let activeClass = "styleHeader";
      if (window.scrollY === 0) {
        activeClass = "";
      }
      this.setState({ activeClass });
    });
  }
  render() {
    // const { history, children } = this.props;
    const { children } = this.props;
    console.log("--", this.props);
    const { activeClass } = this.state;
    return (
      <>
        <Layout className="wrapper">
          <Header className={activeClass}>
            <Link to="/">
              <div className="logo" />
            </Link>
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={["1"]}
              className="header-menu"
            >
              <SubMenu key="aboutus" title="About Us">
                <Row>
                  <Col span={8}>
                    <Menu.ItemGroup title="About BWAAP">
                      <Menu.Item key="about-bwaap">
                        <Link to="/about-bwaap">About BWAAP</Link>
                      </Menu.Item>
                      <Menu.Item key="modus-operandi">
                        <Link to="/modus-operandi">Modus Operandi</Link>
                      </Menu.Item>
                      <Menu.Item key="plc">
                        <Link to="/plc">PLC</Link>
                      </Menu.Item>
                    </Menu.ItemGroup>
                  </Col>
                  <Col span={8}>
                    <Menu.ItemGroup title="About 2">
                      <Menu.Item key="visionmission">
                        <Link to="/vision-mission">Vision &amp; Mission</Link>
                      </Menu.Item>
                      <Menu.Item key="strengths-strategies">
                        <Link to="/strengths-strategies">Strengths & Strategies </Link>
                      </Menu.Item>
                    </Menu.ItemGroup>
                  </Col>
                  <Col span={8}>
                    <Menu.ItemGroup title="About 3">
                      <Menu.Item key="mdspeech">
                        <Link to="/md-speech">MD's Message</Link>
                      </Menu.Item>
                    </Menu.ItemGroup>
                  </Col>
                </Row>
              </SubMenu>

              <SubMenu key="right-livelihood" title="Right Livelihood ">
                <Row>
                  <Col span={12}>
                    <Menu.ItemGroup title="Right Livelihood">
                      <Menu.Item key="rl-cornerstone">
                        <Link to="/rl-cornerstone">Why RL Cornerstone for BW </Link>
                      </Menu.Item>
                      <Menu.Item key="livelihood">
                        <Link to="/livelihood">Livelihood</Link>
                      </Menu.Item>
                      <Menu.Item key="right-livelihood">
                        <Link to="/right-livelihood">Right Livelihood </Link>
                      </Menu.Item>
                      <Menu.Item key="accomplish-rl">
                        <Link to="/accomplish-rl">Accomplish RL </Link>
                      </Menu.Item>
                      <Menu.Item key="livelihood-assets">
                        <Link to="/livelihood-assets">Different Livelihood Assets </Link>
                      </Menu.Item>
                      <Menu.Item key="sharingwisdom-rl">
                        <Link to="/sharingwisdom-rl">Sharing Wisdom on RL </Link>
                      </Menu.Item>
                    </Menu.ItemGroup>
                  </Col>
                  <Col span={12}></Col>
                </Row>
              </SubMenu>

              <SubMenu key="our-responsibility" title="Our Responsibility">
                <Row>
                  <Col span={12}>
                    <Menu.ItemGroup title="Our Responsibility">
                      <Menu.Item key="global-challenges">
                        <Link to="/global-challenges">BWAAP addressing Global Challenges </Link>
                      </Menu.Item>
                      <Menu.Item key="my-tree-nation">
                        <Link to="/my-tree-my-nation">My Tree, My Nation, My Mother Earth </Link>
                      </Menu.Item>
                    </Menu.ItemGroup>
                  </Col>
                  <Col span={12}></Col>
                </Row>
              </SubMenu>

              <SubMenu key="our-technology" title="Technology ">
                <Row>
                  <Col span={6}>
                    <Menu.ItemGroup title="Our Technologies 1">
                      <Menu.Item key="smart-farming">
                        <Link to="/smart-farming">Smart Farming - Need of the hour</Link>
                      </Menu.Item>
                      <Menu.Item key="benefits">
                        <Link to="/benefits">Benefits</Link>
                      </Menu.Item>
                    </Menu.ItemGroup>
                  </Col>
                  <Col span={6}>
                    <Menu.ItemGroup title="Our Technologies 2">
                      <Menu.Item key="vra">
                        <Link to="/vra">Variable Rate Application </Link>
                      </Menu.Item>
                      <Menu.Item key="remote-sensing">
                        <Link to="/remote-sensing">Remote Sensing</Link>
                      </Menu.Item>
                      <Menu.Item key="ai-ml">
                        <Link to="/ai-ml">
                          Artificial Intelligence (AI) & Machine Learning (ML)
                        </Link>
                      </Menu.Item>
                      <Menu.Item key="iot">
                        <Link to="/iot">Internet of Things (IoT)</Link>
                      </Menu.Item>
                    </Menu.ItemGroup>
                  </Col>
                  <Col span={6}>
                    <Menu.ItemGroup title="Our Technologies 3">
                      <Menu.Item key="computer-imaging-cameras">
                        <Link to="/computer-imaging-cameras">Computer Imaging Cameras </Link>
                      </Menu.Item>
                      <Menu.Item key="uav">
                        <Link to="/uav">
                          Drones or Unmanned Aerial Vehicles (UAV)
                        </Link>
                      </Menu.Item>
                      <Menu.Item key="robotics-autonomous-system-agribots">
                        <Link to="/robotics-autonomous-system-agribots">
                          Robotic & Autonomous Systems & Agribots
                        </Link>
                      </Menu.Item>
                      <Menu.Item key="smart-livestock">
                        <Link to="/smart-livestock">Smart Livestock Management</Link>
                      </Menu.Item>
                    </Menu.ItemGroup>
                  </Col>
                  <Col span={6}>
                    <Menu.ItemGroup title="Our Technologies 4">
                      <Menu.Item key="poly-green-house">
                        <Link to="/poly-green-house">Poly House & Green House</Link>
                      </Menu.Item>
                      <Menu.Item key="hydroponics">
                        <Link to="/hydroponics">Hydroponics</Link>
                      </Menu.Item>
                      <Menu.Item key="aeroponics">
                        <Link to="/aeroponics">Aeroponics</Link>
                      </Menu.Item>
                      <Menu.Item key="aquaponics">
                        <Link to="/aquaponics">Aquaponics</Link>
                      </Menu.Item>
                    </Menu.ItemGroup>
                  </Col>
                </Row>
              </SubMenu>

              <SubMenu
                key="smarfarms-products"
                title="Smart Farms and Products"
              >
                <Row>
                  <Col span={8}>
                    <Menu.ItemGroup title="FARMS">
                      <Menu.Item key="">
                        <Link to="/">Description</Link>
                      </Menu.Item>
                      <Menu.Item key="">
                        <Link to="/">Map </Link>
                      </Menu.Item>
                      <Menu.Item key="">
                        <Link to="/">States</Link>
                      </Menu.Item>
                      <Menu.Item key="">
                        <Link to="/">Hectares</Link>
                      </Menu.Item>
                      <Menu.Item key="">
                        <Link to="/">Insurance Safety shields</Link>
                      </Menu.Item>
                    </Menu.ItemGroup>
                  </Col>
                  <Col span={8}>
                    <Menu.ItemGroup title="PRODUCTS ">
                      <Menu.Item key="agarwood-farming">
                        <Link to="/agarwood-farming">
                          Agar Wood Farming  - Agarwood Products
                        </Link>
                      </Menu.Item>
                      <Menu.Item key="redsanders-farming">
                        <Link to="/redsanders-farming">
                          Red sanders Farming- Red sanders Products
                        </Link>
                      </Menu.Item>
                      <Menu.Item key="honey-farming">
                        <Link to="/honey-farming">
                          Honey-Bee Farming - Medicinal Honey products
                        </Link>
                      </Menu.Item>
                      <Menu.Item key="fruits-vegetables-farming">
                        <Link to="/fruits-vegetables-farming">
                          Fruits & Vegetable Farming - Organic Fruits &
                          Vegetables
                        </Link>
                      </Menu.Item>
                      <Menu.Item key="livestock-farming">
                        <Link to="/livestock-farming">
                          Livestock Farming- Diary, Chicken & Mutton
                        </Link>
                      </Menu.Item>
                      <Menu.Item key="fish-farming">
                        <Link to="/fish-farming">
                          Fish Farming - Fresh Fish & Sea foods
                        </Link>
                      </Menu.Item>
                      <Menu.Item key="medicinal-plantations">
                        <Link to="/medicinal-plantations">
                          Medicinal Plantations - Medicinal Plant Products
                        </Link>
                      </Menu.Item>
                      <Menu.Item key="spices-farming">
                        <Link to="/spices-farming">Spices Farming - Aromatic Spices </Link>
                      </Menu.Item>
                    </Menu.ItemGroup>
                  </Col>
                  <Col span={8}>
                    <Menu.ItemGroup title="SERVICES">
                      <Menu.Item key="omnichannel">
                        <Link to="/omnichannel">Omni-Channel Customer experience </Link>
                      </Menu.Item>
                    </Menu.ItemGroup>
                  </Col>
                </Row>
              </SubMenu>

              <SubMenu key="business" title="Business">
                <Row>
                  <Col span={8}>
                    <Menu.ItemGroup title="Business 1">
                      <Menu.Item key="bwaap-family-members">
                        <Link to="/bwaap-family-members">BWAAP Family Members </Link>
                      </Menu.Item>
                    </Menu.ItemGroup>
                  </Col>
                  <Col span={8}>
                    <Menu.ItemGroup title="Business 2">
                      <Menu.Item key="shareholder">
                        <Link to="/shareholder">Share Holder </Link>
                      </Menu.Item>
                      <Menu.Item key="consumer">
                        <Link to="/consumer">Consumer </Link>
                      </Menu.Item>
                      <Menu.Item key="product-vendor">
                        <Link to="/product-vendor">Product Vendor</Link>
                      </Menu.Item>
                      <Menu.Item key="franchisee">
                        <Link to="/franchisee">Franchisee</Link>
                      </Menu.Item>
                      <Menu.Item key="intrapreneur">
                        <Link to="/intrapreneur">Intrapreneur</Link>
                      </Menu.Item>
                      <Menu.Item key="entrepreneur">
                        <Link to="/entrepreneur">Entrepreneur</Link>
                      </Menu.Item>
                      <Menu.Item key="volunteer">
                        <Link to="/volunteer">Volunteer</Link>
                      </Menu.Item>
                    </Menu.ItemGroup>
                  </Col>
                  <Col span={8}>
                    <Menu.ItemGroup title="Business 3">
                      <Menu.Item key="hive-together">
                        <Link to="/hive-together">Hive Together</Link>
                      </Menu.Item>
                    </Menu.ItemGroup>
                  </Col>
                </Row>
              </SubMenu>
            </Menu>
          </Header>
          <Content>{children}</Content>
          <Footer>
            <Footersection />
          </Footer>
        </Layout>
      </>
    );
  }
}
export default Main;
