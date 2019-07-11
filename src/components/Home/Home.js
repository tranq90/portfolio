import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';

class Home extends Component {
    render() {
        return (
            <div className="home">
                <a name="section1"></a>
                <Typography variant="h4">Hello my name is</Typography>
                <Typography variant="h4" id="myName">Quan Tran</Typography>
                <Typography variant="h4" > I am a Full-Stack Web Developer</Typography>
                <Typography variant="h4" > Scroll down to see my work</Typography>
            </div>
        );
    }
}

export default Home;
