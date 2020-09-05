import React, { Component } from "react";
import { Alert } from "reactstrap";
import "./about.css";
class About extends Component {
  render() {
    return (
      <div className="aboutDiv">
        <Alert color="info">
          <h4 className="alert-heading">Quality You Can trust</h4>
          <p>
            What started out as just a hobby, turned into allowing me to be a
            stay at home mom to two amazing children. While I started making
            jerky in 2015 it wasn't until my son Mason was born in 2017 that I
            started selling to friends and family. Born with a rare illness;
            Malrotation of the Intestines, Mason required 3 major surgeries and
            a 4 month hospital stay. Now mason is a thriving three year old.
            Masons beef is also thriving three years later, being we only choose
            the finest meats and freshest seasonings so we know we are giving
            our customers the best there is! Every order is custom made and
            vacume sealed so they arrive quick and fresh!
          </p>
          <hr />
          <p className="mb-0">
            Feel free to browse our selection of products, and give us a try!
            You wont regret it!
          </p>
        </Alert>
      </div>
    );
  }
}
export default About;
