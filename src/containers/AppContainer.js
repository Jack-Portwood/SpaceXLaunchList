import React, { Fragment, useState, useEffect } from "react";
import FilterComponent from "../components/FilterComponent";
import SortComponent from "../components/SortComponent";
import ListComponent from "../components/ListComponent";
import NavBar from "../components/NavBar";

const AppContainer = () => {
  const [fetchedData, setFetchedData] = useState("");
  const [hasError, setError] = useState("");
  const [sortDate, setSortDate] = useState("");

  const fetchedLaunchData = (url) => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setFetchedData(data);
      })
      .catch((err) => setError(err));
  };

  useEffect(() => {
    fetchedLaunchData("https://api.spacexdata.com/v3/launches");
  }, []);

  //  const date = fetchedData.launch_date.unix;

  // const sortByDate = () => {
  //   let length = date.length;
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
      <div className="mainContainer">
        <div className="rocketImage"></div>
        {fetchedData ? (
          <ListComponent APIData={fetchedData} />
        ) : (
          <p>"Loading..."</p>
        )}

        <FilterComponent APIData={fetchedData} />
        {/* <SortComponent sortByDate={this.sortByDate} /> */}
      </div>
    </Fragment>
  );
};

export default AppContainer;
