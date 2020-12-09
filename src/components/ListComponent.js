import React, {Fragment} from 'react';

const ListComponent = (props) => {
    console.log(props +"Hello")
    return (
      <Fragment>
        
        <h5> Hello from the ListComponent</h5>
      </Fragment>
    );
}

export default ListComponent;


// something like this to render final 
//  {
//    props.modData.APIData.map((item, index) => (
//      <ul key={index}>
//        <li>Misson Name:{item.mission_name}</li>
//        <li>Launch Date:{item.launch_date_utc}</li>
//        <li>Launch Year:{item.launch_year}</li>
//        <li>Rocket:{item.rocket.rocket_name}</li>
//      </ul>
//    ));
//  }