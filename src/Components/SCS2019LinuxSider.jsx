import React from 'react';
import { Menu, Icon, Affix, Layout, Anchor } from 'antd';
import { Scrollbars } from 'react-custom-scrollbars';

const { SubMenu } = Menu;
const { Sider } = Layout;
const{ Link } = Anchor;

export default function SCS2018LinuxSider() {
    return <div>
        <Affix offsetTop={20} > 
        <Menu
          mode="inline"
          style={{ height: '100vh' }}
        >
          <Sider width={270} style={{ background: '#fff', overflow: 'auto' }}>
            <Anchor style={{ fontSize: "14px", fontWeight: "bold", fontWeight: "40px", marginLeft: "15px" }}>
              <Link href="#更新日志" title="更新日志" />
              <Link href="#安装前配置" title="1. 安装前配置" />
              <Link href="#检查关闭SELinux" title="1.1. 检查关闭SELinux">
                <Link href="#固定ip地址" title="1.2. 固定ip地址" />
                <Link href="#修改Hosts文件" title="1.3. 修改Hosts文件" />
              </Link>
              <Link href="#安装Postgresql" title="2. 安装Postgresql" >
                <Link href="#在线安装" title="2.1 在线安装" />
                <Link href="#离线安装" title="2.2 离线安装" />
              </Link>
                <Link href="#安装SCS" title="3. 安装SCS" />
                <Link href="#安装RVS" title="2. 安装RVS" />
            </Anchor>
          {/* <Scrollbars> */}
            {/* <Menu
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
                </Menu>  */}
            {/* </Scrollbars> */}
            </Sider>
          </Menu>
        </Affix>
    </div>
}