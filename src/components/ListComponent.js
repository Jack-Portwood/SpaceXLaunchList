import React from "react";
import ListItem from "./ListItem";

const ListComponent = ({ fetchedData }) => {
  const listData = [...fetchedData].map((item) => {
    return <ListItem item={item} />;
  });

  return (
    <div className="listComponent">
      <div className="btnfil"></div>
      {listData}
    </div>
  );
};

export default ListComponent;
