import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import Home from './components/Home.jsx';

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <div className="container">
        <Router>
          <nav className='navbar fixed-top navbar-expand-lg navbar-light bg-light'>
          <a class="navbar-brand" href="#">David Hersey</a>
            <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
              <span className='navbar-toggler-icon'></span>
            </button>
            <div className='collapse navbar-collapse' id='navbarSupportedContent'>
              <ul className='navbar-nav mr-auto'>
                <li className='nav-item active'>
                  <Link to='/' className="nav-link">Home</Link>
                </li>
                <li className='nav-item'>
                  <Link to='/about' className="nav-link">About</Link>
                </li>
                <li className='nav-item'>
                  <Link to='/contact' className="nav-link">Contact</Link>
                </li>
              </ul>
            </div>
          </nav>
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
        </div>
      </div>
    )
  }
}

export default App;
