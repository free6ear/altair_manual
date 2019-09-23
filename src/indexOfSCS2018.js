import React from 'react';
import ReactDOM from 'react-dom'

import Navigation from './Components/AltairNavigation';
import SCS2019LinuxSider from './Components/SCS2019LinuxSider';
import SCS2019Linux from './Components/SCS2019Linux';
import AltairBreadcrumb from './Components/AltairBreadcrumb'

import {  Anchor, Layout, Menu, Icon, Divider, Tag, Table, Typography, Radio, Steps, BackTop, Button, Input, Tooltip, Dropdown } from 'antd';

import main_logo from './img/altair_logo.svg';

const { SubMenu } = Menu;
const { Header, Content, Footer } = Layout;
const { Title,  Paragraph, Text } = Typography;
const { Link } = Anchor;
const { Step } = Steps;
const { Search } = Input;

ReactDOM.render(
  <Layout>
    <Header className="header" >
      <div className="main_logo">
        <img src={main_logo} style={{   
          width: "120px",
          height: "31px",
          margin: "16px 28px 16px 0",
          float: "left",
          }}
        />
      </div>
      <Navigation></Navigation>
    </Header>
    <AltairBreadcrumb></AltairBreadcrumb>
    <Content style={{ padding: '0 50px' }}>
      <Layout style={{ padding: '24px 0', background: '#fff', margin: "5px 0" }}>
        <SCS2019LinuxSider></SCS2019LinuxSider>
        <Content style={{ padding: '0  30px', minHeight: 280 }}> 
          {/*正文*/}
          <SCS2019Linux></SCS2019Linux>
        </Content>
      </Layout>
    </Content>
    <BackTop style={{ color: "#1088e9" }} /> 
    <Footer style={{ textAlign: 'center' }}>Altair ©2019 Created by Meng Sun.</Footer>
  </Layout>,
  document.getElementById("root")
);