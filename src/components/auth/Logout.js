import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux';
import { logout } from '../../actions/authActions';
import { Button } from 'reactstrap';
import PropTypes from 'prop-types';

export class Logout extends Component {
    static propTypes = {
        logout: PropTypes.func.isRequired
    }
    render() {
        return (
            <Fragment>
                <Button onClick={this.props.logout} href="#" className="nav-btn" outline color="info" style={{ margin: '1rem' }}>Log Out</Button>
            </Fragment>
        )
    }
}

export default connect(null, { logout })(Logout)
