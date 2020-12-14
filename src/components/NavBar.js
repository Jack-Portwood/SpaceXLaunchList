import React from 'react';
import image1 from '../assets/spacex-logo.png'
import image2 from '../assets/icon/refresh.png'

const NavBar = () => { 

    return (
      <header className="navBar">
        <div className="logoText-con">
        <img alt="spaceX logo" className="logo" src={image1} />
        <p className="logoText">Launches</p>
        </div>
        {/* <button classname="refresh-btn">Refresh</button> */}
      </header>
    );

}

export default NavBar;