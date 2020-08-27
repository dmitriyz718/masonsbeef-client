import React, { Component, Fragment } from 'react';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    Input,
    FormGroup,
    Label,
} from 'reactstrap';
import { Image } from 'react-bootstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getProduct, updateProduct } from '../../actions/itemActions';

class EditProductModal extends Component {
    state = {
        modal: false,
        name: '',
        description: '',
        creator: '',
        imgUrl: '',
        quantity: 0
    }
    static propTypes = {
        isAuthenticated: PropTypes.bool,
        singleItem: PropTypes.object.isRequired
    }

    toggle = () => {
        this.props.getProduct(this.props.id)
        this.setState({
            modal: !this.state.modal
        });
    }

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }
    onSubmit = e => {
        e.preventDefault();

        const updatedDetails = {
            name: this.state.name,
            description: this.state.description,
            creator: this.state.creator,
            imgUrl: this.state.imgUrl,
            quantity: this.state.quantity,
        }
        this.props.updateProduct(this.props.id, updatedDetails);
        // close modal
        this.toggle();

    }
    render() {

        return (
            <Fragment>
                {this.props.isAuthenticated ? <Button
                    color="dark"
                    style={{ marginBottom: '2rem' }}
                    onClick={this.toggle} className="pl-4"
                >Update Item</Button> : null}
                <Modal isOpen={this.state.modal}
                    toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>Update Product</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.onSubmit}>
                            <FormGroup>
                                <Label for="name"><strong>Flavor:</strong> {this.props.item.name}</Label>

                                <Input type="text" name="name" id="name" placeholder="`name`" onChange={this.onChange}>{this.props.item.name}</Input>

                                <Label for="description"><strong>Description: </strong>{this.props.item.description}</Label>

                                <Input type="textarea" name="description" id="description" placeholder="Description" onChange={this.onChange}>{this.props.item.description}</Input>

                                <Label for="creator"><strong>Crafted by: </strong>{this.props.item.creator}</Label>

                                <Input type="text" name="creator" id="name" placeholder="Who made it?" onChange={this.onChange}>{this.props.item.creator}</Input>

                                <Image src={this.props.item.imgUrl} fluid></Image>
                                <Input type="text" name="imgUrl" id="imgUrl" placeholder="New img url" onChange={this.onChange}>
                                    {this.props.item.imgUrl}
                                </Input>

                                <Label for="quantity"><strong>Quantity left: </strong>{this.props.item.quantity}</Label>

                                <Input type="text" name="quantity" id="quantity" placeholder="How many left?" onChange={this.onChange}>{this.props.item.quantity}</Input>

                                <Button color="dark" style={{ marginTop: '2rem' }} block>Update</Button>


                            </FormGroup>
                        </Form>
                    </ModalBody>
                </Modal>
            </Fragment >
        )
    }
}
const mapStateToProps = state => ({
    item: state.item.singleItem,
    user: state.auth,
    isAuthenticated: state.auth.isAuthenticated
})
export default connect(mapStateToProps, { getProduct, updateProduct })(EditProductModal);
