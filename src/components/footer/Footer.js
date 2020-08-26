import React, { Component } from 'react'
import './Footer.css';
export class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div><a href="#" class="fa fa-facebook mr-3 mt-3"></a>
                    <a href="#" class="fa fa-twitter mb-1 mt-3"></a>
                </div>
                <p> &copy;Mason's Beef, Site by <a href="http://dnyc.dev">Dmitriy Z.</a></p>
            </div>
        )
    }
}

export default Footer
