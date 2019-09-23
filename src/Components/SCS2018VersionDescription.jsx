import React from 'react'

import { Descriptions, Divider, Tag } from 'antd';

export default function VersionDescription() {
    return <div>
        <Descriptions title="更新日志" layout="vertical" column={1} >
            <Descriptions.Item label="版本">&nbsp;&nbsp;&nbsp;&nbsp;<Tag color="geekblue">2.6.1</Tag></Descriptions.Item>
            <Descriptions.Item label="更新时间">&nbsp;&nbsp;&nbsp;&nbsp;2019.09.23</Descriptions.Item>
            <Descriptions.Item label="更新内容">
            &nbsp;&nbsp;&nbsp;&nbsp;1. 调整了文档格式与结构
            <br/>
            &nbsp;&nbsp;&nbsp;&nbsp;2. 修正部分错误
            </Descriptions.Item>
        </Descriptions>
        <Divider/>
    </div>
}