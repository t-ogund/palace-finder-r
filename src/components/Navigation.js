import React from "react";
import {
    Container, Navbar, NavbarBrand, NavItem, NavLink,
    Nav
  } from 'reactstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChessRook } from '@fortawesome/free-solid-svg-icons'



  function Navigation() {
      return (
          <React.Fragment>
              <Container>
                <Navbar className="bg-white fixed-top">
                    <Nav>
                        <NavbarBrand href="https://t-ogund.github.io/palace-finder-r/">PalaceFinder <FontAwesomeIcon icon={faChessRook}></FontAwesomeIcon></NavbarBrand>
                        <NavItem>
                            <NavLink tag={Link} to="/buy">
                                Buy
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to="/rent">
                                Rent
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Navbar>
              </Container>
          </React.Fragment>
      )
  }

export default Navigation;