import React, { useState } from "react";

import { Menu } from "antd";
import {
  HomeOutlined,
  AppstoreOutlined,
  BarChartOutlined,
  SettingOutlined,
  ToTopOutlined,
} from "@ant-design/icons";

export default (props) => {
  return (
    <>
      <Menu
        className="side-menu"
        defaultSelectedKeys={["home"]}
        mode={"horizontal"}
      >
        <Menu.Item key="home">
          <HomeOutlined /> Home
        </Menu.Item>

        <Menu.Item key="analytics">
          <ToTopOutlined /> Upload
        </Menu.Item>

        <Menu.Item key="profile">
          <AppstoreOutlined /> Packages
        </Menu.Item>

        <Menu.Item key="settings">
          <SettingOutlined /> Settings
        </Menu.Item>
      </Menu>
    </>
  );
};
