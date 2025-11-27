import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

const Header = () => {
    return (
        <Navbar expand="lg" className="bg-gray-900 text-white shadow-lg fixed w-full z-50 transition-all duration-300">
            <Container>
                <Navbar.Brand href="#home" className="text-2xl font-bold text-green-400 hover:text-green-300 transition-colors font-mono">
                    &lt;Aneesh_Nagdev /&gt;
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className="bg-gray-800 border-gray-700" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto gap-4 font-mono">
                        <Nav.Link href="#home" className="text-gray-300 hover:text-green-400 transition-colors hover:shadow-[0_0_10px_rgba(34,197,94,0.5)]">Home</Nav.Link>
                        <Nav.Link href="#skills" className="text-gray-300 hover:text-green-400 transition-colors hover:shadow-[0_0_10px_rgba(34,197,94,0.5)]">Skills</Nav.Link>
                        <Nav.Link href="#projects" className="text-gray-300 hover:text-green-400 transition-colors hover:shadow-[0_0_10px_rgba(34,197,94,0.5)]">Projects</Nav.Link>
                        <Nav.Link href="#hackathons" className="text-gray-300 hover:text-green-400 transition-colors hover:shadow-[0_0_10px_rgba(34,197,94,0.5)]">Hackathons</Nav.Link>
                        <Nav.Link href="#contact" className="text-gray-300 hover:text-green-400 transition-colors hover:shadow-[0_0_10px_rgba(34,197,94,0.5)]">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
