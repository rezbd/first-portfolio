import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <>
                <Navbar bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg">
                    <Container>
                        <Navbar.Brand href="#home">Rezwanur Rakib Chy</Navbar.Brand>
                        <Navbar.Toggle />
                        <Navbar.Collapse className="justify-content-end">
                            <Nav.Link className="text-light" as={Link} to="/home">Home</Nav.Link>
                            <Nav.Link className="text-light" as={Link} to="/explore">Explore</Nav.Link>
                            <Nav.Link className="text-light" as={Link} to="/dashboard">Dashboard</Nav.Link>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </>
        </div>
    );
};

export default Header;