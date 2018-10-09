import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import About from './components/About';
import Blog from './components/Blog';
import Home from './components/Home';
import Collapse from './components/Collapse';
import Main from './components/Main';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div className="container">
            <ul>
              <li> <Link to="/collapse"> Collapse </Link> </li>
              <li> <Link to="/blog">Blog</Link> </li>
              <li> <Link to="/about">About</Link>  </li>
              <li> <Link to="/home">Home</Link> </li>
              
            </ul>
            
            <Route exact path="/Home" component={Home} />
            <Route exact path="/About" component={About} />
            <Route exact path="/Blog" component={Blog} />
            <Route exact path="/Collapse" component={Collapse} />
          </div>
        </Router>
        <Main />
      </div>
    );
  }
}

export default App;
