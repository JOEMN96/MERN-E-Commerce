import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Navbar bg="dark" variant="dark">
      <Link to="/" className="navbar-brand">
        Admin Panel
      </Link>
      <Nav className="mr-auto">
        {/* <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link> */}
      </Nav>
      <Nav className="Links">
        <Link to="/signIn">SignIn</Link>
        <Link to="/signUp">SignUp</Link>
      </Nav>
    </Navbar>
  );
}

export default Header;
