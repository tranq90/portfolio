import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';

class Home extends Component {
    render() {
        return (
            <div className="home">
                <a name="section1"></a>
                <Typography>Hello my name is</Typography>
                <Typography id="myName">Quan Tran</Typography>
                <Typography> I am a Full-Stack Web Developer</Typography>
            </div>
        );
    }
}

export default Home;
