import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <div className="App">
    <main className="App-header">
      <h1>404</h1>
      <p>
        Page not found. Back to <Link to="/">home</Link>
      </p>
    </main>
  </div>
);

export default NotFound;
