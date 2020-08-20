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

export default function Footer({ JustineHillLogo }) {
  return (
    <>
      <div className={footerStyles.footerContainerSocialMedia}>
        <GiSeahorse />
        <h3 className={footerStyles.headingStyle}>Connect with us</h3>
        <ul className={footerStyles.ul}>
          <li className={footerStyles.li}>
            <FaFacebook />
          </li>
          <li>
            <FaInstagram />
          </li>
          <li className={footerStyles.li}>
            <FaYoutubeSquare />
          </li>
        </ul>
      </div>
      <div className={footerStyles.footerContainer}>
        <Container fluid>
          <Row className="justify-content-md-center">
            <Col lg={true}>
              <ul className={footerStyles.ul}>
                <li className={footerStyles.li}>
                  Beacon Isle Dr, Plettenberg Bay, 6600, South Africa
                </li>
                <li className={footerStyles.li}>
                  <span itemProp="telephone">
                    <a href="tel:+4796801110">+47 968 01110</a>
                  </span>
                </li>
              </ul>
              <Link to="/contact">
                <Button variant="dark" type="button">
                  Contact us
                </Button>
              </Link>
            </Col>

            <Col xs={6} md={4}>
              <Link to="/" className={footerStyles.navbarBrand}>
                Entabene
              </Link>
              <p className={footerStyles.watermarkStyle}>
                <FaRegCopyright className={footerStyles.svg} />
                2020 Entabene. All Rights Reserved.
              </p>
            </Col>

            <Col xs={6} md={4}>
              <Link to="/home">
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
          <Col className="footer-col">
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
