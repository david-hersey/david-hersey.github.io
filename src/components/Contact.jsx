import React, { Suspense, lazy } from 'react'
import ContactForm from './ContactForm.jsx'
import Spinner from './Spinner.jsx'

// https://clubhouse.io/developer-how-to/reacts-suspense-is-going-to-evolve-over-the-coming/
// https://github.com/BenoitZugmeyer/react-suspense-demo
const Hero = lazy(() => import('./Hero.jsx'))

class Contact extends React.Component {
  render () {
    return (
      <div className='container mt-5'>
        <h1>Contact</h1>
        {/* <Suspense fallback={<Spinner />}>
          <Hero image='https://images.chessingtonholidays.co.uk/seo/offers/black-friday/black-friday-40-v2-d1.jpg' />
        </Suspense> */}
        <Suspense fallback={<Spinner />}>
          <Hero image='https://via.placeholder.com/800x400.png?text=Contac800' tabupimage='https://via.placeholder.com/1200x400.png?text=Contact1200' />
        </Suspense>
        <ContactForm />
      </div>
    )
  }
}

export default Contact
