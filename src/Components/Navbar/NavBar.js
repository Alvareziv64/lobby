import * as React from 'react';
import "./NavBar.css"
import logo from "../../img/logo.png"
import home from "../../img/home.png"
import discover from "../../img/discover.png"
import share from "../../img/share.png"
import alert from "../../img/alert.png"
import profile from "../../img/profile.png"
import search from "../../img/search.png"
import messages from "../../img/messages.png"

const NavBar = () => {

  return (
<div className='navbar'>
    <div className='navbar-module-logo'><img src={logo} alt="logo" /></div>
    <div className='navbar-module-sections'>
        <div className="navbar-module-section-icon"><img src={home} alt="logo" width="25px"/>Home</div>
        <div className="navbar-module-section-icon"><img src={discover} alt="logo" width="25px"/>Discover</div>
        <div className="navbar-module-section-icon"><img src={share} alt="logo" width="25px"/>Share</div>
        <div className="navbar-module-section-icon"><img src={alert} alt="logo" width="25px" />Alerts</div>
        <div className="navbar-module-section-icon"><img src={profile} alt="logo" width="25px" />Profile</div>
    </div>
    <div className='navbar-module-aux'>
        <div className='navbar-module-aux-search'> <img src={search} alt="logo" width="25px" /></div>
        <div><img src={messages} alt="logo" width="25px"/></div>
    </div>
</div>
  )
}

export default NavBar







