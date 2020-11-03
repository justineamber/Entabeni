import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { Container, Row, Col } from "react-bootstrap"
import NavBar from "../nav-bar/nav-bar"
import NewsletterForm from "../newsletter-form/newsletter-form"
import Footer from "../footer/footer"
import FixedMobileBookingButton from "../fixed-mobile-booking-button/fixed-mobile-booking-button"
import ScrollToTopButton from "../scroll-to-top-button/scroll-to-top-button"

export const logoQuery = graphql`
  fragment optimizeLogo on File {
    childImageSharp {
      fixed(width: 100, height: 100) {
        ...GatsbyImageSharpFixed
      }
    }
  }
`

const Layout = ({ children, pageInfo }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
        SiteLogo: file(relativePath: { eq: "SiteLogo.png" }) {
          ...optimizeLogo
        }

        JustineHillLogo: file(relativePath: { eq: "JustineHillLogo.png" }) {
          ...optimizeLogo
        }
      }
    `}
    render={data => (
      <>
        <Container fluid className="px-0 main">
          <Row noGutters className="justify-content-center">
            <NavBar
              pageInfo={pageInfo}
              logoImage={data.SiteLogo.childImageSharp.fixed}
            />
          </Row>

          <Row noGutters>
            <Col>
              <Container fluid className="px-0">
                <main>{children}</main>
                <ScrollToTopButton />
                <NewsletterForm />
                <Footer
                  logoImage={data.SiteLogo.childImageSharp.fixed}
                  JustineHillLogo={data.JustineHillLogo.childImageSharp.fixed}
                />
                <FixedMobileBookingButton />
              </Container>
            </Col>
          </Row>
        </Container>
      </>
    )}
  />
)

export default Layout
