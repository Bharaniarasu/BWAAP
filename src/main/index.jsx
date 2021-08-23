import React, { Component } from 'react';
import {
  Layout, Menu,
} from 'antd';

const { Header, Content, Footer } = Layout;
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeClass: '',
    };
  }
  componentDidMount() {
    window.addEventListener('scroll', () => {
      let activeClass = 'styleHeader';
      if (window.scrollY === 0) {
        activeClass = '';
      }
      this.setState({ activeClass });
    });
  }
  render() {
    const { history, children } = this.props;
    const { activeClass } = this.state;
    return (
      <>
        <Layout className="wrapper">
          <Header className={activeClass}>
            <div className="logo" />
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']} className="header-menu">
              <Menu.Item key="about">About Us</Menu.Item>
              <Menu.Item key="business">Business</Menu.Item>
              <Menu.Item key="farm">Farms &amp; Projects</Menu.Item>
              <Menu.Item key="technology">Technology</Menu.Item>
              <Menu.Item key="products">Products</Menu.Item>
            </Menu>
          </Header>
          <Content>
            {children}
          </Content>
          <Footer>
            BWAAP ©2021 
          </Footer>
        </Layout>
      </>
    )
  }
}
export default Main;
