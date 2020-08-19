import React from "react"
import newsletterStyles from "./newsletter-form.module.css"
import { Col, Form, Container, Button } from "react-bootstrap"
import { GiSeahorse } from "react-icons/gi"
import { Formik } from "formik"
import * as yup from "yup"

const schema = yup.object({
  name: yup.string().required(),
  email: yup.string().required(),
  terms: yup.bool().required(),
})

export default function NewsletterForm() {
  return (
    <div className={newsletterStyles.newsletterContainer}>
      <Container>
        <Formik
          validationSchema={schema}
          initialValues={{
            name: "",
            email: "",
            terms: false,
          }}
          onSubmit={async values => {
            await new Promise(resolve => setTimeout(resolve, 500))
            alert(JSON.stringify(values, null, 2))
          }}
        >
          {({
            handleSubmit,
            handleChange,
            handleBlur,
            values,
            touched,
            isValid,
            errors,
          }) => (
            <Form
              className={newsletterStyles.paddingTopAndBottom}
              noValidate
              onSubmit={handleSubmit}
            >
              <GiSeahorse />
              <h2 className={newsletterStyles.headingStyle}>
                Signup for our newsletter
              </h2>
              <Form.Row className="justify-content-md-center">
                <Col lg={true}>
                  <Form.Group controlId="validationFormik01">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="name"
                      placeholder="Enter name"
                      value={values.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isValid={touched.name && !errors.name}
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  </Form.Group>
                </Col>
                <Col lg={true}>
                  <Form.Group controlId="validationCustom03">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="text"
                      name="email"
                      placeholder="Enter email"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isValid={touched.email && !errors.email}
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  </Form.Group>
                </Col>
              </Form.Row>
              <Col lg={true}>
                <Form.Group>
                  <Form.Check
                    required
                    name="terms"
                    label="Please tick to receive newsletters with exclusive offers, experiences and travel inspiration"
                    onChange={handleChange}
                    isInvalid={!!errors.terms}
                    feedback={errors.terms}
                    id="validationFormik0"
                  />
                </Form.Group>
              </Col>

              <Col lg={true}>
                <Button
                  type="submit"
                  variant="dark"
                  bsPrefix={newsletterStyles.Button}
                >
                  Submit
                </Button>
              </Col>
            </Form>
          )}
        </Formik>
      </Container>
    </div>
  )
}
