import React from 'react';
import { Link } from 'react-router-dom';

export default class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <div className="bounds">
          <h1 className="header--logo">Courses</h1>
          <nav>
            <Link className="signup" to="/signup">Sign Up</Link>
            <Link className="signin" to="/signIn">Sign In</Link>
          </nav>
        </div>
      </div>
    );
  }
};