import React from 'react';
import './Shared.css';

const Header = () => {
  return (
    <header>
      <div className="logo">Telecom Inventory</div>
      <div className="user-info">
        <p id="user-name">Hi, John Doe</p>
      </div>
      <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Add</a></li>
          <li><a href="#">Edit</a></li>
          <li><a href="#">Delete</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
