import React from 'react';
import { Link } from 'react-router-dom';

export const NavBarView = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <a className="navbar-brand" href="#">tabsProject</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active mr-2">
          <Link to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/about-us">About</Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default NavBarView;
