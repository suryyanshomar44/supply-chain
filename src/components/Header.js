import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header className="header-navigation">
    <div className="header-title">
      <h1>Supply Chain Visualizer</h1>
    </div>
    <nav className="navigation">
      <ul className="nav-list">
        <li className="nav-item">
          <NavLink to="/" exact className="nav-link" activeClassName="active">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/products" className="nav-link" activeClassName="active">Products</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/suppliers" className="nav-link" activeClassName="active">Suppliers</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/shipments" className="nav-link" activeClassName="active">Shipments</NavLink>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
