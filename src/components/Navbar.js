import React, { Component } from 'react';
import '../App.css';
import {
    Button,
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
    NavLink,
    Container,
    NavbarBrand
} from 'reactstrap';

class AppNavBar extends Component {
    state = {
        isOpen: false
    }

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <div>
                <Navbar color="light" light expand="sm" className="mb-5">
                    <Container>
                        <NavbarBrand href="/">
                            <img src="http://dnyc.dev/masonsbeef/logo.png" style={{ width: '20vw', marginTop: -7 }} className="nav-logo" left />
                        </NavbarBrand>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                <NavItem position="right">
                                    <Button href="https://wwww.google.com" className="nav-btn" outline color="secondary" style={{ margin: '1rem' }}>About us</Button>
                                    <Button href="https://wwww.google.com" className="nav-btn" outline color="secondary" style={{ margin: '1rem' }}>Our Products</Button>
                                    <Button href="https://wwww.google.com" className="nav-btn" outline color="secondary" style={{ margin: '1rem' }}>FAQ</Button>
                                    <Button href="https://wwww.google.com" className="nav-btn" outline color="secondary" style={{ margin: '1rem' }}>Cart</Button>
                                    <Button href="https://wwww.google.com" className="nav-btn" outline color="secondary" style={{ margin: '1rem' }}>Log In</Button>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Container>
                </Navbar>
            </div>
        );
    }
}
export default AppNavBar;
