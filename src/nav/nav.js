import React, { Component } from 'react';
import './nav.css'; // Import the CSS file

class Nav extends Component {
  render() {
    return (
      <div className="about-me">
      <div className="left">
        <h2>About Me</h2>
      </div>
      <div className="right">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          venenatis dui sit amet vehicula. Sed sagittis libero non nisi lacinia,
          a ullamcorper quam interdum. Nullam non mauris a ex sodales
          sollicitudin.
        </p>
        <button className="download-button">
          Download Resume
        </button>
      </div>
    </div>
    );
  }
}

export default Nav;
