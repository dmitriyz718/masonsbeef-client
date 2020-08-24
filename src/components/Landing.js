import React, { Component } from 'react';
import {
    Card, Button, CardImg, CardTitle, CardText, CardGroup,
    CardSubtitle, CardBody, Container
} from 'reactstrap';
import '../App.css'


class Landing extends Component {
    render() {
        return (
            <Container>
                <CardGroup>
                    <Card className="p-2 m-1 border border-dark">
                        <CardImg top width="100%" src="http://dnyc.dev/masonsbeef/beef1.jpg" alt="brand-logo" />
                        <CardBody>
                            <CardTitle>Why Choose Us</CardTitle>
                            <CardSubtitle>Card subtitle</CardSubtitle>
                            <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                            <Button color="info">Button</Button>
                        </CardBody>
                    </Card>
                    <Card className="p-2 m-1 border border-dark">
                        <CardImg top width="100%" src="http://dnyc.dev/masonsbeef/logo.png" alt="reviews" />
                        <CardBody>
                            <CardTitle>Made with 100% Fresh ingredients!</CardTitle>
                            <CardSubtitle>Card subtitle</CardSubtitle>
                            <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
                            <Button color="info">Button</Button>
                        </CardBody>
                    </Card>
                    <Card className="p-2 m-1 border border-dark">
                        <CardImg top width="100%" src="http://dnyc.dev/masonsbeef/beef1.jpg" alt="beef-jerky-image" />
                        <CardBody>
                            <CardTitle>See what others are saying!</CardTitle>
                            <CardSubtitle>Card subtitle</CardSubtitle>
                            <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
                            <Button color="info">Button</Button>
                        </CardBody>
                    </Card>
                </CardGroup>
            </Container>
        );
    }
};

export default Landing;
