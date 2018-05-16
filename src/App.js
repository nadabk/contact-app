import React, { Component } from 'react';
import './App.css';
import Routes from './Routes'
import {BrowserRouter as Router,Link} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Link to='/contacts'>
            <input type='button' value='contact list' />
          </Link>

          <Link to='/add_contact'>
            <input type='button' value='Add contact' />
          </Link>


          <Routes />
        </div>

      </Router>
    );
  }
}

export default App;
