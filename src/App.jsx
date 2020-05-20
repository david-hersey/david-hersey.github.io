import React, { Suspense, lazy } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Footer from './components/Footer.jsx'
import Prompt from './components/Prompt.jsx';
import Spinner from './components/Spinner.jsx'

// https://clubhouse.io/developer-how-to/reacts-suspense-is-going-to-evolve-over-the-coming/
// https://github.com/BenoitZugmeyer/react-suspense-demo
const About = lazy(() => import('./components/About.jsx'))
const Social = lazy(() => import('./components/Social.jsx'))
const Contact = lazy(() => import('./components/Contact.jsx'))
const Home = lazy(() => import('./components/Home.jsx'))

class App extends React.Component {
  render () {
    return (
      <div className='App'>
        <div className='container'>
          <Router>
            <nav className='navbar fixed-top navbar-expand-lg navbar-dark'>
              <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
                <span className='navbar-toggler-icon' />
              </button>
              <div className='collapse navbar-collapse' id='navbarSupportedContent'>
                <ul className='navbar-nav mr-auto'>
                  <li className='nav-item'>
                    <Link to='/' className='nav-link' data-action="Clicked" data-category="Nav Links" data-label="Home Link">Home</Link>
                  </li>
                  <li className='nav-item'>
                    <Link to='/about' className='nav-link' data-action="Clicked" data-category="Nav Links" data-label="About Link">About</Link>
                  </li>
                  <li className='nav-item'>
                    <Link to='/social' className='nav-link' data-action="Clicked" data-category="Nav Links" data-label="Social Link">Social</Link>
                  </li>
                  <li className='nav-item'>
                    <Link to='/contact' className='nav-link' data-action="Clicked" data-category="Nav Links" data-label="Contact Link">Contact</Link>
                  </li>
                </ul>
              </div>
            </nav>
            <div className='container mt-5'>
              <div className='row'>
                <Suspense fallback={<Spinner />}>
                  <Route path='/about' component={About} />
                  <Route path='/social' component={Social} />
                  <Route path='/contact' component={Contact} />
                  <Route exact path='/' component={Home} />
                </Suspense>
              </div>
            </div>
          </Router>
          <Footer />
        </div>
        <Prompt />
      </div>
    )
  }
}

export default App
