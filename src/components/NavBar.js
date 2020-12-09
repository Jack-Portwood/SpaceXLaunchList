import React from 'react';
import image1 from '../assets/spacex-logo.png'

const NavBar = () => { 

    return (
      <header className="navBar">
        <img alt="spaceX logo" className="logo" src={image1} />
        <p className="logoText">Launches</p>
      </header>
    );

}

export default NavBar;