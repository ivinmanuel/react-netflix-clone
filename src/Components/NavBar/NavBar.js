import React from 'react';
import { FaSearch, FaBell, FaSignOutAlt } from 'react-icons/fa';
import './NavBar.css';

function NavBar() {
  return (
    <div className='navbar'>
      <img
        className='logo'
        src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png'
        alt='Netflix logo'
      />
      
      <div className='nav'>
        <h3>Home</h3>
        <h3>TV Shows</h3>
        <h3>Movies</h3>
      </div>

      <div className='search-container'>
        <input
          className='search-bar'
          type='text'
          placeholder='Search...'
        />
        <FaSearch className='search-icon' />
      </div>

      <div className='right-icons'>
        <FaBell className='notification-icon' />
        <FaSignOutAlt className='logout-icon' />
        <img
          className='avatar'
          src='https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png'
          alt='Avatar logo'
        />
      </div>
    </div>
  );
}

export default NavBar;
