import React, { Fragment } from "react";
import ListItem from "./ListItem";

const ListComponent = (props) => {
  const listData = props.APIData.map((item, index) => {
    return <ListItem key={index} item={item} />;
  });

  return (
    <div className="listComponent">
      <ul>{listData}</ul>
    </div>
  );
};

export default ListComponent;
