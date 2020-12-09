import React, {Fragment, useState} from 'react'
const SortComponent = (props) =>{

  const [date, setDate] = useState(props)

  const sortByDate =()=> {
    const sorted = date.sort((a,b)=>{
      return b.launch_date_utc - a.launch_date_utc;
    });
    setDate(sortByDate);
    alert(sorted[0].launch_date_unix);
  }
  

    return (
      <Fragment>
        <h4>Hello from the SortComponent</h4>
        {props.APIData.map((luanch, index) => {
          return <p key={index}>{luanch.mission_name}, {luanch.launch_date_utc}</p>
        })}
        <div onclick={sortByDate}> sort</div>
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