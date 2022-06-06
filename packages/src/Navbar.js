import React, { useState, useEffect } from "react";
import {Navbar,Container,Nav} from 'react-bootstrap'

const Navbaritem = () => {
return(
    <>
        <Navbar  bg="light" expand="lg" variant="light">
        <Container>
        <Navbar.Brand >Service-Hub</Navbar.Brand>
        <Nav className="me-auto" >
        <Nav.Link href="#features">Services</Nav.Link>
        <Nav.Link href="#features">Help</Nav.Link>
        <Nav.Link href="/postRequirement">Post your requirenments</Nav.Link>
        <Nav.Link href="/getPostRequirements">Post deatils</Nav.Link>
        </Nav>
        </Container>
        </Navbar>
    </>
)
}

export default Navbaritem;