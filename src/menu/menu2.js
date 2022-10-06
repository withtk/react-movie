import React, { useState } from "react";
import Menu, { MenuProps } from "antd/lib/menu";
import Divider from "antd/lib/divider";

import { Link } from "react-router-dom";
 

const menuItems = [
  {
    label: <Link to="/">홈</Link>,
    key: "home",
  },
  {
    label: <Link to="/a">a 메뉴</Link>,
    key: "a",
  },
  {
    label: <Link to="/b">b 메뉴</Link>,
    key: "b",
  },
  {
    label: <Link to="/c">c 메뉴</Link>,
    key: "c",
  }
];

export default function Menu2() {
  const [current, setCurrent] = useState("home");

  const onMenu = (e) => {
    setCurrent(e.key);
  };

  return (  
    <Menu onClick={onMenu} selectedKeys={[current]} items={menuItems} mode="inline" />
  );
}
