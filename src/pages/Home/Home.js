import React from 'react';

import logo from '../../logo.svg';
import './Home.css';
import Counter from '../../components/Counter/Counter';

const Home = () => (
  <div className="Home">
    <header className="Home-header">
      <img src={logo} className="Home-logo" alt="logo" />
      <Counter />
      <p>
        Edit <code>src/Home.js</code> and save to reload.
      </p>
      <span>
        <span>Learn </span>
        <a
          className="Home-link"
          href="https://reactjs.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          React
        </a>
        <span>, </span>
        <a
          className="Home-link"
          href="https://redux.js.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Redux
        </a>
        <span>, </span>
        <a
          className="Home-link"
          href="https://redux-toolkit.js.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Redux Toolkit
        </a>
        ,<span> and </span>
        <a
          className="Home-link"
          href="https://react-redux.js.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          React Redux
        </a>
      </span>
    </header>
  </div>
);

export default Home;
