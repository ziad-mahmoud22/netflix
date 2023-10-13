import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";

export default class N extends React.Component {
  render() {
    return (
      <>
        <Navbar bg="primary" expand="lg" variant="dark">
          <Container>
            <Navbar.Brand href="#home">Movie App</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <NavLink className="nav-link" to="/Tv">
                  Tv
                </NavLink>
                <NavLink className="nav-link" to="/Join">
                  JoinUs
                </NavLink>
                <NavLink className="nav-link" to="/Join/login">
                  Login
                </NavLink>
                <NavLink className="nav-link" to="/Join/signup">
                  Signup
                </NavLink>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    );
  }
}
