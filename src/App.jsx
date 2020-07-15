import React, { Suspense, lazy } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import Footer from './components/Footer.jsx'
import CookieConsent from 'react-cookie-consent'
import Spinner from './components/Spinner.jsx'

// https://clubhouse.io/developer-how-to/reacts-suspense-is-going-to-evolve-over-the-coming/
// https://github.com/BenoitZugmeyer/react-suspense-demo
const About = lazy(() => import('./components/About.jsx'))
const Social = lazy(() => import('./components/Social.jsx'))
const Contact = lazy(() => import('./components/Contact.jsx'))
const Home = lazy(() => import('./components/Home.jsx'))
// Projects and others outsdie main nav
const Alton = lazy(() => import('./components/Alton.jsx'))
const Legoland = lazy(() => import('./components/Legoland.jsx'))
const Warwick = lazy(() => import('./components/Warwick.jsx'))
const Merlin = lazy(() => import('./components/Merlin.jsx'))
const Theme = lazy(() => import('./components/Theme.jsx'))
const Theatre = lazy(() => import('./components/Theatre.jsx'))
const Ssg = lazy(() => import('./components/Ssg.jsx'))
const Test = lazy(() => import('./components/Test.jsx'))
const TestTwo = lazy(() => import('./components/TestTwo.jsx'))
const TestThree = lazy(() => import('./components/SignInApp.jsx'))
const TestFour = lazy(() => import('./components/CheckoutApp.jsx'))
const Work = lazy(() => import('./components/Work.jsx'))
const SignUpPage = lazy(() => import('./components/SignUp.jsx'))
const SignInPage = lazy(() => import('./components/SignIn.jsx'))
const PasswordResetPage = lazy(() => import('./components/PasswordReset.jsx'))
const Payment = lazy(() => import('./components/Payment.jsx'))
const Confirmation = lazy(() => import('./components/Confirmation.jsx'))

// https://www.npmjs.com/package/react-cookie-consent

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
                    <Link to='/' className='nav-link' data-action='Clicked' data-category='Nav Links' data-label='Home Link'>Home</Link>
                  </li>
                  <li className='nav-item'>
                    <Link to='/contact' className='nav-link' data-action='Clicked' data-category='Nav Links' data-label='Contact Link'>Contact</Link>
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
                  <Route path='/confirmation' component={Confirmation} />
                  <Route exact path='/' component={Home} />
                  <Route path='/alton' component={Alton} />
                  <Route path='/legoland' component={Legoland} />
                  <Route path='/warwick' component={Warwick} />
                  <Route path='/theatre' component={Theatre} />
                  <Route path='/static-site' component={Ssg} />
                  <Route path='/merlin-theme-parks' component={Merlin} />
                  <Route path='/theme-parks' component={Theme} />
                  <Route path='/test' component={Test} />
                  <Route path='/test-two' component={TestTwo} />
                  <Route path='/test-three' component={TestThree} />
                  <Route path='/test-four' component={TestFour} />
                  <Route path='/work' component={Work} />
                  <Route path='/signup' component={SignUpPage} />
                  <Route path='/signin' component={SignInPage} />
                  <Route path='/passwordReset' component={PasswordResetPage} />
                  <Route path='/payment' component={Payment} />
                </Suspense>
              </div>
            </div>
          </Router>
          <Footer />
        </div>
        <CookieConsent>We won't be using any cookies at this point, well only one that confirms this message</CookieConsent>
      </div>
    )
  }
}

export default App
