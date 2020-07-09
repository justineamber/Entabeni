import React from "react"
import footerStyles from "./footer.module.css"
import {
  FaFacebook,
  FaInstagram,
  FaYoutubeSquare,
  FaRegCopyright,
} from "react-icons/fa"
import { GiSeahorse } from "react-icons/gi"
import { Link } from "gatsby"
import Img from "gatsby-image"
import { Button, Col, Container, Row } from "react-bootstrap"

export default function Footer({ logoImage, JustineHillLogo }) {
  function handleClick(e) {
    e.preventDefault()
    console.log("The button was clicked.")
  }
  return (
    <>
      <div className={footerStyles.footerContainer}>
        <GiSeahorse />
        <h3 className={footerStyles.headingStyle}>Connect with us</h3>
        <ul>
          <li>
            <FaFacebook />
          </li>
          <li>
            <FaInstagram />
          </li>
          <li>
            <FaYoutubeSquare />
          </li>
        </ul>
      </div>
      <div className={footerStyles.footerContainer}>
        <Container fluid>
          <Row className="justify-content-md-center">
            <Col lg={true}>
              <ul>
                <li>Beacon Isle Dr, Plettenberg Bay, 6600, South Africa</li>
                <li>
                  <span itemprop="telephone">
                    <a href="tel:+4796801110">+47 968 01110</a>
                  </span>
                </li>
              </ul>
              <Link to="/contact" className="nav-link" active>
                <Button
                  variant="dark"
                  active
                  type="button"
                  handleClick={handleClick}
                >
                  Contact us
                </Button>
              </Link>
            </Col>

            <Col lg={true}>
              <Link to="/home" className="nav-link" active>
                <Img
                  className={footerStyles.logo}
                  fixed={logoImage}
                  width="100"
                  height="100"
                  alt="Entabene logo"
                />
              </Link>
              <p className={footerStyles.watermarkStyle}>
                <FaRegCopyright className={footerStyles.svg} />
                2020 Entabene. All Rights Reserved.
              </p>
            </Col>

            <Col lg={true}>
              <Link to="/home" className="nav-link" active>
                <Img
                  fixed={JustineHillLogo}
                  width="100"
                  height="100"
                  alt="Justine Hill logo"
                />
              </Link>
            </Col>
          </Row>
        </Container>
      </div>

      <Container fluid className="px-0">
        <Row noGutters>
          <Col className="footer-col" bsPrefix={footerStyles.footer}>
            <footer>
              <span>
                <a href="/home" className={footerStyles.footerLinks}>
                  Careers
                </a>
                <a href="/home" className={footerStyles.footerLinks}>
                  Terms &amp; Conditions
                </a>
                <a href="/home" className={footerStyles.footerLinks}>
                  Media
                </a>
                <a href="/home" className={footerStyles.footerLinks}>
                  Brochures{" "}
                </a>
              </span>
            </footer>
          </Col>
        </Row>
      </Container>
    </>
  )
}
