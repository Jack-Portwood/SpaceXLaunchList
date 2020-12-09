import React from 'react';
import image1 from "../assets/spacex-logo";
import image2 from "../assets/spacex-logo";

const NavBar = ()=>{ 

    return (
      <header className="navBar">
        <img alt="spaceX logo" className="logo" src={image1} />
        <img alt="refresh" className="refresh" src={image2} />
      </header>
    );

}

export default NavBar;