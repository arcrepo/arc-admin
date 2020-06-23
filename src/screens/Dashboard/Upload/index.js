import React, { useState } from "react";
import {
  Row,
  Col,
  Button,
  Form,
  Upload,
  message,
  Typography,
  Card,
  Alert,
  Spin,
  List,
} from "antd";
import { InboxOutlined, CheckCircleOutlined } from "@ant-design/icons";
import { HOST } from "../../../env";
import { MakePOST } from "../../../helpers/Request";

const { Title } = Typography;
const { Dragger } = Upload;

const UPLOAD_URL = `${HOST}/package/upload`;
const draggerProps = {
  name: "file",
  multiple: false,
  onChange(info) {
    const { status } = info.file;
    if (status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (status === "done") {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};

export default (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [packageData, setPackageData] = useState({ visible: false });

  const SavePackage = () => {
    setIsLoading(true);
    MakePOST("/package/save").then((data) => {
      setIsLoading(false);
      if (data.control) {
        if (!data.control.name) {
          message.error(`Please upload a valid control file`);
          return;
        }
        setPackageData({
          visible: true,
          data: data.control,
        });

        console.log(packageData);
      }
    });
  };
  return (
    <>
      <Row gutter={[16, 25]}>
        {packageData.visible === false ? (
          <Col span={24} md={12} lg={16}>
            <Form>
              <Card>
                <Spin spinning={isLoading} tip="Requesting...">
                  <Form.Item>
                    <Title level={2}>Control File</Title>
                    <Col lg={13}>
                      <Dragger
                        action={`${UPLOAD_URL}/control`}
                        {...draggerProps}
                      >
                        <p className="ant-upload-drag-icon">
                          <InboxOutlined />
                        </p>
                        <p className="ant-upload-text">
                          Click or drag file to upload your package control file
                        </p>
                      </Dragger>
                      <Alert
                        message={`We will automatically read data for your package, like name etc.`}
                      />
                    </Col>
                  </Form.Item>

                  <Form.Item name="files">
                    <Title level={2}>Deb File</Title>
                    <Col lg={10}>
                      <Dragger action={`${UPLOAD_URL}/deb`} {...draggerProps}>
                        <p className="ant-upload-drag-icon">
                          <InboxOutlined />
                        </p>
                        <p className="ant-upload-text">
                          Click or drag file to upload your .deb file
                        </p>
                      </Dragger>
                    </Col>
                  </Form.Item>
                  <Form.Item>
                    <Button type="primary" onClick={SavePackage}>
                      Next
                    </Button>
                  </Form.Item>
                </Spin>
              </Card>
            </Form>
          </Col>
        ) : (
          <>
            <Col lg={16} span={24}>
              <Card
                title={<Title>Package data</Title>}
                bordered={false}
                extra={[
                  <Button type="primary">
                    <CheckCircleOutlined /> Publish
                  </Button>,
                ]}
              >
                <List
                  style={{ margin: 10 }}
                  itemLayout="horizontal"
                  dataSource={Object.keys(packageData.data)}
                  renderItem={(item) => (
                    <List.Item>
                      <List.Item.Meta
                        title={item.replace(/^./, item[0].toLocaleUpperCase())}
                        description={packageData.data[item]}
                      />
                    </List.Item>
                  )}
                />
              </Card>
            </Col>
          </>
        )}
      </Row>
    </>
  );
};
