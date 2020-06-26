import React from 'react'
import { Link } from 'react-router-dom'

import Backgrounds from './Backgrounds.jsx'

class TestTwo extends React.Component {
  render () {
    return (
      <div className='container mt-5'>
        <h1>Test Two</h1>
        <Backgrounds />
      </div>
    )
  }
}

export default TestTwo