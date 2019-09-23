import React from 'react'
const TableDate = {
    dataSourceOfTerm : [
        {
            key: "1",
            abbr: "SM",
            cnName: "仿真数据管理",
            enName: "Simulation Manager"
        },
        {
            key: "2",
            abbr: "CM",
            cnName: "资源调度管理",
            enName: "Computer Manager"
        },
        {
            key: "3",
            abbr: "RVS",
            cnName: "结果可视化",
            enName: "Result Visualization Service"
        },
        {
            key: "4",
            abbr: "DM",
            cnName: "远程可视化管理",
            enName: "Display Manager"
        },
        {
            key: "5",
            abbr: "EPM",
            cnName: "企业流程管理",
            enName: "Enterprise Process Manager"
        },
        {
            key: "6",
            abbr: "OpenOffice",
            cnName: "Office文档在线预览插件",
            enName: "OpenOffice"
        },
        {
            key: "7",
            abbr: "AMS",
            cnName: "访问管理",
            enName: "Access Manager"
        },
        {
            key: "8",
            abbr: "PBS Pro",
            cnName: "高性能计算平台资源调度管理	",
            enName: "PBS Professional"
        },
        {
            key: "9",
            abbr: "PAS",
            cnName: "PBS Pro的Web服务层",
            enName: "PBS Application Service"
        },
        {
            key: "10",
            abbr: "HPC",
            cnName: "高性能计算",
            enName: "High Performance Computing"
        },
        {
            key: "11",
            abbr: "PDM",
            cnName: "产品数据管理",
            enName: "Product Data Management"
        },
        {
            key: "12",
            abbr: "SCS",
            cnName: "Altair仿真云套件",
            enName: "Simulation Cloud Suite"
        },
        {
            key: "13",
            abbr: "MB",
            cnName: "快速建模",
            enName: "Model Builder"
        },
        {
            key: "14",
            abbr: "DB",
            cnName: "统计看板",
            enName: "Dashboard"
        },
    ],
    
    columnsOfTerm : [
        {
            title: '模块简称',
            dataIndex: 'abbr',
            key: 'abbr',
        },
        {
            title: '模块中文名称',
            dataIndex: 'cnName',
            key: 'cnName',
        },
        {
            title: '模块英文名称',
            dataIndex: 'enName',
            key: 'enName',
        },
    ],

    dataSourceOfAcronym: [
        {
            key: "1",
            abbr: "东南汽车",
            fullName: "东南（福建）汽车工业有限公司",
        },
        {
            key: "2",
            abbr: "loadcase",
            fullName: "工况分析",
        },
        {
            key: "3",
            abbr: "Altair",
            fullName: "澳汰尔工程软件（上海）有限公司",
        },
        {
            key: "4",
            abbr: "SDM",
            fullName: "仿真数据与流程管理平台",
        },
        {
            key: "5",
            abbr: "PA",
            fullName: "基于工具软件的二次开发",
        },
        {
            key: "6",
            abbr: "HW",
            fullName: "HyperWorks，Altair通用前后处理平台",
        },
    ],
    columnOfAcronym: [
        {
            title: '术语简称',
            dataIndex: 'abbr',
            key: 'abbr',
        },
        {
            title: '全称',
            dataIndex: 'fullName',
            key: 'fullName',
        },
    ],
    dataSourceOfAuth: [
        {
            key: "1",
            role: "工程师",
            authDiscription: "查看授权项目、授权节点，自己专业的任务状态；查看绑定的冻结版本看板和实时的数据看板",
        },
        {
            key: "2",
            role: "专业窗口",
            authDiscription: "查看授权项目、授权节点，自己专业的任务状态；查看绑定的冻结版本看板和实时的数据看板",
        },
        {
            key: "3",
            role: "科长",
            authDiscription: "查看授权项目、授权节点，自己专业的任务状态；查看绑定的冻结版本看板和实时的数据看板",
        },
        {
            key: "1",
            role: "工程师",
            authDiscription: "查看授权项目、授权节点，自己专业的任务状态；查看绑定的冻结版本看板和实时的数据看板",
        },
        {
            key: "4",
            role: "车型窗口",
            authDiscription: "查看授权项目、授权节点，所有专业的任务状态；查看绑定的冻结版本看板和实时的数据看板",
        },
        {
            key: "5",
            role: "主任",
            authDiscription: "查看所有车型、所有节点、所有专业的任务状态；查看绑定的冻结版本看板",
        }
    ],
    columnOfAuth: [
        {
            title: '角色',
            dataIndex: 'role',
            key: 'role',
        },
        {
            title: '权限描述',
            dataIndex: 'authDiscription',
            key: 'authDiscription',
        },
    ]
}

export default TableDate;