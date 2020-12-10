import React, { Fragment } from 'react';

const ListItem = ({item}) => {

    return (
      <div className="listItem">
        <li>
          <article>
            <p>{item.mission_name}</p>
            <p>{item.launch_year}</p>
            <p>{item.rocket.rocket_name}</p>
          </article>
        </li>
      </div>
    );
}

export default ListItem;