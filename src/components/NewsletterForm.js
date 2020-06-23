import React from "react"
import useSubmitForm from "./submitForm"
import newsletterStyles from "./newsletter.module.css"
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaRegCopyright,
} from "react-icons/fa"
import { GiSeahorse } from "react-icons/gi"
import { Row, Col, Container, Button } from "react-bootstrap"
import { Link } from "gatsby"

export default function NewsletterForm() {
  const { inputs, handleInputChange, handleSubmit } = useSubmitForm()
  return (
    <div>
      <div className={newsletterStyles.footerContainer}>
        <GiSeahorse />
        <h3>Sign up to our Newsletter</h3>
        <form
          className={newsletterStyles.contactform}
          onSubmit={handleSubmit}
          method="post"
          action="https://getform.io/{your-unique-getform-endpoint}"
        >
          <input
            type="text"
            name="firstName"
            className="input-name"
            placeholder="First Name"
            onChange={handleInputChange}
            value={inputs.firstName}
            required
          />
          <input
            type="text"
            name="surname"
            className="input-name"
            placeholder="Surname"
            onChange={handleInputChange}
            value={inputs.Surname}
            required
          />
          <input
            type="email"
            name="email"
            className="input-email"
            placeholder="Email address"
            onChange={handleInputChange}
            value={inputs.email}
            required
          />

          <input
            type="submit"
            value="Subscribe"
            className={newsletterStyles.inputSubmit}
          />
        </form>
      </div>
      <div className={newsletterStyles.footerContainer}>
        <GiSeahorse />
        <h3>Connect with us</h3>
        <ul>
          <li>
            <FaFacebook />
          </li>
          <li>
            <FaInstagram />
          </li>
          <li>
            <FaYoutube />
          </li>
        </ul>
      </div>
      <div className={newsletterStyles.footerContainer}>
        <Container>
          <Row>
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
                <Button variant="dark" active>
                  Contact us
                </Button>
              </Link>
            </Col>
            <Col xs={6} md={4}>
              <a href="/home">
                <img
                  width="100"
                  height="100"
                  src={`/logo.png`}
                  alt="Plett Beach House logo"
                />
              </a>
            </Col>
            <Col xs={6} md={4}>
              <span className={newsletterStyles.icon}>
                <FaRegCopyright />
              </span>
              <span className={newsletterStyles.text}>Plett Beach House</span>
              <br />
              <img
                width="100"
                height="100"
                src={`/JHLogo.png`}
                alt="Justine Hill logo"
              />{" "}
              <br />
              Website design & development by Justine Hill
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  )
}
