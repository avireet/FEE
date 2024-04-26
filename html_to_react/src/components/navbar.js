import React from 'react';
import {Link} from 'react-router-dom';

import './styles.css'; // Import corresponding CSS file

const Navbar = () => {
  return (
    <div className="page1">
      <div id="navbar">
        <a id="logo" href="#" style={{marginLeft: '10px'}}>Learnera</a>
        <Link to="/home" style={{marginLeft: '500px'}}>Home</Link>
        <Link to="/packages" >Packages</Link>
        <Link to="/contact">Contact</Link>

        <Link to="/signin" id="signin" >Sign In</Link>
      </div>
    </div>
  );
}

export default Navbar;
