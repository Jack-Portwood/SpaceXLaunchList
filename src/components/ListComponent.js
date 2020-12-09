import React, { Fragment } from "react";

const ListComponent = (props) => {
  return (
    <div className="listComponent">
      <h5> Hello from the ListComponent</h5>
      {props.APIData.map((item, index) => (
        <ul key={index}>
          <li>Misson Name:{item.mission_name}</li>
          <li>Launch Date:{item.launch_date_utc}</li>
          <li>Launch Year:{item.launch_year}</li>
          <li>Rocket:{item.rocket.rocket_name}</li>
        </ul>
      ))}
    </div>
  );
};

export default ListComponent;

// something like this to render final
