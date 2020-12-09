import React, {Fragment, useState} from 'react';
import SortComponent from '../components/SortComponent';
import FilterComponent from '../components/FilterComponent';

const DataContainer = (props) =>{

// mybe use spread operator 

        
         
  return (
    <Fragment>
        
      <h3> Hello from DataContainer</h3>
      <SortComponent modData={props} />
    </Fragment>
  );
};

export default DataContainer;


