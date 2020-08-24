import React, { Component, Fragment } from 'react';
import '../App.css';
import {
    Button,
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
    Container,
    NavbarBrand,

} from 'reactstrap';
import { connect } from 'react-redux';
import Logout from './auth/Logout';
import LoginModal from './auth/LoginModal';
import RegisterModal from '../components/auth/registerModal';
class NavBar extends Component {
    state = {
        isOpen: false
    }

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        // pull out from props
        const { isAuthenticated, user } = this.props.auth
        // links for users that are authenticated
        const authLinks = (
            <Fragment>

                <span className="navbar-text mr-3">
                    <strong>{user ? `Welcome ${user.email}` : null}</strong>
                </span>

                <Logout />
            </Fragment>
        )
        // links for guests
        const guestLinks = (
            <Fragment>
                <RegisterModal />
                <LoginModal />
            </Fragment>
        )


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
                                    {isAuthenticated ? authLinks : guestLinks}
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Container>
                </Navbar>
            </div >
        );
    }
}
const mapStateToProps = state => ({
    auth: state.auth
})
export default connect(mapStateToProps, null)(NavBar);
