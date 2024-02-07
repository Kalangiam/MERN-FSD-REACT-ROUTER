import React, { Component } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default class NavbarComp extends Component {
  render() {
    return (
      <div>
        <Navbar expand="lg" bg='dark' variant='dark'>
          <Container>
            <Navbar.Brand href="/ml">Router</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/ml/awsml">AWS with ML</Nav.Link>
                <Nav.Link href="/ml/mlforbusines">ML for Business</Nav.Link>
                <Nav.Link href="/fs/asp">ASP.NET</Nav.Link>
                <Nav.Link href="/ai/advancedai">Advanced AI</Nav.Link>
                <Nav.Link href="/ai/tensorflow">TensorFlow</Nav.Link>
              

              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    )
  }
}
