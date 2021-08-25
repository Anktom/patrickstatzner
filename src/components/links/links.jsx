import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import './links.css';

 
export default class Links extends Component {
    constructor() {
        super();
        this.state = {


        }

    }
    render() {
        return (


            <>

                <a href="https://www.linkedin.com/in/patrick-statzner-a71409134/" target="_blank">
                    <i className=" left left-1 fa fa-github fa-2x ">
                        <FontAwesomeIcon icon={faLinkedin} />
                    </i>
                </a>

                <a href="https://www.linkedin.com/in/patrick-statzner-a71409134/" target="_blank">
                    <i className="left left-2 fa fa-linkedin fa-2x">
                        <FontAwesomeIcon icon={faGithub} />
                    </i>
                </a>
                
                <a href="https://api.whatsapp.com/send?phone=5524992700705" target="_blank">
                    <i className="left left-3 fa fa-whatsapp fa-2x">
                        <FontAwesomeIcon icon={faWhatsapp} />
                    </i>
                </a>



            </>

        )
    }
}