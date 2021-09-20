import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <div>
          <Link to="/" className="navbar-brand navbar-font-size">Gestión de fuentes</Link>
        </div>
      </nav>
    );
  }
}

export default Navbar;