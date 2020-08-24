import React, { Component, Fragment } from 'react';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input,
    Alert
} from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../actions/authActions';
import { clearErrors } from '../../actions/errorActions';
class LoginModal extends Component {
    state = {
        modal: false,
        email: '',
        password: '',
        msg: null
    }
    static propTypes = {
        isAuthenticated: PropTypes.bool,
        error: PropTypes.object.isRequired,
        login: PropTypes.func.isRequired,
        clearErrors: PropTypes.func.isRequired
    }
    componentDidUpdate(prevProps) {
        const { error, isAuthenticated } = this.props;
        if (error !== prevProps.error) {
            // check for register errir
            if (error.id === 'LOGIN_FAIL') {
                this.setState({ msg: error.msg.msg });
            } else {
                this.setState({ msg: null })
            }
        }

        // if authenticated close modal
        if (this.state.modal) {
            if (isAuthenticated) {
                this.toggle();
            }
        }
    }
    toggle = () => {
        // clear errors
        this.props.clearErrors();
        this.setState({
            modal: !this.state.modal
        });
    }
    onChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }
    onSubmit = e => {
        e.preventDefault();
        const { email, password } = this.state;

        const user = {
            email,
            password
        };
        //attemp to log in
        this.props.login(user);


    }
    render() {
        return (
            <Fragment>
                <Button onClick={this.toggle} href="#" className="nav-btn" outline color="info" style={{ margin: '1rem' }}>Log In</Button>
                <Modal isOpen={this.state.modal}
                    toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>Log In</ModalHeader>
                    <ModalBody>
                        {/*CHECK FOR ERRPRS*/}
                        {this.state.msg ? (<Alert color="danger">{this.state.msg}</Alert>) : null}
                        <Form onSubmit={this.onSubmit}>
                            <FormGroup>
                                <Label for="email">email</Label>
                                <Input type="email" name="email" id="email" placeholder="email" onChange={this.onChange} className="mb-3" />
                                <Label for="password">Password</Label>
                                <Input type="password" name="password" id="password" placeholder="Password" onChange={this.onChange} className="mb-3" />

                                <Button color="dark" style={{ marginTop: '2rem' }} block>Log In</Button>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                </Modal>
            </Fragment>
        )
    }
}
const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    error: state.error
})
export default connect(mapStateToProps, { login, clearErrors })(LoginModal);
