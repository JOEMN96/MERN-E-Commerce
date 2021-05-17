import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "react-bootstrap";
import { signOut } from "../actions/auth.actions";

function Header() {
  const isAuthenticated = useSelector((state) => state.auth.authenticated);
  const dispatch = useDispatch();

  const logOut = () => {
    dispatch(signOut());
  };

  if (isAuthenticated) {
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
          <Button onClick={logOut} variant="light" size="sm">
            LogOut
          </Button>
        </Nav>
      </Navbar>
    );
  }

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
