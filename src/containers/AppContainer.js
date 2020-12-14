import React, { Fragment, useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import FilterComponent from "../components/FilterComponent";
import SortComponent from "../components/SortComponent";
const AppContainer = () => {
  const [fetchedData, setFetchedData] = useState("");
  const [error, setError] = useState("");

  const fetchedLaunchData = async (url) => {
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

  return (
    <Fragment>
      <NavBar />
      <div className="mainContainer">
        <div className="rocketImage-container">
          <div className="rocketImage"></div>
        </div>
        {fetchedData ? (
          <FilterComponent fetchedData={fetchedData} />
        ) : (
          <p>"Loading..."</p>
        )}
        <SortComponent fetchedData={fetchedData} />
      </div>
    </Fragment>
  );
};

export default AppContainer;
