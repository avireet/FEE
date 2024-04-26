import React from 'react';
import './styles.css'; // Import corresponding CSS file

const Navbar = () => {
  return (
    <div className="page1">
      <div id="navbar">
        <a id="logo" href="#" style={{marginLeft: '10px'}}>Learnera</a>
        <a href="edu.html" style={{marginLeft: '500px'}}>Home</a>
        <a href="edupack.html">Packages</a>
        <a href="contact.html" style={{marginRight: '450px', border: '10px'}}>Contact</a>
        <a id="signin" href="signin.html">Sign In</a>
      </div>
    </div>
  );
}

export default Navbar;

