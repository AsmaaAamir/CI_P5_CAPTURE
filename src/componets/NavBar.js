import React from "react";
import { Navbar, Nav, Container, NavLink} from "react-bootstrap";
import logo from "../../src/assets/new_logo.png";
import styles from "../../src/style/NavBar.module.css";


const NavBar = () => {
    return (
        <Navbar className={styles.NavBar} bg="light" expand="md" fixed="top">
            <Container>
                <NavLink to="/">
                    <Navbar.Brand>
                        <img src={logo} alt="capture logo" height="55"  className={styles.Logo}/> Capture
                   </Navbar.Brand>
                </NavLink>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto text-left">
                <NavLink 
                    to="/home"
                    className={styles.NavLink}
                    activeClassName={styles.Active}>
                        <i class="fas fa-home"></i>    
                        <span>Home</span>
                </NavLink>
                <NavLink 
                    to="/signin"
                    className={styles.NavLink}
                    activeClassName={styles.Active}>
                        <i class="fas fa-sign-in-alt"></i>
                        <span>Sign in</span>
                </NavLink>
                <NavLink 
                    to="/signup"
                    className={styles.NavLink}
                    activeClassName={styles.Active}>
                        <i class="fas fa-user-plus"></i>
                        <span>Sign Up</span>
                </NavLink>
            </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;