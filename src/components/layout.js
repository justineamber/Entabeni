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

const Layout = ({ children, pageInfo }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Container fluid className="px-0 main">
          <Row noGutters className="justify-content-center"></Row>
          <Navbar pageInfo={pageInfo} />
          <Row noGutters>
            <Col>
              <Container fluid className="px-0">
                <main>{children}</main>
                <NewsletterForm />
              </Container>
            </Col>
          </Row>
        </Container>

        <Container fluid className="px-0">
          <Row noGutters>
            <Col className="footer-col">
              <footer>
                <span>
                  <a href="/home"> Careers |</a>
                  <a href="/home"> Terms & Conditions |</a>
                  <a href="/home"> Media |</a>
                  <a href="/home"> Brochures </a>
                </span>
              </footer>
            </Col>
          </Row>
        </Container>
      </>
    )}
  />
)

export default Layout
