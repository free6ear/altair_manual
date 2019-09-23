import React from 'react'

import { Menu, Icon } from 'antd';

const { SubMenu } = Menu;

export default class Navigation extends React.Component {
    constructor(props) {
        super(props)
    }

    state = {
        current: 'SCS2019:1'
    }

    handleClick  = e => {
        console.log('click', e);
        this.setState({
            current: e.key,
        })
    }

    render() {
        return (
            <div>
                <Menu
                    onClick={this.handleClick} 
                    selectedKeys={[this.state.current]} 
                    mode="horizontal"
                    theme="dark"
                    style={{ lineHeight: '64px', float: "right"  }}
                >
                    {/* <Menu.Item key="main_logo" disabled style={{ float: "left" }}>
                        <img style={{ maxWidth: "1380px" }}  src={main_logo} style={{ height: "40px", marginLeft: "-25px" }}/>
                    </Menu.Item> */}
                    <SubMenu
                        title={
                            <span className="submenu-title-wrapper">
                                <Icon type="book" />
                                SCS安装手册 
                        </span>
                        }
                    >
                        <Menu.ItemGroup title="SCS2019">
                            <Menu.Item key="SCS2019:1">Linux环境</Menu.Item>
                            <Menu.Item key="SCS2019:2">Windows环境</Menu.Item>
                        </Menu.ItemGroup>
                            
                        <Menu.ItemGroup title="SCS">
                            <Menu.Item key="SCS:1">Linux环境</Menu.Item>
                            <Menu.Item key="SCS:2">Windows环境</Menu.Item>
                        </Menu.ItemGroup>
                    </SubMenu>
                    <SubMenu
                        title={
                            <span className="submenu-title-wrapper">
                                <Icon type="control" />
                                后续安装及配置
                            </span>
                        }
                    >
                        <Menu.Item key="setting:1">License Server及License部署</Menu.Item>
                        <Menu.Item key="setting:2">PBS集成</Menu.Item>
                        <Menu.Item key="setting:3">同步PBS用户</Menu.Item>
                        <Menu.Item key="setting:3">Samba与ALF</Menu.Item>
                        <Menu.Item key="setting:5">RVS与JobQ</Menu.Item>
                        <Menu.Item key="setting:6">OpenOffice</Menu.Item>
                        <Menu.Item key="setting:7">SM功能</Menu.Item>
                        <Menu.Item key="setting:8">AMS三员功能及登录认证</Menu.Item>
                        <Menu.Item key="setting:9">SM功能</Menu.Item>
                        <Menu.Item key="setting:10">Linux下安装HyperWorks</Menu.Item>
                    </SubMenu>
                    <SubMenu
                        title={
                            <span className="submenu-title-wrapper">
                                <Icon type="container" />
                                相关技术文档
                            </span>
                        }
                    >
                        <Menu.Item key="otherfile:1">流程模板制作</Menu.Item>
                        <Menu.Item key="otherfile:2">loadcase制作</Menu.Item>
                        <Menu.Item key="otherfile:3">classification制作</Menu.Item>
                    </SubMenu>
                    <Menu.Item key="faq">
                        <Icon type="issues-close" /> 
                        FAQ
                    </Menu.Item>
                    
                    <SubMenu
                        title={
                            <span className="submenu-title-wrapper">
                                <Icon type="appstore" />
                                常用链接
                            </span>
                        }
                    >
                        <Menu.Item key="commonlink:1">项目文档</Menu.Item>
                        <Menu.Item key="commonlink:2">NAS服务器</Menu.Item>
                        <Menu.Item key="commonlink:3">大文件发送</Menu.Item>
                    </SubMenu>
                    
                </Menu>
            </div>
        )
    }
}