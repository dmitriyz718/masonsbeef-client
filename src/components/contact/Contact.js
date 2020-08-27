import React, { Component, Fragment } from 'react';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input
} from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { sendEmail } from '../../actions/itemActions';

class Contact extends Component {
    state = {
        modal: false,
        name: '',
        email: '',
        subject: '',
        message: '',
    }
    static propTypes = {
        isAuthenticated: PropTypes.bool,
        item: PropTypes.object.isRequired
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    }

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }
    onSubmit = e => {
        e.preventDefault();
        const emailData = {
            name: this.state.name,
            subject: this.state.subject,
            email: this.state.email,
            message: this.state.message,
        }

        this.props.sendEmail(emailData);

        this.toggle();

    }
    render() {
        return (
            <Fragment>
                <Button
                    className="nav-btn" outline color="info" onClick={this.toggle} style={{ margin: '1rem' }}>Contact Us</Button>
                <Modal isOpen={this.state.modal}
                    toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>Contact Us</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.onSubmit}>
                            <FormGroup>
                                <Label for="name">Name</Label>
                                <Input type="text" name="name" id="name" placeholder="Product Name" onChange={this.onChange} />
                                <Label for="creator">Email</Label>
                                <Input type="email" name="email" id="email" placeholder="your@email.com" onChange={this.onChange} />
                                <Label for="subject">Email</Label>
                                <Input type="text" name="subject" id="email" placeholder="Subject" onChange={this.onChange} />
                                <Label for="message">Message</Label>
                                <Input type="textarea" name="message" id="item" placeholder="message" onChange={this.onChange} />
                                <Button color="dark" style={{ marginTop: '2rem' }} block>Send Email</Button>


                            </FormGroup>
                        </Form>
                    </ModalBody>
                </Modal>
            </Fragment>
        )
    }
}
const mapStateToProps = state => ({
    item: state.item,
    isAuthenticated: state.auth.isAuthenticated
})
export default connect(mapStateToProps, { sendEmail })(Contact);
