import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

function Navigation() {
  return (
    <Navbar bg="dark" expand="lg">
      {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        {/* <Nav className="mr-auto"> */}
        {/* <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#link">Link</Nav.Link> */}
        <NavLink className="d-inline p-2 bg-dark text-white" to="/">
          Home
        </NavLink>
        <NavLink className="d-inline p-2 bg-dark text-white" to="/quiz">
          Quiz
        </NavLink>
        <NavLink className="d-inline p-2 bg-dark text-white" to="/stats">
          Stats
        </NavLink>

        {/* </Nav> */}
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;
