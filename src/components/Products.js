import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import { getProducts, deleteProduct } from '../actions/itemActions';
import PropTypes from 'prop-types';

class Products extends Component {

    componentDidMount() {
        this.props.getProducts();
    }
    onDeleteClick = (id) => {
        this.props.deleteProduct(id);
    }

    render() {
        const { items } = this.props.item;

        return (
            <Container>

                <ListGroup>
                    <TransitionGroup className="products-list">
                        {items.map(({ _id, name }) => (
                            <CSSTransition key={_id} timeout={500} classNames="fade">
                                <ListGroupItem>
                                    <Button className="remove-btn"
                                        color="danger"
                                        size="sm"
                                        onClick={this.onDeleteClick.bind(this, _id)}>&times;</Button>
                                    {name}
                                </ListGroupItem>
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                </ListGroup>
            </Container>
        )
    }
}
Products.propTypes = {
    getProducts: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired
}
const mapStateToProps = (state) => ({
    item: state.item
});

export default connect(mapStateToProps, { getProducts, deleteProduct })(Products);
