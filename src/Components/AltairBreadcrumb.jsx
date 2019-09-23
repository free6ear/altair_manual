import React from 'react';
import {  Breadcrumb, } from 'antd';

export default class AltairBreadcrumb extends React.Component {
    constructor() {
        super()
    }

    render() {
        return <diV>
            <Breadcrumb style={{ margin: '16px 48px' }}>
                <Breadcrumb.Item>SCS安装手册</Breadcrumb.Item>
                <Breadcrumb.Item>SCS</Breadcrumb.Item>
                <Breadcrumb.Item>Linux环境</Breadcrumb.Item>
            </Breadcrumb>
        </diV>
    }
}