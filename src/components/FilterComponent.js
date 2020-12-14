import React, { Fragment } from "react";
import DataContainer from "../containers/DataContainer";
import Options from "./Options";

const FilterComponent = ({ fetchedData }) => {
  const allYears = [];

  const items = [...fetchedData].map((item, index) => {
    if (!allYears.includes(item.launch_year)) {
      allYears.push(item.launch_year);
      return <Options key={index} item={item.launch_year} />;
    } else {
      return allYears.push(item.launch_year);
    }
  });

  return (
    <Fragment>
      <select className="year-filter-btn">
        <option>Filter by Year</option>
        {items}
      </select>
      <DataContainer fetchedData={fetchedData} />
    </Fragment>
  );
};
export default FilterComponent;

// {
//   props.APIData.filter((year) => year.launch_year === "USERINPUT").map(
//     (filteredYear) => (
//       <ul>
//         <li>{filteredYear.mission_name}</li>
//         <li>{filteredYear.launch_year}</li>
//       </ul>
//     )
//   );

// }
