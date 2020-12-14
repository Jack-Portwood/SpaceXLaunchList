import React, { Fragment, useState } from "react";
import ListComponent from "../components/ListComponent";

const DataContainer = ({ fetchedData }) => {
  return (
    <Fragment>
      <ListComponent fetchedData={fetchedData} />
    </Fragment>
  );
};

export default DataContainer;
