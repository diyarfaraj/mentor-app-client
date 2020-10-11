import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import NavItem from "react-bootstrap/NavItem";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

import NavDropdown from "react-bootstrap/NavDropdown";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import LoginPage from "./loginPage";
import HomePage from "../home/homePage";

const MianNavbar = () => {
  return (
    <div>
      <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand as={Link} to="/">
              Mentor App
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                <NavItem eventkey={1} href="/">
                  <Nav.Link as={Link} to="/homePage">
                    Home
                  </Nav.Link>
                </NavItem>
                <NavItem eventkey={2} href="/loginPage">
                  <Nav.Link as={Link} to="/loginPage">
                    Login
                  </Nav.Link>
                </NavItem>
                <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Something
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
              {/*    <Form inline>
                <FormControl
                  type="text"
                  placeholder="Search"
                  className="mr-sm-2"
                />
                <Button variant="outline-success">Search</Button>
              </Form> */}
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      <div>
        <Switch>
          <Route exact path="/loginPage" component={LoginPage} />
          <Route exact path="/homePage" component={HomePage} />

          <Route
            render={function () {
              return <p>Not found</p>;
            }}
          />
        </Switch>
      </div>
    </div>
  );
};

export default MianNavbar;
