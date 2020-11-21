import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const NavContainerComponent = () =>
    <Nav as='ul'>
        <Nav.Item as='li'>
            <Nav.Link as={Link} to='/goods'>Goods</Nav.Link>
        </Nav.Item>
        <Nav.Item as='li'>
            <Nav.Link as={Link} to='/cart'>Cart</Nav.Link>
        </Nav.Item>
    </Nav>
;
