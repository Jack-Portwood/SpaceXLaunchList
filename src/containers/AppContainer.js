import React, {Fragment, useState, useEffect} from 'react';
import FilterComponent from '../components/FilterComponent';
import SortComponent from '../components/SortComponent';
import NavBar from '../components/NavBar'

const AppContainer = () =>{

    const [fetchedData, setFetchedData] = useState("");
    const [hasError, setError] = useState();
  
    const fetchedLaunchData = (url) =>{
        fetch(url)
          .then((res) => res.json())
          .then((data) => {
            setFetchedData(data);
          })
          .catch((err) => setError(err));
    
    }

    useEffect(() => {
        fetchedLaunchData("https://api.spacexdata.com/v3/launches")
    },[])
    

    return (
      <Fragment>
        <NavBar/>
        <h2>Hello from the AppContainer</h2>
        {fetchedData?<FilterComponent APIData={fetchedData}/>: <p>"Loading..."</p>}
        {fetchedData?<SortComponent APIData={fetchedData}/>: <p>"Loading..."</p>}
        

      </Fragment>
    );
}

export default AppContainer;