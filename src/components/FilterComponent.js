import React, { Fragment, useState } from "react";

const FilterComponent = (props) => {
  return (
    <Fragment>
      <h4>Hello from the FilterComponent</h4>

      {props.APIData.filter((year) => year.launch_year === "2019").map(
        (filteredYear) => (
          <ul>
            <li>{filteredYear.mission_name}</li>
            <li>{filteredYear.launch_year}</li>
          </ul>
        )
      )}
    </Fragment>
  );
};
export default FilterComponent;
