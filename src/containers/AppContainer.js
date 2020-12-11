import React, { Fragment, useState, useEffect } from "react";
import FilterComponent from "../components/FilterComponent";
import SortComponent from "../components/SortComponent";
import ListComponent from "../components/ListComponent";
import NavBar from "../components/NavBar";

const AppContainer = () => {
  const [fetchedData, setFetchedData] = useState("");
  const [error, setError]= useState("")

  const fetchedLaunchData = async (url) => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setFetchedData(data);
      })
      .catch((err) => setError(err));
  };
  

  useEffect(() => {
    fetchedLaunchData("https://api.spacexdata.com/v3/launches")
    // .then(filterByYears(fetchedData))
    // .then(console.log("Hello"));
  }, []);


  // const filterByYears = (launches) => {
  //   const years = [];

  //   launches.forEach(launches =>{
  //     if (!years.includes(launches.launch_year)){
  //       years.push(launches.launch_year)
  //     }
  //   })
  //    console.log(years)
  //    return years;

  // }
  
      


  //  const date = fetchedData.launch_date.unix;

  // const sortByDate = (ordered) => {
  // const sorted = []
  //   let length = ordered.length;
  //   for (index = 0; index < length; ++index) {
  //     for (number = 0; number < length; ++number) {
  //       if (date[number] > date[number + 1]) {
  //         let temp = date[number];
  //         date[number] = date[number + 1];
  //         date[number + 1] = temp;
  //       }
  //     }
  //   }
  //   setSortDate(date)
  //   return date;

  // };

  return (
    <Fragment>
      <NavBar />
      {/* <button onClick={() => filterByYears(fetchedData)}></button> */}

      <div className="mainContainer">
        <div className="rocketImage"></div>
        <FilterComponent fetchedData={fetchedData} />

        {fetchedData ? (
          <ListComponent APIData={fetchedData} />
        ) : (
          <p>"Loading..."</p>
        )}

        <SortComponent />
      </div>
    </Fragment>
  );
};

export default AppContainer;
