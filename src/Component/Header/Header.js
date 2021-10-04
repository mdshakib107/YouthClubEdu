import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container className="me-auto">
                    <NavLink to="">
                        <img
                            alt=""
                            src="./img/logo.png"
                            width="33"
                            height="33"
                            className="mx-3 d-inline-block align-top"
                        /></NavLink>
                    <Nav className="me-auto">
                        <Link to="/home"><Nav.Link className="text-white fw-bold fs-5" href="/home">Home</Nav.Link></Link>
                        <Link to="/courses"><Nav.Link className="text-white fw-bold fs-5" href="/courses">Course</Nav.Link></Link>
                        <Link to="/instucters"><Nav.Link className="text-white fw-bold fs-5" href="/instucters">Instuctors</Nav.Link></Link>
                        <Link to="/aboutus"><Nav.Link className="text-white fw-bold fs-5" href="/aboutus">About Us</Nav.Link></Link>

                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;