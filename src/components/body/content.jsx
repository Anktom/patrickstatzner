import React, { Component } from 'react';
import Typewriter from 'typewriter-effect';
import './content.css'
//import perfilPhoto from './perfilPhoto.jpeg'


export default class Content extends Component {
    constructor(props) {
        super();

        this.state = {
            typeWritterText: "React",

        }

    }


    render() {



        return (
            <div className="content">
                <div className="titulo">
                    <h1> Hi, I'm a Developer</h1>
                    <br />

                    <Typewriter
                        options={{
                            strings: ['React', 'NodeJS', 'DOT.NET', 'ASP.NET'],
                            autoStart: true,
                            loop: true,
                            deleteSpeed: 50,
                        }}
                    />
                    <div className="footer">
                        <span> Resident from Rio de Janeiro, Brazil</span>
                        
                        <button type="button" className="slide-in-top" >Download CV</button>
                    </div>

                </div>
                <div className="photo scale-in-center">
                    <img src='https://media-exp1.licdn.com/dms/image/C4D03AQFSukQu3Dz9-w/profile-displayphoto-shrink_800_800/0/1519960541263?e=1635379200&v=beta&t=t-YcSCctl69HPGr6e8b8VTOl3d_MpEvkGT0PDwfknVM'></img>
                </div>


            </div>





        )

    }


}



