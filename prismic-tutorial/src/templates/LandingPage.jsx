import React from "react"
import { Container, Row } from 'bootstrap-4-react';
import Navigation from './Nav.jsx'
import Hero from './Hero.jsx'
import { graphql } from "gatsby"

const LandingPage = ({ data: { prismicLandingPage } }) => {
  const { data } = prismicLandingPage
  console.log('DATA:', data)
  return (
    <Container>
      <Row>
        <Navigation />
      </Row>
      <Row>
        <Hero image={data.hero_image_src} />
        <h1 dangerouslySetInnerHTML={{ __html: data.contentArea[0].header.html}} />
      </Row>
      <Row>
        <div dangerouslySetInnerHTML={{ __html: data.contentArea[0].content.html }} />
      </Row>
      {data.contentArea[1] && (
        <React.Fragment>
          <Row>
            <h2 dangerouslySetInnerHTML={{ __html: data.contentArea[1].header.html}} />
          </Row>
          <Row>
            <div dangerouslySetInnerHTML={{ __html: data.contentArea[1].content.html }} />
          </Row>
        </React.Fragment>
      )}
    </Container>
  )
}

export default LandingPage

export const pageQuery = graphql`
  query LandingPageBySlug($uid: String!) {
    prismicLandingPage(uid: { eq: $uid }) {
      uid
      data {
        contentArea {
          header {
            html
            text
          }
          content {
            html
            text
          }
        }
        hero_image_src
      }
    }
  }
  `