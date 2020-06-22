import React, { useEffect } from "react";

import Header from "../../components/Header";
import SideMenu from "../../components/SideMenu";
import { Card, Row, Col, Statistic, Typography, Button } from "antd";
const { Title } = Typography;
export default (props) => {
  return (
    <div style={{ margin: 10 }}>
      <Header />
      <SideMenu />
      <br />
      <Row gutter={[16, 25]}>
        <Col span={24} lg={8}>
          <Card>
            <Statistic title="Today" value={185} />
          </Card>
        </Col>
        <Col span={24} lg={8}>
          <Card>
            <Statistic title="Last 7 days" value={785} />
          </Card>
        </Col>
        <Col span={24} lg={8}>
          <Card>
            <Statistic title="This month" value={3687} />
          </Card>
        </Col>
      </Row>
      <Row>
        <Col span={24} lg={12}></Col>
      </Row>
    </div>
  );
};
