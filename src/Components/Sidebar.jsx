import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";
export default function Sidebar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
      <Container>
        <NavLink className="navbar-brand" to="/">
          React User
        </NavLink>
        <Navbar.Toggle
          className="navbar_Collapse"
          aria-controls="responsive-navbar-nav"
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <NavLink
              activeClassName="hoverEffect"
              className="nav-link"
              to="/about"
            >
              About
            </NavLink>
            <Link className="nav-link btn btn-dark add_user" to="/user/add">
              Add User
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
