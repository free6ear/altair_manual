import React from 'react';
import VersionDescription from './SCS2019VersionDescription';

import {  Anchor, Layout, Menu, Icon, Divider, Tag, Table, Typography, Radio, Steps, BackTop, Button, Input, Tooltip, Dropdow } from 'antd';
const { Title,  Paragraph, Text } = Typography;
const { Step } = Steps;
const stepStyle = {
        marginBottom: 60,
        boxShadow: '0px -1px 0 0 #e8e8e8 inset',
    };

export default function SCS2019Linux() {
    return <div>
        {/*更新日志*/}
        <Title level={3} id="更新日志">更新日志</Title>
        <VersionDescription></VersionDescription>
        <Title level={3} id="安装前配置">1. 安装前配置</Title>
        <Steps
            type="navigation"
            size="small"
            current={0}
            style={stepStyle}
        >
            <Step status="process" title="安装前配置" />
            <Step status="wait" title="安装数据库" />
            <Step status="wait" title="安装SCS" />
            <Step status="wait" title="安装RVS" />
        </Steps>
        <Title level={4}>1.1. 检查关闭SELinux</Title>
        <Paragraph>
            修改<Text strong>/etc/selinux/config</Text>文件：
        </Paragraph>
        <Paragraph>
            &nbsp;&nbsp;&nbsp;&nbsp;将<Text mark>&nbsp;SELINUX=enforcing&nbsp;</Text>改为<Text mark>&nbsp;SELINUX=disabled&nbsp;</Text>
        </Paragraph>
        <Paragraph>
            用该命令检查是否修改成功：
        </Paragraph>
        <Paragraph>&nbsp;&nbsp;&nbsp;&nbsp;<Tag>getenforce</Tag></Paragraph>
        <Paragraph>
            检查关闭防火墙：
        </Paragraph>
        <Paragraph>&nbsp;&nbsp;&nbsp;&nbsp;<Tag>chkconfig iptables off</Tag></Paragraph>
        <br/>
        <Title level={4} id="固定ip地址">1.2. 固定ip地址</Title>
        <Paragraph>
            使用如下指令进入网卡配置文件中：
        </Paragraph>
        <Paragraph>
        &nbsp;&nbsp;&nbsp;&nbsp;<Tag>vim /etc/sysconfig/network-scripts/ifcfg-eth0</Tag>
        </Paragraph>
        <Paragraph>
            按照下列方式修改:
        </Paragraph>
        <Paragraph mark style={{ marginLeft: "28px", lineHeight: "200%" }}>
            DEVICE=eth0(默认)<br/>
            HWADDR=00:0C:29:2E:36:16(默认)<br/>
            TYPE=Ethernet(默认)<br/>
            UUID=XXXXXXX(默认)<br/>
            ONBOOT=yes(默认为no,修改为yes意为每次reboot后 ifup eth0)<br/>
            MM_CONTROLLED=yes(默认)<br/>
            #BOOTPROTO=dhcp(dhcp为自动分配ip地址,我们把它注释了，在下面另外加)<br/>
            BOOTPROTO=static(新添加)<br/>
            IPV6INIT=no(新添加)<br/>
            USERCTL=no(新添加)<br/>
            IPADDR=192.168.164.100(新添加,具体ip地址根据实际情况修改)<br/>
            NETMASK=255.255.255.0(新添加)
        </Paragraph>
        <br/>
        <Title level={4} id="修改Hosts文件">1.3. 修改Hosts文件</Title>
        <Paragraph style={{ lineHeight: "200%" }}>
            使用如下指令进入Hosts配置文件中：<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;<Tag>vim /etc/hosts</Tag><br/>
            按照下列方式修改:
        </Paragraph>
        <Paragraph style={{ marginLeft: "28px", lineHeight: "200%" }}>
            127.0.0.1   localhost localhost.localdomain localhost4 <br/>
            localhost4.localdomain4<br/>
            ::1         localhost localhost.localdomain localhost6 localhost6.localdomain6<br/>
            <Text mark>192.168.40.63 localhost</Text>（具体ip地址需要根据实际情况修改）<br/>
        </Paragraph>
        <Paragraph style={{ lineHeight: "200%" }}>
            配置完成后执行：<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;<Tag>service network restart</Tag>重启网卡服务
        </Paragraph>
        <Paragraph>
            最后&nbsp;<Tag>reboot</Tag>重启系统
        </Paragraph><Divider/>
        <Title level={3} id="安装Postgresql">2. 安装Postgresql</Title>
        <Paragraph type="secondary">
            &nbsp;&nbsp;&nbsp;&nbsp;注：此处仅针对64位RedHat6.X系统安装PostgreSQL 10版本，如需更换，访问<a target="_blank" href="https://www.postgresql.org/download/">postgresql下载官网</a>手动选择版本。
        </Paragraph>
        <Steps
            type="navigation"
            size="small"
            current={1}
            style={stepStyle}
        >
            <Step status="finish" title="安装前配置" />
            <Step status="process" title="安装数据库" />
            <Step status="wait" title="安装SCS" />
            <Step status="wait" title="安装RVS" />
        </Steps>
        <Title level={4} id="在线安装">2.1. 在线安装</Title>
        <Paragraph>
            直接在服务器执行以下命令：
        </Paragraph>
        <Paragraph>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <Tag>
                yum install https://download.postgresql.org/pub/repos/yum/reporpms/EL-6-x86_64/pgdg-redhat-repo-latest.noarch.rpm
            </Tag>
        </Paragraph>
        <Title level={4} id="离线安装">2.2. 离线安装</Title>
        <Paragraph style={{ lineHeight: "200%" }}>
            <Text strong>Setp 1 <Icon type="double-right" /> 点击下载下方压缩包放进服务器并解压：</Text><br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="#离线安装"><Icon type="file-zip" />postgresql.zip</a>
        </Paragraph>
        <Paragraph style={{ lineHeight: "200%" }}>
            <Text strong>Setp 2 <Icon type="double-right" /> 进入Step 1中选择的解压目录：</Text><br/>
            &nbsp;&nbsp;&nbsp;&nbsp;<Text type="warning">依次执行</Text>下列命令：
            <br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Tag>rpm -ivh  pgdg-redhat-repo-latest.noarch.rpm</Tag><br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Tag>rpm -ivh  postgresql10-libs-10.10-1PGDG.rhel6.x86_64.rpm</Tag><br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Tag>rpm -ivh  postgresql10-10.10-1PGDG.rhel6.x86_64.rpm</Tag><br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Tag>rpm -ivh  postgresql10-server-10.10-1PGDG.rhel6.x86_64.rpm</Tag><br/>
        </Paragraph>
        <Paragraph>
            &nbsp;&nbsp;&nbsp;&nbsp;如果提示缺少依赖包问题,则需先<a href="#配置本地yum源">配置本地yum源</a>，再重新执行指令<br/>
        </Paragraph>
        <Paragraph style={{ lineHeight: "200%" }}>
            <Text strong>Setp 3 <Icon type="double-right" /> 执行下列命令初始化PostgreSQL：</Text><br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Tag>su postgres</Tag><br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Tag>cd /usr/pgsql-10/bin</Tag><br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Tag>./initdb -D /var/lib/pgsql/10/data/</Tag>
        </Paragraph>
        <Paragraph style={{ lineHeight: "200%" }}>
            <Text strong>Setp 4 <Icon type="double-right" /> 在PostgreSQL中启用远程访问：</Text><br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;执行<Tag>vim /var/lib/pgsql/10/data/postgresql.conf</Tag> 修改如下属性值：<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Text mark>listen_addresses = '*'</Text><br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Text mark>port = 5432</Text>
        </Paragraph>
    </div>
}