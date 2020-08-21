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
import { Button, Col, Container, Row } from "react-bootstrap"

export default function Footer() {
  return (
    <>
      <div className={footerStyles.footerContainerSocialMedia}>
        <GiSeahorse />
        <h3 className={footerStyles.headingStyle}>Connect with us</h3>

        <ul className={footerStyles.ul}>
          <li className={footerStyles.li}>
            <FaFacebook />
          </li>
          <li className={footerStyles.li}>
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
                  5 Harker Street, Plettenberg Bay, 6600, South Africa
                </li>
              </ul>
            </Col>

            <Col lg={true}>
              <Link to="/" className={footerStyles.navbarBrand}>
                Entabeni
              </Link>
              <p className={footerStyles.watermarkStyle}>
                <FaRegCopyright className={footerStyles.svg} />
                2020 Entabeni. All Rights Reserved.
              </p>
            </Col>

            <Col lg={true}>
              <div className={footerStyles.contactbButtonFooterWrapper}>
                <Link to="/contact">
                  <Button variant="dark" type="button">
                    Contact us
                  </Button>
                </Link>
              </div>
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
                  Brochures
                </a>
              </span>
            </footer>
          </Col>
        </Row>
      </Container>
    </>
  )
}
