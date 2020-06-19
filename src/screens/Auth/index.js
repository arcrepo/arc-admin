import React, { useState } from "react";
import {
  Card,
  Form,
  Input,
  Button,
  Checkbox,
  Row,
  Col,
  notification,
} from "antd";

import Cookie from "js-cookie";
import Header from "../../components/Header";
import { MakePOST } from "../../helpers/Request";

export default (props) => {
  const [loading, setLoading] = useState(false);

  const Login = (formData) => {
    setLoading(true);
    MakePOST("/auth", {
      authToken: formData.authToken,
    }).then((data) => {
      if (data) {
        notification.success({
          message: `Successfully logged in`,
        });
        setTimeout(() => {
          Cookie.set("auth-token", formData.authToken);
          window.location = "/";
        }, 800);
      } else {
        notification.error({
          message: `Invalid auth token`,
        });
      }
      setLoading(false);
    });
  };

  return (
    <>
      <Header />
      <div style={{ margin: 20 }}>
        <Row gutter={[16, 16]}>
          <Col xs={24} md={12}>
            <Card title="Login">
              <Form
                initialValues={{
                  authToken: "",
                  remember: false,
                }}
                onFinish={Login}
              >
                <Form.Item name="authToken">
                  <Input placeholder="Enter auth token" />
                </Form.Item>
                <Form.Item name="remember" valuePropName="checked">
                  <Checkbox>Remember me</Checkbox>
                </Form.Item>
                <Button type="primary" loading={loading} htmlType="submit">
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
