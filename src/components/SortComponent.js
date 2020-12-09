import React, {Fragment, useState} from 'react'
const SortComponent = ({launch_date_unix}) =>{

  const [date, setDate] = useState(launch_date_unix);

  // const sortByDate = (date) =>{
  //   let length = date.length;

  //   for(index = 0; index < length; ++index) {
  //     for (number = 0; number < length; ++number) {
  //       if (date[number] > date[number + 1]) {
  //         let temp = date[number];
  //         date[number] = date[number + 1];
  //         date[number + 1] = temp;
  //       }
  //       }
  //     }
  //     return date;
  //   }
  //   console.log(sortByDate)
  

    return (
      <Fragment>
        <h4>Hello from the SortComponent</h4>
        {/* {props.APIData.map((luanch, index) => {
          return <p key={index}>{luanch.mission_name}, {luanch.launch_date_utc}</p>
        })}
        <div onclick={sortByDate}> sort</div> */}
      </Fragment>
    );
}

export default SortComponent;




// const sortByDate =()=> {
  //   const sorted = date.sort((a,b)=>{
  //     return b.launch_date_utc - a.launch_date_utc;
  //   });
  //   setDate(sortByDate);
  //   alert(sorted[0].launch_date_unix);
  // }