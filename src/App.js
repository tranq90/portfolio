import React, { Component } from 'react';
import Content from "./components/Content/Content";
import Navigation from './components/Navbar/Navbar';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navigation />
        <Content />
      </React.Fragment>
    );
  }
}

export default App;