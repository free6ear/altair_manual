import React from 'react'

import { Descriptions, Divider, Tag } from 'antd';

export default function VersionDescription() {
    return <div>
        <Descriptions id="更新日志" layout="vertical" column={1} >
            <Descriptions.Item label="当前版本">&nbsp;&nbsp;&nbsp;&nbsp;<Tag color="geekblue">1.0.0</Tag></Descriptions.Item>
            <Descriptions.Item label="更新时间">&nbsp;&nbsp;&nbsp;&nbsp;2019.09.23</Descriptions.Item>
            <Descriptions.Item label="更新内容">
            &nbsp;&nbsp;&nbsp;&nbsp;1. 采用全新的展示方式
            </Descriptions.Item>
        </Descriptions>
        <Divider/>
    </div>
}