import React, { Component } from 'react';
import Home from '../Home/Home';
import About from '../About/About';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';
import './style.css';

class Content extends Component {
    render() {
        return (
            <div>
                <Home />
                <About />
                <Projects />
                <Contact />
            </div>
        );
    }
}

export default Content;