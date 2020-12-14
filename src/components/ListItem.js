import React, { Fragment } from "react";

const ListItem = ({ item }) => {
  return (
    <div className="listItem">
      <li className="li">
        <article>
          <div className="item-right">
            <div className="flight-No">#{item.flight_number}</div>
            <div className="mission-name">{item.mission_name}</div>

            <div className="item-left">
              <div className="launch-year">14/03/1990</div>
              <div className="rocket-name">{item.rocket.rocket_name}</div>
            </div>
          </div>
        </article>
      </li>
    </div>
  );
};

export default ListItem;
