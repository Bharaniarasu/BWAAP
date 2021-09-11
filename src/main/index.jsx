import React, { Component } from "react";
import { Layout, Menu, Dropdown  } from "antd";
import { Link } from "react-router-dom";
import { DownOutlined } from '@ant-design/icons';

import Footersection from "../web/footer";

const { Header, Content, Footer } = Layout;
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
    const { activeClass } = this.state;
    return (
      <>
        <Layout className="wrapper">
          <Header className={activeClass}>
          <Link to="/"><div className="logo" /></Link>
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={["1"]}
              className="header-menu"
            >
           
              <Dropdown
                overlay={
                  <Menu>                    
                    <Menu.Item key="about-bwaap"> <Link to="/about-bwaap">About BWAAP</Link></Menu.Item>
                    <Menu.Item key="mdspeech"><Link to="/md-speech">MD's Message</Link></Menu.Item>
                    <Menu.Item key="visionmission"><Link to="/vision-mission">Vision &amp; Mission</Link></Menu.Item>
                  </Menu>
                }
                trigger={["click"]}
              >
                <Link className="ant-dropdown-link" onClick={(e) => e.preventDefault()} >
                 <Menu.Item key="">About Us  <DownOutlined /></Menu.Item>
                </Link>
              </Dropdown>
              <Menu.Item key="business">Business</Menu.Item>
              <Menu.Item key="farm">Farms &amp; Plantation</Menu.Item>
              <Menu.Item key="technology">Technology</Menu.Item>
              <Menu.Item key="products">Products</Menu.Item>
             
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
