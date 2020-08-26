import React, { Component } from 'react';
import {
    Card, CardImg, CardTitle,
    CardText, CardGroup,
    CardSubtitle, CardBody,
    Container, Button, Row
} from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import { getProducts, deleteProduct } from '../../actions/itemActions';
import PropTypes from 'prop-types';
import ItemModel from '../itemModal';
import ProductModal from './ProductModal';


class Products extends Component {
    static propTypes = {
        getItems: PropTypes.func.isRequired,
        item: PropTypes.object.isRequired,
        isAuthenticated: PropTypes.bool
    }
    componentDidMount() {
        this.props.getProducts();
    }
    onDeleteClick = (id) => {
        this.props.deleteProduct(id);
    }
    onViewClick = (id) => {

    }

    render() {
        const { items } = this.props.item;

        return (
            <main>
                <Container className="container-fluid g-info clearfix">
                    <ItemModel />
                    <CardGroup className="col-auto - variable width content">
                        <TransitionGroup className="products-list">
                            <Row xs="1" sm="2" md="4">
                                {
                                    items.map(({ _id, name, description, imgUrl, quantity }) => (
                                        <CSSTransition key={_id} timeout={500} classNames="fade">
                                            <Card className=".col-4 m-1 p-2 border border-dark">
                                                <CardImg top width="100%" src={imgUrl} alt="reviews" />
                                                <CardBody>
                                                    <CardTitle><strong>{name}</strong></CardTitle>
                                                    <CardSubtitle><strong>Quantity remaining:</strong> {quantity}</CardSubtitle>
                                                    <CardText>{description}</CardText>
                                                    <ProductModal id={_id} />
                                                    {this.props.isAuthenticated ? <Button className="btn btn-danger btn-circle btn-sm float-right"
                                                        color="danger"
                                                        onClick={this.onDeleteClick.bind(this, _id)}>&times;</Button> : null}
                                                </CardBody>
                                            </Card>
                                        </CSSTransition>
                                    ))
                                }
                            </Row>
                        </TransitionGroup >
                    </CardGroup >
                </Container >
            </main>
        )
    }
}
const mapStateToProps = (state) => ({
    item: state.item,
    user: state.auth,
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { getProducts, deleteProduct })(Products);
