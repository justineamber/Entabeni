import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/seo/seo"
import { GiSeahorse } from "react-icons/gi"
import { Container, Col, Form, Button } from "react-bootstrap"
import styles from "./pages-styles/pagestyles-css-modules.module.css"
import BookingForm from "../components/booking-form/booking-form"
import { Formik } from "formik"
import * as yup from "yup"

const schema = yup.object({
  fullName: yup.string().required(),
  email: yup.string().required(),
  message: yup.string().required(),
  terms: yup.bool().required(),
})

function ContactForm() {
  return (
    <Layout pageInfo={{ pageName: "Contact" }}>
      <SEO
        title="Contact page"
        keywords={[`Plett`, `Beach`, `House`, `Contact`]}
      />

      <div className={styles.paragraphContainerNoImage}>
        <div className={styles.bookingFormWrapperAllPages}>
          <BookingForm />
        </div>
        <GiSeahorse />
        <h2 className={styles.headingStyle}>Get in touch</h2>
      </div>
      <Container>
        <Formik
          validationSchema={schema}
          initialValues={{
            fullName: "",
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
            <Form noValidate onSubmit={handleSubmit}>
              <Form.Row>
                <Form.Group as={Col} md="4" controlId="validationFormik01">
                  <Form.Label>Full name</Form.Label>
                  <Form.Control
                    type="text"
                    name="fullName"
                    value={values.fullName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isValid={touched.fullName && !errors.fullName}
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} md="4" controlId="validationCustom02">
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

                <Form.Group
                  as={Col}
                  md="4"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label>General enquiry</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows="3"
                    type="text"
                    name="General enquiry for Entebene"
                    value={values.message}
                    onChange={handleChange}
                    isValid={touched.message && !errors.message}
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
              </Form.Row>

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
              <Button type="submit">Submit form</Button>
            </Form>
          )}
        </Formik>
      </Container>
    </Layout>
  )
}

export default ContactForm
