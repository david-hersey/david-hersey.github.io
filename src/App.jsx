import React, { Suspense, lazy } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import Footer from './components/Footer.jsx';
import Spinner from './components/Spinner.jsx';

// https://clubhouse.io/developer-how-to/reacts-suspense-is-going-to-evolve-over-the-coming/
// https://github.com/BenoitZugmeyer/react-suspense-demo
const About = lazy(() => import('./components/About.jsx'));
const Contact = lazy(() => import('./components/Contact.jsx'));
const Home = lazy(() => import('./components/Home.jsx'));

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <div className="container">
        <Router>
          <nav className='navbar fixed-top navbar-expand-lg navbar-light'>
          <a className="navbar-brand" href="#">David Hersey</a>
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
          <Suspense fallback={<Spinner />}>
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route exact path="/" component={Home} />
          </Suspense>
        </Router>
        <Footer />
        </div>
      </div>
    )
  }
}

export default App;
