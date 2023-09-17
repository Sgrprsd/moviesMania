import React from "react";
import { Pagination } from "antd";

const PaginationComp = ({ length, setPage }) => {
  return (
    <Pagination
      onChange={(e) => {
        setPage(e);
      }}
      defaultCurrent={1}
      total={length}
    />
  );
};

export default PaginationComp;
