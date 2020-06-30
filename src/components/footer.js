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

export default function Footer({ logoImg, JHLogo }) {
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
        <Container>
          <Row className="justify-content-md-center">
            <Col xs={6} md={4}>
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

            <Col xs={6} md={4}>
              <Link to="/home" className="nav-link" active>
                <Img
                  className={footerStyles.logo}
                  fixed={logoImg}
                  width="100"
                  height="100"
                  alt="Plett Beach House logo"
                />
              </Link>
              <p className={footerStyles.watermarkStyle}>
                <FaRegCopyright className={footerStyles.svg} />
                2020 Plett Beach House. All Rights Reserved.
              </p>
            </Col>

            <Col xs={6} md={4}>
              <Link to="/home" className="nav-link" active>
                <Img
                  fixed={JHLogo}
                  width="100"
                  height="100"
                  alt="Justine Hill logo"
                />
              </Link>
              <p className={footerStyles.watermarkStyle}>
                Website development by Justine Hill
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}
