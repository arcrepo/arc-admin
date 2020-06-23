import React from "react";
import { Typography } from "antd";
import { Link } from "react-router-dom";
import Header from "../../components/Header";

const { Text } = Typography;

export default (params) => {
  return (
    <>
      <Header />
      <div
        style={{
          marginTop: 40,
          textAlign: "center",
        }}
      >
        <Text>
          Please <Link to="/login">login</Link> to continue
        </Text>
      </div>
    </>
  );
};
