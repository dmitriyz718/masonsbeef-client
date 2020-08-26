import React, { Component, Fragment } from 'react';
import { Alert } from 'reactstrap';

class Reviews extends Component {
    render() {
        return (
            <Fragment>

                <Alert color="success">
                    <h4 className="alert-heading">"Perfectly prepared"</h4>
                    <p>
                        I give Mason’s beef a 10! Not only was the Jerky perfectly prepared, it made everyone that tried it wanting more.  My kid couldn’t keep her hand out of the bag. The service was impeccable as well.  The owner is kind and very responsive.  They make to order with a super fast turn around time! I will be a customer for life.
                     </p>
                    <hr />
                    <p className="mb-0">
                        Britanee - Channelview, TX
                     </p>
                </Alert>
                <Alert color="success">
                    <h4 className="alert-heading">"Best jerky ever"</h4>
                    <p>
                        My husband introduced me to Jenn and her Jerky business. It is hands down some of the best jerky ever. The guys at my husbands job loved it so much they would send us often to pick up bags for them. Not only are we hooked, but we’re also so glad to be able to support a local small business mama.
                    </p>
                    <hr />
                    <p className="mb-0">
                        Megan - Baytown, TX
                        </p>
                </Alert>
                <Alert color="success">
                    <h4 className="alert-heading">"Get more for your money"</h4>
                    <p>
                        By far my favorite jerky. The inferno and jalapeño are my favorite. Get more for your money. Jenn is an absolute doll to deal with and oh that cute little boy Mason is just adorable. Much rather pay for Masons beef a small business than go anywhere else. Price, hospitality and delicious all things we look for in a business!
                        </p>
                    <hr />
                    <p className="mb-0">
                        Alyssa - NJ
                        </p>
                </Alert>
            </Fragment>
        );
    };
}

export default Reviews;
