import React from "react";
import { Input } from "antd";

const SearchInput = ({ setQuery, query }) => {
  return (
    <Input
      style={{ textAlign: "center" }}
      placeholder="Basic usage"
      value={query}
      onChange={(e) => {
        setQuery(e.target.value);
      }}
    />
  );
};

export default SearchInput;
