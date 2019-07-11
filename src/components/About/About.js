import React, { Component } from 'react';
import { Typography } from '@material-ui/core';

class About extends Component {
    render() {
        return (
            <div className="about">
                <a name="section2"></a>
                <h1>About</h1>
                <div className="images">
                    <div className="fast">
                        <img src="https://image.flaticon.com/icons/png/512/55/55240.png"></img>
                        <Typography variant="h4">
                            <b>Fast</b>
                        </Typography>
                        <Typography variant="h5">
                            Fast Load Times
                    </Typography>
                    </div>
                    <div className="responsive">
                        <img src="http://simpleicon.com/wp-content/uploads/responsive-design.png"></img>
                        <Typography variant="h4">
                            <b>Responsive</b>
                        </Typography>
                        <Typography variant="h5">
                            Layouts that work on any device
                    </Typography>
                    </div>
                    <div className="dynamic">
                        <img src="https://static.thenounproject.com/png/51218-200.png"></img>
                        <Typography variant="h4">
                            <b>Dynamic</b>
                        </Typography>
                        <Typography variant="h5">
                            Creating Websites in real time
                    </Typography>
                    </div>
                </div>
                <div className="list">
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Javascript</li>
                        <li>React</li>
                        <li>Angular</li>
                        <li>Ruby on Rails</li>
                        <li>PHP</li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default About;
