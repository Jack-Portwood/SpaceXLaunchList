import React, {Fragment} from 'react'
const SortComponent = (props) =>{
  

    return (
      <Fragment>
        <h4>Hello from the SortComponent</h4>

        {props.modData.APIData.map((item, index) => (
          <ul key={index}>
            <li>Misson Name:{item.mission_name}</li>
            <li>Launch Date:{item.launch_date_utc}</li>
            <li>Launch Year:{item.launch_year}</li>
            <li>Rocket:{item.rocket.rocket_name}</li>
          </ul>
        ))}
      </Fragment>
    );
}

export default SortComponent;


//use as base for sort function need to get hold of date order >2006 <2020
// const bubbleSort = (array) => {
//   let length = array.length;

//   for (index = 0; index < length; ++index) {
//     for (number = 0; number < length; ++number) {
//       if (array[number] > array[number + 1]) {
//         let temp = array[number];
//         array[number] = array[number + 1];
//         array[number + 1] = temp;
//       }
//     }
//   }
//   return array;
// };