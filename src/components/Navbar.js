import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
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
                        <Link to="/">
                            <NavbarBrand className="brand-text" style={{ color: '#fff', fontSize: '40px', fontWeight: 'bolder' }}>
                                <NavLink className="brand-text" style={{ color: '#fff', fontSize: '40px', fontWeight: 'bolder' }}>MASONS BEEF</NavLink>

                            </NavbarBrand></Link>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                <NavItem position="right">
                                    <Link to="/about"><Button className="nav-btn" outline color="info" style={{ margin: '1rem' }}>About us</Button></Link>
                                    <Link to="/products"><Button className="nav-btn" outline color="info" style={{ margin: '1rem' }}>Our Products</Button></Link>
                                    <Link to="/faq"><Button className="nav-btn" outline color="info" style={{ margin: '1rem' }}>FAQ</Button></Link>
                                    <Link to="/cart"><Button className="nav-btn" outline color="info" style={{ margin: '1rem' }}>Cart</Button></Link>
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
