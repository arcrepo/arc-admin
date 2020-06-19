import React from "react";
import { PageHeader, Button } from "antd";
import { TwitterOutlined, GithubOutlined } from "@ant-design/icons";

export default (props) => {
  return (
    <>
      <PageHeader
        title={
          <a href="/">
            <img src="/assets/text-logo.png" width="60em" />
          </a>
        }
        subTitle={props.subTitle || "Cydia Tweak Hosting Platform"}
        extra={[
          <Button icon={<TwitterOutlined />} style={{ color: "#1da1f2" }} />,
          <Button icon={<GithubOutlined />} style={{ color: "#333" }} />,
        ]}
      />
    </>
  );
};
