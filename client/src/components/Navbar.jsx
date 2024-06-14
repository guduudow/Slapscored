import "./Navbar.css";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function BrandExample() {
  return (
    <>
      {/* <div className="login-container">
        <Nav.Item>
          <Nav.Link className="user-login user-login-font px-3">
            Log In
          </Nav.Link>
        </Nav.Item>
      </div> */}
      <Navbar className="navbar-color">
        <Container className="d-flex justify-content-between align-items-center navbar-padding">
          <Navbar.Brand href="/home" className="center-content">
            <img
              alt=""
              src="/src/assets/logo.svg"
              width="55"
              height="55"
              className="d-inline-block align-top"
            />
            <h1 className="d-inline-block align-top logo-font">Slapscored</h1>
            <Nav className="pt-auto">
              <div className="login-container">
                <Nav.Item>
                  <Link className="px-3" to="/login">
                    <Button
                      type="button"
                      className="user-login user-login-font"
                    >
                      Log In
                    </Button>
                  </Link>
                </Nav.Item>
              </div>
            </Nav>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default BrandExample;
