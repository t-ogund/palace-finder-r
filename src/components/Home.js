import React from "react";
import {
    Container, Col, Row, Navbar, NavbarBrand, 
    NavbarToggler, Collapse, NavItem, NavLink,
    Nav
  } from 'reactstrap';

  function Home() {
      return (
          <React.Fragment>
              <Container>
                <Navbar className="bg-light">
                    <Nav>
                        <NavItem>
                            <NavLink>
                                Buy
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink>
                                Rent
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink>
                                Sell
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Navbar>
              </Container>
          </React.Fragment>
      )
  }

export default Home;