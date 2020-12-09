import React, {Fragment, useState, useEffect} from 'react';
import FilterComponent from '../components/FilterComponent';
import DataContainer from './DataContainer';

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
        <h2>Hello from the AppContainer</h2>
        {fetchedData?<DataContainer APIData={fetchedData}/>: <p>"Loading..."</p>}
        <FilterComponent APIData={fetchedData}/>
        

      </Fragment>
    );
}

export default AppContainer;