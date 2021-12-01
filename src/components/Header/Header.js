import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div>
            <>
                <Navbar className="nav-container" bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg">
                    <Container>
                        <Navbar.Brand href="#home">Rezwanur Rakib Chy</Navbar.Brand>
                        <Navbar.Toggle />
                        <Navbar.Collapse className="justify-content-end">
                            <Nav.Link activeStyle={{ color: "white", textDecoration: "overline" }} className="main-nav" as={NavLink} to="/home">Home</Nav.Link>
                            <Nav.Link activeStyle={{ color: "white", textDecoration: "overline" }} className="main-nav" as={NavLink} to="/about">About</Nav.Link>
                            <Nav.Link activeStyle={{ color: "white", textDecoration: "overline" }} className="main-nav" as={NavLink} to="/contact">Contact</Nav.Link>
                            <a target="_blank" rel="noreferrer" className="btn btn-outline-info" href="https://drive.google.com/file/d/1Bj5lP8pf-SmNYj5Q_wxbeHvG91n7eHHE/view?usp=sharing">RESUME</a>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </>
        </div>
    );
};

export default Header;