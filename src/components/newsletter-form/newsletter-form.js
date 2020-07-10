import React from "react"
import newsletterStyles from "./newsletter-form.module.css"
import Form from "react-bootstrap/Form"
import { Col, Container, Button } from "react-bootstrap"
import { GiSeahorse } from "react-icons/gi"

export default function NewsletterForm() {
  return (
    <Container>
      <Form className={newsletterStyles.paddingTop}>
        <GiSeahorse />
        <h2 className={newsletterStyles.headingStyle}>
          Signup for our newsletter
        </h2>

        <Form.Row className="justify-content-md-center">
          <Col lg={true}>
            <Form.Group controlId="formBasicName">
              <Form.Label srOnly>Name</Form.Label>
              <Form.Control className="mb-2" placeholder="First Name" />
            </Form.Group>
          </Col>

          <Col lg={true}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label srOnly>Email Address</Form.Label>
              <Form.Control className="mb-2" placeholder="Email Address" />
            </Form.Group>
          </Col>

          <Col lg={true}>
            <Button
              variant="dark"
              type="submit"
              bsPrefix={newsletterStyles.Button}
            >
              Submit
            </Button>
          </Col>
        </Form.Row>
      </Form>
    </Container>
  )
}
