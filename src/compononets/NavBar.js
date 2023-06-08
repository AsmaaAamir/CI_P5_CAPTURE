import React from "react";
import { NavBar, Navbar, Nav} from "react-bootstrap";
import logo from "../src/assets/new_logo";
import styles from "../../src/style/NavBar.module.css";


const NavBar = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">
                <img src={logo} alt="capture logo" height="55" /> Capture</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Sign in </Nav.Link>
                <Nav.Link href="#link">Sign up </Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavBar;