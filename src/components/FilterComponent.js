import React, { Fragment } from "react";
import ListComponent from "./ListComponent";

const FilterComponent = (props) => {
  return (
    <Fragment>
      <h4>Hello from the FilterComponent</h4>

      {props.APIData.filter((year) => year.launch_year === "2015").map(
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
