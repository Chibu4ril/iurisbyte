import React from "react";
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  Image,
  Container,
  NavDropdown,
} from "react-bootstrap";
import logo1 from "./components/images/logo.png";

function Navbarr() {
  return (
    <>
      <Container>
        <Navbar collapseOnSelect expand="lg">
          <Navbar.Brand href="#home">
            <Image src={logo1} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto  ml-auto">
              <NavDropdown title="LEGAL SERVICES" id="collapsible-nav-dropdown">
                <NavDropdown.Item href="#business">
                  Business Law
                </NavDropdown.Item>
                <NavDropdown.Item href="#criminal">
                  Criminal Law
                </NavDropdown.Item>
                <NavDropdown.Item href="#family">Family Law</NavDropdown.Item>
                <NavDropdown.Item href="#personal">
                  Personal Law
                </NavDropdown.Item>
              </NavDropdown>
              {/* <Nav.Link href="#home">Home</Nav.Link> */}
              <Nav.Link href="#hiw">HOW IT WORKS</Nav.Link>
              <NavDropdown
                title=" COMPANY"
                id="collapsible-nav-dropdown"
                className="mb-2"
              >
                <NavDropdown.Item href="#business">About</NavDropdown.Item>
                <NavDropdown.Item href="#criminal">Blog</NavDropdown.Item>
                <NavDropdown.Item href="#family">Family Law</NavDropdown.Item>
                <NavDropdown.Item href="#personal">Contact</NavDropdown.Item>
              </NavDropdown>
            </Nav>

            <Button variant="outline-success">Post My Services</Button>
            {/* <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        </Form> */}
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </>
  );
}

export default Navbarr;
