import React from 'react'

import { Menu, Dropdown, Icon } from 'antd';

const { SubMenu } = Menu;

const menu1 = (
    <Menu>
        <SubMenu title="SCS安装手册">
        <Menu.Item>SCS2019</Menu.Item>
        <Menu.Item>SCS2018&2017</Menu.Item>
        </SubMenu>
        <SubMenu title="后续安装与配置">
        <Menu.Item>License Server及License部署</Menu.Item>
        <Menu.Item>PBS集成</Menu.Item>
        <Menu.Item>同步PBS用户</Menu.Item>
        <Menu.Item>Samba与ALF配置</Menu.Item>
        <Menu.Item>RVS与JobQ配置</Menu.Item>
        <Menu.Item>OpenOffice配置</Menu.Item>
        <Menu.Item>SM功能配置</Menu.Item>
        <Menu.Item>AMS三员功能及登录认证配置</Menu.Item>
        <Menu.Item>SM功能配置</Menu.Item>
        <Menu.Item>Linux下安装HyperWorks</Menu.Item>
        </SubMenu>
    </Menu>
)

const menu2 = (
    <Menu>
        
    </Menu>
)