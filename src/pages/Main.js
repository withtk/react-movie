import { HomeOutlined, LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu } from 'antd';
import React, { useState } from 'react';
import Estate from './estate/estate';
import Menu2 from '../menu/menu2'; 
import Corporation from './estate/corporration';
import Home from './Home';


const Main = ({ history }) => {

    const { Header, Content, Footer, Sider } = Layout;

    const menuList = [
        { label: "가가", icon: <LaptopOutlined />, goto: <Estate />, onClick: menuClick },
        { label: "나나나", icon: <LaptopOutlined />, goto: <Menu2 />, onClick: menuClick },
        { label: "다다", icon: <LaptopOutlined />, goto: <div>test 123</div>, onClick: menuClick },
        { label: "라라라", icon: <LaptopOutlined />, goto: <Corporation />, onClick: menuClick },
        { label: "5qkd", icon: <LaptopOutlined />, goto: <Menu2 />, onClick: menuClick },

        { label: "6no", icon: <LaptopOutlined />, goto: <div>test 123</div>, onClick: menuClick },
        { label: "777", icon: <LaptopOutlined />, goto: <Corporation />, onClick: menuClick },
        { label: "팔방", icon: <LaptopOutlined />, goto: <Menu2 />, onClick: menuClick },
        { label: "구구구", icon: <LaptopOutlined />, goto: <div>test 123</div>, onClick: menuClick },
        { label: "MenuList", icon: <LaptopOutlined />, goto: <Home />, onClick: menuClick }
    ].map((v, i) => { return { key: i, ...v } });

    const [topNo, setTopNo] = useState(0);
    const [subNo, setSubNo] = useState(0);
    const [menuNo, setMenuNo] = useState(0);
    const topMenu = [
        {
            key: 0,
            label: "등기계산기",
            icon: <HomeOutlined />,
            onClick: topMenuClick,
           
            submenu:[{
                key: 10,
                icon: <HomeOutlined />,
                label: "부동산",
                onClick: subMenuClick,
                children: [0].map((i) => menuList[i])
            },{
                key: 20,
                icon: <HomeOutlined />,
                label: "법인",
                onClick: subMenuClick,
                children: [9].map((i) => menuList[i])
            }]
        },  {
            key: 1,
            label: '테스트',
            icon: <UserOutlined />,
            onClick: topMenuClick,
            submenu: [{
                key: 110,
                icon: <HomeOutlined />,
                label: "Intermediate",
                onClick: subMenuClick,
                children: [0, 1, 2].map((i) => menuList[i])
            },
            {
                key: 120,
                icon: <LaptopOutlined />,
                label: "finally",
                onClick: subMenuClick,
                children: [3, 4].map((i) => menuList[i])
            }]

            
        }
    ]


    function topMenuClick(e) {
        setTopNo(e.key);
    }
    function subMenuClick(e) {
        // setSubNo(e.key);
        console.log("--------- onSubMenuClick-------");
    }
    function menuClick(e) {
        setMenuNo(e.key);
        console.log(topMenu[topNo].label + " : " + topNo);
        // console.log(topMenu[topNo].submenu[subNo].label + " : " + subNo);
        console.log(menuList[e.key].label + " : " + e.key);
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
                    <Content id="mainContent" style={{   padding: '0 24px', minHeight: 280, }}>
                        Content in sider
                        {
                            menuList[menuNo].goto
                            // topMenu[topNo].submenu[subNo].children[menuNo].goto 
                        }
                        <br /> end.

                    </Content>
                </Layout>

            </Content>

            <Footer style={{ textAlign: 'center', }}>
                Ant Design ©2018 Created by Ant UED
            </Footer>
        </Layout>
    )
};

export default Main;