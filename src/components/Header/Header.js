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
                            <a target="_blank" rel="noreferrer" className="btn btn-outline-info" href="https://drive.google.com/file/d/1Bj5lP8pf-SmNYj5Q_wxbeHvG91n7eHHE/view?usp=sharing">RESUME</a>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </>
        </div>
    );
};

export default Header;