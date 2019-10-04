import React from "react"
import { Nav } from 'bootstrap-4-react';

const Navigation = props => {
  return (
    <Nav>
      <Nav.Item>
        <Nav.Link active href="/">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="about-us">About</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="portfolio">Portfolio</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="contact-us">Contact</Nav.Link>
      </Nav.Item>
    </Nav>
  )
}

export default Navigation
