import React from 'react'
import { Nav, Navbar } from 'react-bootstrap';
import logo from '../logo.svg';
import 'bootstrap/dist/css/bootstrap.css';

export default function Navigation() {
    return (
        <>
            <Navbar bg='dark' variant="dark" sticky='top' expand="md" collapseOnSelect>
                <Navbar.Brand href="/">
                    <img src={logo} width='50px' alt='logo' />
                    Learning
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse>
                    <Nav>
                        <Nav.Link href='product-description'>Product Description</Nav.Link>
                        <Nav.Link href='cold-emails'>Cold Emails</Nav.Link>
                        <Nav.Link href='tweets'>Tweets</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}
