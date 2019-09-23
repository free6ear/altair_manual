import React from 'react';
import { Menu, Icon, Affix, Layout } from 'antd';
import { Scrollbars } from 'react-custom-scrollbars';

const { SubMenu } = Menu;
const { Sider } = Layout;

export default function SCS2018LinuxSider() {
    return <div>
        <Affix offsetTop={20} > 
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
                      1. 安装前配置
                    </span>
                  }
                >
                <Menu.Item key="1-1"><a href="#检查关闭SELinux">1.1. 检查关闭SELinux</a></Menu.Item>
                <Menu.Item key="1-2"><a href="#固定ip地址">1.2. 固定ip地址</a></Menu.Item>
                <Menu.Item key="1-3"><a href="#修改Hosts文件">1.3. 修改Hosts文件</a></Menu.Item>
              </SubMenu>
              <SubMenu
                  key="sub2"
                  title={
                    <span>
                      2. 安装Postgresql
                    </span>
                  }
                >
                <Menu.Item key="2-1"><a href="#在线安装">2.1. 在线安装</a></Menu.Item>
                <Menu.Item key="2-2"><a href="#离线安装">2.2. 离线安装</a></Menu.Item>
              </SubMenu>
              <Menu.Item key="3"><a href="#安装SCS">3. 安装SCS</a></Menu.Item>
              <Menu.Item key="4"><a href="#安装RVS">4. 安装RVS</a></Menu.Item>
                </Menu> 
              </Scrollbars>
            </Sider>
          </Affix>
    </div>
}