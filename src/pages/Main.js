import { HomeOutlined, LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu } from 'antd';
import React, { useState } from 'react';
import Estate from './estate/estate';
import Menu2 from '../menu/menu2';
import Corporation from './estate/corporration';
import Mystyle from './practice/styled/Mystyle';
import Counter from './practice/counter/Counter';
import OnCon from './practice/context/OnCon';
import Memo from './practice/memo/Memo';
import MovieList from './movie/MovieList';
import Movie from './movie/Movie';
import BaseCallback from './practice/callback/BaseCallback';
import BaseContext from './practice/context/BaseContext'; 

const Main = ({ history }) => { 
    
    const { Header, Content, Footer, Sider } = Layout;

    const menuList = [
        { label: "가가", icon: <LaptopOutlined />, goto: <Estate />, onClick: menuClick },
        { label: "나나나", icon: <LaptopOutlined />, goto: <Menu2 />, onClick: menuClick },
        { label: "무비", icon: <LaptopOutlined />, goto: <MovieList />, onClick: menuClick },
        { label: "라라라", icon: <LaptopOutlined />, goto: <Corporation />, onClick: menuClick },
        { label: "Memo", icon: <LaptopOutlined />, goto: <Memo />, onClick: menuClick },

        { label: "MyCallback", icon: <LaptopOutlined />, goto: <BaseCallback/>, onClick: menuClick },
        { label: "styled-component", icon: <LaptopOutlined />, goto: <Mystyle />, onClick: menuClick },
        { label: "Context", icon: <LaptopOutlined />, goto: <BaseContext />, onClick: menuClick },
        { label: "REDUX", icon: <LaptopOutlined />, goto: <div>test 123</div>, onClick: menuClick },
        { label: "BaContext", icon: <LaptopOutlined />, goto: <BaseContext/>, onClick: menuClick }
    ].map((v, i) => { return { key: i, ...v } });

    const [topNo, setTopNo] = useState(1);
    // const [subNo, setSubNo] = useState(0);
    const [menuNo, setMenuNo] = useState(0);
    const topMenu = [
        {
            key: 0,
            label: "등기계산기",
            icon: <HomeOutlined />,
            onClick: topMenuClick,

            submenu: [{
                key: 10,
                icon: <HomeOutlined />,
                label: "부동산",
                onClick: subMenuClick,
                children: [0].map((i) => menuList[i])
            }, {
                key: 20,
                icon: <HomeOutlined />,
                label: "법인",
                onClick: subMenuClick,
                children: [9].map((i) => menuList[i])
            }]
        }, {
            key: 1,
            label: '테스트',
            icon: <UserOutlined />,
            onClick: topMenuClick,
            submenu: [{
                key: 110,
                icon: <HomeOutlined />,
                label: "Intermediate",
                onClick: subMenuClick,
                children: [0, 1, 2, 4,5, 7 ].map((i) => menuList[i])
            },
            {
                key: 120,
                icon: <LaptopOutlined />,
                label: "finally",
                onClick: subMenuClick,
                children: [6, 4].map((i) => menuList[i])
            }]


        }
    ]


    function topMenuClick(e) {
        setTopNo(e.key);
    }
    function subMenuClick(e) {
        // setSubNo(e.key);
        // console.log("--------- onSubMenuClick-------");
    }
    function menuClick(e) {
        setMenuNo(e.key);
        // console.log(topMenu[topNo].label + " : " + topNo);
        // console.log(topMenu[topNo].submenu[subNo].label + " : " + subNo);
        // console.log(menuList[e.key].label + " : " + e.key);
    }


    return (
        <Layout>
            <Header className="header">
                <div className="logo" />
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={[topNo]} items={topMenu} />
            </Header>

            <Content style={{ padding: '0 50px', }}>

                <Breadcrumb style={{ margin: '16px 0', }}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>List1</Breadcrumb.Item>
                    <Breadcrumb.Item>Left</Breadcrumb.Item>
                </Breadcrumb>

                <Layout className="site-layout-background" style={{ padding: '24px 0', }}>
                    <Sider className="site-layout-background" width={200}>
                        <Menu
                            mode="inline"
                            defaultSelectedKeys={['0']}
                            defaultOpenKeys={['sub1']}
                            style={{ height: '100%', }}
                            items={topMenu[topNo].submenu} />
                    </Sider>
                    <Content id="mainContent" style={{ padding: '0 24px', minHeight: 280, }}>
                        {
                            menuList[menuNo].goto
                            // topMenu[topNo].submenu[subNo].children[menuNo].goto 
                        }
                        <br />

                    </Content>
                </Layout>

            </Content>

            <Footer style={{ textAlign: 'center', }}>
                TkiPro ©2018 Created by tk
            </Footer>
        </Layout>
    )
};

export default Main;