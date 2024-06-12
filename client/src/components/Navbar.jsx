import "./Navbar.css";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Button } from "react-bootstrap";

function BrandExample() {
  return (
    <>
      <Navbar className="navbar-color ">
        <Nav className="ml-auto">
          <Nav.Item>
            <Nav.Link className="user-login user-login-font px-3">
              Log In
            </Nav.Link>
          </Nav.Item>
        </Nav>
        <Container className="d-flex justify-content-between align-items-center">
          <Navbar.Brand href="/home" className="center-content">
            <img
              alt=""
              src="/src/assets/logo.svg"
              width="55"
              height="55"
              className="d-inline-block align-top"
            />
            <h1 className="d-inline-block align-top logo-font">Slapscored</h1>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default BrandExample;
