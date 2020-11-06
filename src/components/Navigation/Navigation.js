import React from 'react';
import { Link } from 'react-router-dom';

import './Navigation.css';
import { routes } from '../../router/routes';

const Navigation = () => (
  <nav className="Top-navigation">
    <ul>
      <li>
        <Link to={routes.home}>Home</Link>
      </li>
      <li>
        <Link to={routes.about}>About</Link>
      </li>
    </ul>
  </nav>
);

export default Navigation;
