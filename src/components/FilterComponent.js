import React from "react";
import Options from "./Options";

const FilterComponent = ({fetchedData}) => {
  const allYears = []

  const items = [...fetchedData].map((item) => {
    if (!allYears.includes(item.launch_year)) {
      allYears.push(item.launch_year)
      return( <Options item={item.launch_year}/>
        )
    } 
    else {
      return allYears.push(item.launch_year)
    }
  });

  return (
    <select className="year-filter-btn">
      <option>Filter by year</option>
      {items}
    </select>
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
