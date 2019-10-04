import React from "react"
import { Container, Row } from 'bootstrap-4-react';

const Hero = props => {
  return (
    <React.Fragment>
      <img src={props.image} className='img-fluid' />
    </React.Fragment>
  )
}

export default Hero
