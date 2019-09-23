import React from 'react';
import { Menu, Icon, Affix, Layout } from 'antd';
import { Scrollbars } from 'react-custom-scrollbars';

const { SubMenu } = Menu;
const { Sider } = Layout;

export default function SCS2018LinuxSider() {
    return <div>
        <Affix offsetTop={5} > 
          <Sider width={270} style={{ background: '#fff', overflow: 'auto', height: 1000}}>
          <Scrollbars>
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{ height: '100%' }}
            >
              <Menu.Item key="0"><a href="#更新日志"><Icon type="profile" />更新日志</a></Menu.Item>
              <SubMenu
                key="sub1"
                title={
                  <span>
                    <Icon type="cluster" />
                      1 平台基础架构
                  </span>
                }
              >
                <SubMenu
                  key="sub1-1"
                  title={
                    <span>
                      1.1 服务器安装架构
                    </span>
                  }
                >
                  <Menu.Item key="1-1-1"><a href="#1.1.1 单台服务器安装架构">1.1.1 单台服务器安装架构</a></Menu.Item>
                  <Menu.Item key="1-1-2"><a href="#1.1.2 双台服务器安装架构">1.1.2 双台服务器安装架构</a></Menu.Item>
                </SubMenu>
                <SubMenu
                key="sub1-2"
                  title={
                    <span>
                      1.2 安装环境要求
                    </span>
                  }
                >
                  <Menu.Item key="1-2-1"><a href="#1.2.1 系统环境要求">1.2.1 系统环境要求</a></Menu.Item>
                  <Menu.Item key="1-2-2"><a href="#1.2.2 SCS安装包版本要求">1.2.2 SCS安装包版本要求</a></Menu.Item>
                  <Menu.Item key="1-2-3"><a href="#1.2.3 客户端浏览器要求">1.2.3 客户端浏览器要求</a></Menu.Item>
                </SubMenu>
                </SubMenu>
                <SubMenu
                  key="sub2"
                  title={
                    <span>
                      <Icon type="ordered-list" />
                        2 安装步骤
                    </span>
                  }
                >
                    <Menu.Item key="2-1"><a href="#2.1 安装前环境配置">2.1 安装前环境配置</a></Menu.Item>  
                    <Menu.Item key="2-2"><a href="#2.2 安装DB">2.2 安装DB</a></Menu.Item>  
                    <Menu.Item key="2-3"><a href="#2.3 安装中文DB">2.3 安装中文DB</a></Menu.Item>  
                    <Menu.Item key="2-4"><a href="#2.4 安装RVS置">2.4 安装RVS</a></Menu.Item>  
                    <Menu.Item key="2-5"><a href="#2.5 安装SCS">2.5 安装SCS</a></Menu.Item>  
                  </SubMenu>
                </Menu>
              </Scrollbars>
            </Sider>
          </Affix>
    </div>
}