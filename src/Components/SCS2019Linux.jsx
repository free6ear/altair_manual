import React from 'react';
import VersionDescription from './SCS2019VersionDescription';
import CodeMirror from 'react-codemirror';  
import 'codemirror/lib/codemirror.css';  
import 'codemirror/mode/sql/sql'; 
import 'codemirror/theme/darcula.css';
import {  Anchor, Layout, Menu, Icon, Divider, Tag, Table, Typography, Radio, Steps, BackTop, Button, Input, Tooltip, Dropdow } from 'antd';

import pic_3_1 from '../img/pic_3_1.png';
import pic_3_2 from '../img/pic_3_2.png';
import pic_3_3 from '../img/pic_3_3.png';
import pic_3_4 from '../img/pic_3_4.png';

const { Title,  Paragraph, Text } = Typography;
const { Step } = Steps;
const stepStyle = {
        marginBottom: 60,
        boxShadow: '0px -1px 0 0 #e8e8e8 inset',
    };
    const options={  
        lineNumbers: false,                     //显示行号  
        mode: {name: "text/x-mysql"},          //定义mode  
        extraKeys: {},   //自动提示配置  
        theme: "darcula"                  //选中的theme  
      };

export default class SCS2019Linux extends React.Component {
    constructor() {
        super()
        this.state={
            sqlValue: "create user hweuser with LOGIN SUPERUSER CREATEDB CREATEROLE INHERIT REPLICATION CONNECTION LIMIT -1 PASSWORD 'hwe_123';"
        }
    }
    render() {
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
            <Paragraph style={{ marginLeft: "40px"}}>
                修改<Text strong>/etc/selinux/config</Text>文件：
            </Paragraph>
            <Paragraph style={{ marginLeft: "40px"}}>
                &nbsp;&nbsp;&nbsp;&nbsp;将<Text mark>&nbsp;SELINUX=enforcing&nbsp;</Text>改为<Text mark>&nbsp;SELINUX=disabled&nbsp;</Text>
            </Paragraph>
            <Paragraph style={{ marginLeft: "40px"}}>
                用该命令检查是否修改成功：
            </Paragraph>
            <Paragraph style={{ marginLeft: "40px"}}>&nbsp;&nbsp;&nbsp;&nbsp;<Tag>getenforce</Tag></Paragraph>
            <Paragraph style={{ marginLeft: "40px"}}>
                检查关闭防火墙：
            </Paragraph>
            <Paragraph style={{ marginLeft: "40px"}}>&nbsp;&nbsp;&nbsp;&nbsp;<Tag>chkconfig iptables off</Tag></Paragraph>
            <br/>
            <Title level={4} id="固定ip地址">1.2. 固定ip地址</Title>
            <Paragraph style={{ marginLeft: "40px"}}>
                使用如下指令进入网卡配置文件中：
            </Paragraph>
            <Paragraph style={{ marginLeft: "40px"}}>
            &nbsp;&nbsp;&nbsp;&nbsp;<Tag>vim /etc/sysconfig/network-scripts/ifcfg-eth0</Tag>
            </Paragraph>
            <Paragraph>
            </Paragraph>
            <div style={{ width: "800px",  marginLeft: "40px", lineHeight: "200%" }}>
                <CodeMirror 
                    ref="editor" 
                    value=" DEVICE=eth0(默认)
                    HWADDR=00:0C:29:2E:36:16(默认)
                    TYPE=Ethernet(默认)
                    UUID=XXXXXXX(默认)
                    ONBOOT=yes(默认为no,修改为yes意为每次reboot后 ifup eth0)
                    MM_CONTROLLED=yes(默认)
                    #BOOTPROTO=dhcp(dhcp为自动分配ip地址,我们把它注释了，在下面另外加)
                    BOOTPROTO=static(新添加)
                    IPV6INIT=no(新添加)
                    USERCTL=no(新添加)
                    IPADDR=192.168.164.100(新添加,具体ip地址根据实际情况修改)
                    NETMASK=255.255.255.0(新添加)"  
                    options={options}
                ></CodeMirror>
                </div>
            <br/>
            <Title level={4} id="修改Hosts文件">1.3. 修改Hosts文件</Title>
            <Paragraph style={{ lineHeight: "200%", marginLeft: "40px" }}>
                使用如下指令进入Hosts配置文件中：<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;<Tag>vim /etc/hosts</Tag><br/>
                按照下列方式修改:
            </Paragraph>
            <div style={{ maxWidth: "925px",  margin: "0 auto", lineHeight: "200%" }}>
                <CodeMirror 
                    ref="editor" 
                    value=" 127.0.0.1   localhost localhost.localdomain localhost4
                    localhost4.localdomain4
                    ::1         localhost localhost.localdomain localhost6 localhost6.localdomain6
                   192.168.40.63 localhost</Text>（具体ip地址需要根据实际情况修改）"
                    options={options}
                ></CodeMirror>
            </div>
            <Paragraph style={{ lineHeight: "200%", marginLeft: "40px" }}>
                配置完成后执行：<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;<Tag>service network restart</Tag>重启网卡服务
            </Paragraph>
            <Paragraph style={{ marginLeft: "40px"}}>
                最后&nbsp;<Tag>reboot</Tag>重启系统
            </Paragraph><Divider/>
            <Title level={3} id="安装Postgresql">2. 安装Postgresql</Title>
            <Paragraph type="secondary" style={{ marginLeft: "40px"}}>
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
            <Paragraph style={{ marginLeft: "40px"}}>
                直接在服务器执行以下命令：
            </Paragraph>
            <Paragraph style={{ marginLeft: "40px"}}>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <Tag>
                    yum install https://download.postgresql.org/pub/repos/yum/reporpms/EL-6-x86_64/pgdg-redhat-repo-latest.noarch.rpm
                </Tag>
            </Paragraph>
            <Title level={4} id="离线安装">2.2. 离线安装</Title>
            <Paragraph style={{ lineHeight: "300%" }}>
                <Text strong>Setp 1 ： 点击下载下方压缩包放进服务器并解压</Text><br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="#离线安装"><Icon type="file-zip" />postgresql.zip</a>
            </Paragraph>
            <Paragraph style={{ lineHeight: "300%" }}>
                <Text strong>Setp 2 ： 进入Step 1中选择的解压目录</Text><br/>
                &nbsp;&nbsp;&nbsp;&nbsp;<Text type="warning">依次执行</Text>下列命令：
                <br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Tag>rpm -ivh  pgdg-redhat-repo-latest.noarch.rpm</Tag><br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Tag>rpm -ivh  postgresql10-libs-10.10-1PGDG.rhel6.x86_64.rpm</Tag><br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Tag>rpm -ivh  postgresql10-10.10-1PGDG.rhel6.x86_64.rpm</Tag><br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Tag>rpm -ivh  postgresql10-server-10.10-1PGDG.rhel6.x86_64.rpm</Tag><br/>
            </Paragraph>
            <Paragraph style={{ marginLeft: "40px"}}>
                &nbsp;&nbsp;&nbsp;&nbsp;如果提示缺少依赖包问题,则需先<a href="#配置本地yum源">配置本地yum源</a>，再重新执行指令<br/>
            </Paragraph>
            <Paragraph style={{ lineHeight: "300%" }}>
                <Text strong>Setp 3 ： 执行下列命令初始化PostgreSQL</Text><br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Tag>su postgres</Tag><br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Tag>cd /usr/pgsql-10/bin</Tag><br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Tag>./initdb -D /var/lib/pgsql/10/data/</Tag>
            </Paragraph>
            <Paragraph style={{ lineHeight: "300%" }}>
                <Text strong>Setp 4 ： 在PostgreSQL中启用远程访问</Text><br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;执行&nbsp;<Tag>vim /var/lib/pgsql/10/data/postgresql.conf</Tag> 修改如下属性值：<br/>
                <Text mark style={{ marginLeft: "60px", lineHeight: "200%" }}>listen_addresses = '*'</Text><br/>
                <Text mark  style={{ marginLeft: "60px", lineHeight: "200%" }}>port = 5432</Text><br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;执行&nbsp;<Tag>vim /var/lib/pgsql/10/data/pg_hba.conf</Tag> 修改如下属性值：<br/>
                <Text mark style={{ marginLeft: "60px", lineHeight: "200%" }}>host all all 0.0.0.0/0 trust</Text><br/>
                <Text mark style={{ marginLeft: "60px", lineHeight: "200%" }}>shared_buffers = 4096MB</Text><br/>
            </Paragraph>
            <Paragraph style={{ lineHeight: "300%" }}>
                <Text strong>Setp 5 ： 更新共享缓冲区值</Text><br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;执行&nbsp;<Tag>vim /var/lib/pgsql/10/data/postgresql.conf</Tag> 修改如下属性值：<br/>
                <Text mark style={{ marginLeft: "60px", lineHeight: "200%" }}>shared_buffers = 4096MB</Text><br/>
            </Paragraph>
            <Paragraph style={{ lineHeight: "300%" }}>
                <Text strong>Setp 6 ： 重启PostgreSQL</Text><br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;执行&nbsp;<Tag>service postgresql-10 restart</Tag><br/>
                <Text type="secondary" style={{ marginLeft: "30px", lineHeight: "400%" }}>RedHat7.0以上版本使用此命令：<Tag>systemctl restart postgresql-10.service</Tag></Text><br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;检查数据库是否开启：<Tag>chkconfig postgresql-10 on</Tag><br/>
            </Paragraph>
            <Paragraph style={{ lineHeight: "300%" }}>
                <Text strong>Setp 7 ： 创建hwedb数据库和用户</Text><br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;执行&nbsp;<Tag>sudo su - postgres</Tag><br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;执行&nbsp;<Tag>psql postgres</Tag><br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;执行下列语句：
            </Paragraph>
            <div style={{ maxWidth: "925px",  margin: "0 auto", lineHeight: "200%" }}>
                <CodeMirror 
                    ref="editor" 
                    value=" create user hweuser with LOGIN SUPERUSER CREATEDB CREATEROLE INHERIT REPLICATION CONNECTION LIMIT -1 PASSWORD 'hwe_123';
                    create database hwedb with OWNER = hweuser ENCODING = 'UTF8' CONNECTION LIMIT = -1;
                    create user hwecm with LOGIN SUPERUSER CREATEDB CREATEROLE INHERIT REPLICATION CONNECTION LIMIT -1 PASSWORD 'cm_123';
                    create user dm with LOGIN SUPERUSER CREATEDB CREATEROLE INHERIT REPLICATION CONNECTION LIMIT -1 PASSWORD 'dm_123';
                    create user asmdb with LOGIN SUPERUSER CREATEDB CREATEROLE INHERIT REPLICATION CONNECTION LIMIT -1 PASSWORD 'asm_123';
                    \q
                    psql hwedb
                    create schema hwecm authorization hwecm;
                    create schema dm authorization dm;
                    create schema asmdb authorization asmdb;
                    \q" 
                    options={options}
                ></CodeMirror>
            </div>
            <Paragraph style={{ lineHeight: "300%" }}>
                <Text strong>Setp 8：修改postgres密码</Text><br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;执行&nbsp;<Tag>sudo su - postgres</Tag><br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Tag>psql postgres</Tag><br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Tag>alter user postgres with password 'root';</Tag><br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Tag>\q</Tag><br/>
            </Paragraph>
            <Divider/>
            <Title level={3} id="安装SCS">3. 安装SCS</Title>
            <Steps
                type="navigation"
                size="small"
                current={2}
                style={stepStyle}
            >
                <Step status="finish" title="安装前配置" />
                <Step status="finish" title="安装数据库" />
                <Step status="process" title="安装SCS" />
                <Step status="wait" title="安装RVS" />
            </Steps>
            <Paragraph style={{ lineHeight: "300%" }}>
                <Text strong>Setp 1 ：（1）	添加pbsadmin用户，并设置指定密码为”1qaz2wsx”</Text><br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;执行&nbsp;<Tag>vim /var/lib/pgsql/10/data/postgresql.conf</Tag> 修改如下属性值：<br/>
                <Text mark style={{ marginLeft: "60px", lineHeight: "200%" }}>useradd pbsadmin</Text><br/>
                <Text mark style={{ marginLeft: "60px", lineHeight: "200%" }}>passwd pbsadmin</Text><br/>
            </Paragraph>
            <Paragraph style={{ lineHeight: "300%" }}>
                <Text strong>Setp 2 ：执行安装程序</Text><br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;执行&nbsp;<Tag>vim /var/lib/pgsql/10/data/postgresql.conf</Tag> 修改如下属性值：<br/>
                <Text type="secondary" style={{ marginLeft: "60px", lineHeight: "200%" }}>下文中未列出步骤均选默认配置</Text><br/>
            </Paragraph>
            <Paragraph style={{ lineHeight: "300%" }}>
                <Text strong>Setp 3 ：选择”Altair Applications”</Text><br/>
                <div style={{ marginLeft: "60px" }}>
                    <img src={pic_3_1} />
                </div>
            </Paragraph>
        </div>
            
    }
}