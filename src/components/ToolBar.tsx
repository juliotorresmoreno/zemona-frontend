import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar, { NavbarProps } from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import config from '../config';

type ToolBarProps = {

} & NavbarProps;

const ToolBar: React.FC<ToolBarProps> = (props) => {
    return (
        <Navbar bg="light" expand="lg" {...props}>
            <Container>
                <Link className='navbar-brand' to="/">{config.profile}</Link>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Link className="nav-link" to="/account">Account</Link>
                    <a className="nav-link" href="https://github.com/juliotorresmoreno">GitHub</a>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default ToolBar;