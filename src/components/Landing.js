import React, { Component } from 'react';
import {
    Jumbotron, Container, Card, Button, CardImg, CardTitle, CardText, CardGroup,
    CardSubtitle, CardBody
} from 'reactstrap';
import '../App.css'


class Landing extends Component {
    render() {
        return (
            /*             <div classname="jumbo">
                            <Jumbotron fluid>
                                <Container fluid>
                                    <h1 className="display-3">Fluid jumbotron</h1>
                                    <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
                                </Container>
                            </Jumbotron>
                        </div> */
            <CardGroup>
                <Card>
                    <CardImg top width="100%" src="http://dnyc.dev/masonsbeef/logo.png" alt="brand-logo" />
                    <CardBody>
                        <CardTitle>Why Choose Us</CardTitle>
                        <CardSubtitle>Card subtitle</CardSubtitle>
                        <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                        <Button>Button</Button>
                    </CardBody>
                </Card>
                <Card>
                    <CardImg top width="100%" src="http://dnyc.dev/masonsbeef/beef1.jpg" alt="reviews" />
                    <CardBody>
                        <CardTitle>See What Others Are Saying!</CardTitle>
                        <CardSubtitle>Card subtitle</CardSubtitle>
                        <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
                        <Button>Button</Button>
                    </CardBody>
                </Card>
                <Card>
                    <CardImg top width="100%" src="http://dnyc.dev/masonsbeef/beef1.jpg" alt="beef-jerky-image" />
                    <CardBody>
                        <CardTitle>Made with 100% Fresh ingredients!</CardTitle>
                        <CardSubtitle>Card subtitle</CardSubtitle>
                        <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
                        <Button>Button</Button>
                    </CardBody>
                </Card>
            </CardGroup>
        );
    }
};

export default Landing;
