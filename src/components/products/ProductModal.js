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
import { getProduct } from '../../actions/itemActions';

class ProductModal extends Component {
    state = {
        modal: false,
        name: '',
        description: '',
        creator: '',
        imgUrl: '',
        quantity: 0
    }
    componentDidMount() {
        this.props.getProduct(this.props.id)
    }
    static propTypes = {
        isAuthenticated: PropTypes.bool
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

        // add item via additem action

        // close modal
        this.toggle();

    }
    render() {
        const { items } = this.props.item
        return (
            <Fragment>
                {this.props.isAuthenticated ? <Button
                    color="dark"
                    style={{ marginBottom: '2rem' }}
                    onClick={this.toggle}
                >Add Item</Button> : <h4 className="mb-3 ml-4">Please enjoy our variety of delicious products.</h4>}
                <Modal isOpen={this.state.modal}
                    toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>Add Products</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.onSubmit}>
                            <FormGroup>
                                <Label for="name">{items.name}</Label>
                                <Input type="text" name="name" id="name" placeholder="Product Name" onChange={this.onChange} />
                                <Label for="description">Description</Label>
                                <Input type="textarea" name="description" id="item" placeholder="description" onChange={this.onChange} />
                                <Label for="creator">Creator</Label>
                                <Input type="text" name="creator" id="creator" placeholder="Jenn Gill" onChange={this.onChange} />
                                <Label for="imgUrl">Link to Image</Label>
                                <Input type="text" name="imgUrl" id="imgUrl" placeholder="Add Item" onChange={this.onChange} />
                                <Label for="quantity">Quantity Available</Label>
                                <Input type="number" name="quantity" id="quantity" placeholder="Quantity Available" onChange={this.onChange} />
                                <Button color="dark" style={{ marginTop: '2rem' }} block>View Product</Button>


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
    user: state.auth,
    isAuthenticated: state.auth.isAuthenticated
})
export default connect(mapStateToProps, { getProduct })(ProductModal);
