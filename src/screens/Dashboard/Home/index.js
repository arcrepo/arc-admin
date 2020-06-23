import React from "react";
import { Card, Row, Col, Statistic, Typography, Button } from "antd";
export default (props) => {
  return (
    <>
      <Row gutter={[16, 25]}>
        <Col span={24} lg={8}>
          <Card>
            <Statistic title="Today" value={234} />
          </Card>
        </Col>
        <Col span={24} lg={8}>
          <Card>
            <Statistic title="Last 7 days" value={480} />
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
    </>
  );
};
