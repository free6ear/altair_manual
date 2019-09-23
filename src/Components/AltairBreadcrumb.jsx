import React from 'react';
import {  Breadcrumb, } from 'antd';

export default class AltairBreadcrumb extends React.Component {
    constructor() {
        super()
    }

    render() {
        return <div>
            <Breadcrumb style={{ margin: '25px 0 -100px 50px' }}>
                <Breadcrumb.Item>SCS安装手册</Breadcrumb.Item>
                <Breadcrumb.Item>SCS2019</Breadcrumb.Item>
                <Breadcrumb.Item>Linux环境</Breadcrumb.Item>
            </Breadcrumb>
        </div>
    }
}