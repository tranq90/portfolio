import React, { Component } from 'react';
import Content from "./components/Content/Content";
import Navbar from "./components/Navbar/Navbar";

class App extends Component {
  render() {
    return (
      <div className="Portfolio">
        <React.Fragment>
          <Navbar/>
          <Content/>
        </React.Fragment>
      </div>
    );
  }
}

export default App;