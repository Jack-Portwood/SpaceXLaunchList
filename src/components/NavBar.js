import React from 'react';
import image1 from '../assets/spacex-logo.png'
import image2 from "../assets/icon/refresh.png";

const NavBar = () => { 

    return (
      <header className="navBar">
        <img alt="spaceX logo" className="logo" src={image1} />
        <p className="logoText">Launches</p>
        <img atl="refresh button" className="refresh" src={image2}/>
      </header>
    );

}

export default NavBar;