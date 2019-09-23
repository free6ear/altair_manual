import React from 'react';
import VersionDescription from './AltairVersionDescription';

import {  Anchor, Layout, Menu, Icon, Divider, Tag, Table, Typography, Radio, Steps, BackTop, Button, Input, Tooltip, Dropdown } from 'antd';
const { Title,  Paragraph, Text } = Typography;

export default function AltairContent() {
    return <div>
        {/*更新日志*/}
        <VersionDescription></VersionDescription>
        <Title level={2} id="1 平台基础架构">1 平台基础架构</Title>
        <Paragraph> </Paragraph>
    </div>
}