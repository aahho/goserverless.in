import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import './App.css';
import Home from './pages/home.jsx'
import Blog from './pages/blog.jsx'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home}/>
          <Route exact path="/blog" component={Blog}/>
        </div>
      </Router>
    );
  }
}

export default App;
