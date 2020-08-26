import React, { Component } from 'react';
import {
    Card, Button, CardImg, CardTitle, CardText, CardGroup,
    CardSubtitle, CardBody, Container
} from 'reactstrap';
import '../App.css'
import Reviews from './reviews/Reviews';

class Landing extends Component {
    render() {
        return (
            <Container>
                <CardGroup>
                    <Card className="p-2 m-1 border border-dark">
                        <CardImg top width="100%" src="http://dnyc.dev/masonsbeef/beef2.jpg" alt="brand-logo" />
                        <CardBody>
                            <CardTitle><strong>Made in Texas</strong></CardTitle>
                            <CardSubtitle>The Lone Star State</CardSubtitle>
                            <CardText>If there is one thing we know in Texas, its our beef. From steaks to Mason's jerky. We only use fine hand selected USDA beef for our products. Everything that we make it made with love and made to bring your taste buds to life. Mason's beef jerky makes for a perfect snack, or a game time addition!</CardText>
                            <Button color="info">Products</Button>
                        </CardBody>
                    </Card>
                    <Card className="p-2 m-1 border border-dark">
                        <CardImg top width="100%" src="http://dnyc.dev/masonsbeef/logo.png" alt="reviews" />
                        <CardBody>
                            <CardTitle><strong>Family Owned, Family Ran</strong></CardTitle>
                            <CardSubtitle>Support small businesses</CardSubtitle>
                            <CardText>When it comes to quality, it often happens that big corporations lose focus of that. We keep quality in mind, both for our product, as well as taking care of our customers. We love hearing about people enjoying our product and waiting for the next batch! That's right, we're good enough that we sometimes run out of stock on some flavors!</CardText>
                            <Button color="info">About Us</Button>
                        </CardBody>
                    </Card>
                    <Card className="p-2 m-1 border border-dark">
                        <CardImg top width="100%" src="http://dnyc.dev/masonsbeef/beef1.jpg" alt="beef-jerky-image" />
                        <CardBody>
                            <CardTitle><strong>Our reviews speak for themselves!</strong></CardTitle>
                            <CardSubtitle>Pleased customers around the United States.</CardSubtitle>
                            <CardText>We don't need to tell you we are great, we let our reviews speak for themselves. We have a following on facebook as well as other social media platforms. Our customers are more than happy to exclaim their delight. Feel free to leave us a review on our site after trying our products!</CardText>
                            <Button color="info">Reviews</Button>
                        </CardBody>
                    </Card>
                </CardGroup>
                <Reviews />
            </Container>

        );
    }
};

export default Landing;
