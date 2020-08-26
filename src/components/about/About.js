import React, { Component } from 'react'
import { Alert } from 'reactstrap';
import './about.css'
class About extends Component {
    render() {
        return (
            <div className="aboutDiv">
                <Alert color="info">
                    <h4 className="alert-heading">"Get more for your money"</h4>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda ipsum perferendis esse nobis est libero eum perspiciatis sit maxime mollitia nam impedit unde eligendi rerum magni amet, repellat nisi molestiae.
                        Veniam culpa officiis praesentium dolore modi pariatur, nesciunt facilis autem itaque minima nostrum ipsa explicabo ratione optio, maiores expedita deserunt accusantium ipsum, cumque enim in cum voluptatum? Exercitationem, fugiat nam.
                        Corporis sit voluptatum explicabo, provident id nihil similique impedit, tempore atque officia cum autem quia obcaecati assumenda laudantium, totam facilis enim. Maxime, magni dignissimos sit iure odit quos. Iste, commodi.
                        Rerum voluptate tempora minus possimus dolorem ipsam sequi quam cupiditate nisi? Delectus, ab mollitia? Tenetur ut assumenda veritatis atque unde odio, repellat, itaque ad esse tempora dolorum. Repellendus, eveniet nostrum?
                        Tenetur perferendis fugit modi illum dolor blanditiis nam maiores voluptates magni consequuntur optio, aperiam nemo fugiat quasi quaerat exercitationem perspiciatis officiis officia, eaque eum ducimus odio rerum sit reprehenderit? Fuga!
                        Eligendi rerum doloribus architecto ipsa? Distinctio nemo atque placeat quae dolorum maxime beatae reprehenderit minima velit molestias, delectus nisi veritatis rem fugit nihil dolore id quis ea voluptates hic expedita?
                        </p>
                    <hr />
                    <p className="mb-0">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae quibusdam fuga id nobis voluptas placeat dolor minus nemo obcaecati eos, quaerat maxime ipsam maiores quia delectus ipsum. Totam, architecto harum!
                        </p>
                </Alert>
            </div>
        )
    }
}
export default About;
