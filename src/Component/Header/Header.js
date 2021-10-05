import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className="">
            <Navbar bg="dark" variant="dark" >
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
                        <Link className="text-white fw-bold fs-5  text-decoration-none p-2" to="/home">
                            Home
                        </Link>
                        <Link className="text-decoration-none text-white fw-bold fs-5 p-2 " to="/courses">
                            Course
                        </Link>
                        <Link className="text-white fw-bold fs-5  text-decoration-none p-2" to="/instucters">
                            Instuctors
                        </Link>
                        <Link className="text-decoration-none text-white fw-bold fs-5 p-2" to="/aboutus">
                            About Us
                        </Link>

                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;