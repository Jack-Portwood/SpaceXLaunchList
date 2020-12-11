import React, { Fragment } from "react";

const ListItem = ({ item }) => {
  return (
    <div className="listItem">
      <li className="li">
        <article>
            <p>#{item.flight_number}</p>
          <p>{item.mission_name}</p>
          <p>{item.launch_year}</p>
          <p>{item.rocket.rocket_name}</p>
        </article>
      </li>
    </div>
  );
};

export default ListItem;
