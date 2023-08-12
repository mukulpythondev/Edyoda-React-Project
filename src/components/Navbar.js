import React from 'react';
import './styles.css'
import dropdown from  './dropdown.svg' 
import search from './search.svg'
function Navbar() {
  return (
    <nav className="navbar">
       <div className="left">
        <h1>EDYODA</h1>
        <h3>Courses</h3> <img src={dropdown} alt="" />
        <h3>Programs</h3> <img src={dropdown} alt="" />
       </div>
       <div className='right'>
        <img src={search} alt="" />
        <h3>Login</h3>
        <button> Join Now </button>
       </div>
    </nav>
  );
}

export default Navbar;
