import React, { useState } from "react";
import { Card, Form, Input, Button, Checkbox, Row, Col } from "antd";

import Header from "../../components/Header";

export default (props) => {
  const [loading, setLoading] = useState(false);

  const Login = () => {
    setLoading(true);
  };

  return (
    <>
      <Header />
      <div style={{ margin: 20 }}>
        <Row gutter={[16, 16]}>
          <Col xs={24} md={10}>
            <Card title="Login">
              <Form>
                <Form.Item name="authToken">
                  <Input placeholder="Enter auth token" />
                </Form.Item>
                <Form.Item name="remember" valuePropName="checked">
                  <Checkbox>Remember me</Checkbox>
                </Form.Item>
                <Button type="primary" loading={loading} onClick={Login}>
                  Login
                </Button>
              </Form>
            </Card>
          </Col>

          <Col></Col>
        </Row>
      </div>
    </>
  );
};
