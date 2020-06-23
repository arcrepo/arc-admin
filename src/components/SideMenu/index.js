import React, { useState } from "react";
import { Menu } from "antd";
import {
  HomeOutlined,
  AppstoreOutlined,
  SettingOutlined,
  ToTopOutlined,
} from "@ant-design/icons";
import { useSelector, useDispatch } from "react-redux";
import { SetActiveItem } from "../../redux/actions/Menu";

export default (props) => {
  const activeItem = useSelector((state) => state.activeItem);
  const dispatch = useDispatch();
  return (
    <>
      <Menu
        className="side-menu"
        defaultSelectedKeys={[activeItem]}
        mode={"horizontal"}
        onSelect={({ key }) => {
          dispatch(SetActiveItem(key));
        }}
      >
        <Menu.Item key="home">
          <HomeOutlined /> Home
        </Menu.Item>

        <Menu.Item key="upload">
          <ToTopOutlined /> Upload
        </Menu.Item>

        <Menu.Item key="packages">
          <AppstoreOutlined /> Packages
        </Menu.Item>

        <Menu.Item key="settings">
          <SettingOutlined /> Settings
        </Menu.Item>
      </Menu>
    </>
  );
};
