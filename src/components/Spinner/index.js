import React from "react";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { Row } from "antd";

const antIcon = (
  <LoadingOutlined
    style={{
      fontSize: 24,
    }}
    spin
  />
);

const Spinner = () => {
  return <Row justify={"center"}>{<Spin indicator={antIcon} />}</Row>;
};

export default Spinner;
