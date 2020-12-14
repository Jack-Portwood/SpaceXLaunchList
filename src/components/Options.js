import React,{Fragment} from 'react'

const Options = ({item}) =>{ 
          console.log(item +" optionsdata");

      return (
        <Fragment>
          <option>{item}</option>
        </Fragment>
      );
    };



 export default Options;
