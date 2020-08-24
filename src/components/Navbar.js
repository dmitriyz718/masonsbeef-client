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
    NavbarBrand,

} from 'reactstrap';
import { Image } from 'react-bootstrap';
import RegisterModal from '../components/auth/registerModal';
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

                <Navbar color="dark" dark expand="sm" className="mb-5" sticky="top">
                    <Container>

                        <NavbarBrand href="/" className="brand-text" style={{ color: '#fff', fontSize: '40px', fontWeight: 'bolder' }}>
                            MASONS BEEF
                        </NavbarBrand>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                <NavItem position="right">
                                    <Button href="https://wwww.google.com" className="nav-btn" outline color="info" style={{ margin: '1rem' }}>About us</Button>
                                    <Button href="https://wwww.google.com" className="nav-btn" outline color="info" style={{ margin: '1rem' }}>Our Products</Button>
                                    <Button href="https://wwww.google.com" className="nav-btn" outline color="info" style={{ margin: '1rem' }}>FAQ</Button>
                                    <Button href="https://wwww.google.com" className="nav-btn" outline color="info" style={{ margin: '1rem' }}>Cart</Button>
                                    <RegisterModal />
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Container>
                </Navbar>
            </div >
        );
    }
}
export default AppNavBar;
