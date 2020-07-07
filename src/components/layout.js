/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { Container, Row, Col } from "react-bootstrap"
import Navbar from "./navBar"
import NewsletterForm from "./newsletterForm"
import Footer from "./footer"
import FixedMobileBookingButton from "./fixedMobileBookingButton"
import ScrollToTopButton from "./scrollToTopButton"

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
        SiteLogo: file(relativePath: { eq: "EntabeneLogo.png" }) {
          ...optimizeLogo
        }

        JHLogo: file(relativePath: { eq: "JHLogo.png" }) {
          ...optimizeLogo
        }
      }
    `}
    render={data => (
      <>
        <Container fluid className="px-0 main">
          <Row noGutters className="justify-content-center">
            <Navbar
              pageInfo={pageInfo}
              logoImg={data.SiteLogo.childImageSharp.fixed}
            />
          </Row>
          <Row noGutters>
            <Col>
              <Container fluid className="px-0">
                <main>{children}</main>
                <ScrollToTopButton />
                <NewsletterForm />
                <Footer
                  logoImg={data.SiteLogo.childImageSharp.fixed}
                  JHLogo={data.JHLogo.childImageSharp.fixed}
                />
                <FixedMobileBookingButton />
              </Container>
            </Col>
          </Row>
        </Container>

        {/* <Container fluid className="px-0">
          <Row noGutters>
            <Col className="footer-col">
              <footer>
                <span>
                  <a href="/home" className={layoutStyles.footerLinks}>
                    Careers
                  </a>
                  <a href="/home" className={layoutStyles.footerLinks}>
                    Terms &amp; Conditions
                  </a>
                  <a href="/home" className={layoutStyles.footerLinks}>
                    Media
                  </a>
                  <a href="/home" className={layoutStyles.footerLinks}>
                    Brochures{" "}
                  </a>
                </span>
              </footer>
            </Col>
          </Row>
        </Container> */}
      </>
    )}
  />
)

export default Layout
