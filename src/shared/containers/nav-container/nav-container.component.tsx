import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const NavContainerComponent = () =>
    <Navbar bg='dark' variant='dark' sticky='top'>
        <Nav>
            <Nav.Link as={Link} to='/goods'>Goods</Nav.Link>
            <Nav.Link as={Link} to='/cart'>Cart</Nav.Link>
        </Nav>
    </Navbar>
;
