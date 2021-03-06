import React from "react"
import { navigate } from "gatsby"
import Layout from "../components/layout/layout"
import SEO from "../components/seo/seo"
import { GiSeahorse } from "react-icons/gi"
import { Container, Col, Form, Button } from "react-bootstrap"
import styles from "./pages-styles/pagestyles-css-modules.module.css"
import NavbarBookingForm from "../components/navbar-booking-form/navbar-booking-form"
import { Formik } from "formik"
import * as yup from "yup"

const schema = yup.object({
  name: yup.string().required(),
  email: yup.string().required(),
  message: yup.string().required(),
})

function ContactForm() {
  const onSubmit = (startDate, endDate, bookingValue, guestValue) => {
    navigate("/entabeni-booking-page/", {
      state: {
        endDate: endDate.format("YYYY-MM-DD"),
        startDate: startDate.format("YYYY-MM-DD"),
        bookingValue,
        guestValue,
      },
    })
  }
  return (
    <Layout pageInfo={{ pageName: "Contact" }}>
      <SEO
        title="Contact page"
        keywords={[`Plett`, `Beach`, `House`, `Contact`, `Entabeni`]}
      />
      <div className={styles.bookingFormWrapperAllPages}>
        <NavbarBookingForm onSubmit={onSubmit} />
      </div>
      <div className={styles.paragraphContainerNoImage}>
        <GiSeahorse />
        <h2 className={styles.headingStyle}>Get in touch</h2>
      </div>
      <Container>
        <Formik
          validationSchema={schema}
          initialValues={{
            name: "",
            email: "",
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
              noValidate
              onSubmit={handleSubmit}
              className={styles.paddingBottom}
            >
              <Form.Row className="justify-content-md-center">
                <Form.Group as={Col} md="4" controlId="validationFormik01">
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
                    isInvalid={!!errors.email}
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  <Form.Control.Feedback type="invalid">
                    {errors.email}
                  </Form.Control.Feedback>
                </Form.Group>
              </Form.Row>
              <Form.Row className="justify-content-md-center">
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
                    placeholder="Enter enquiry"
                    name="General enquiry for Entebene"
                    value={values.message}
                    onChange={handleChange}
                    isValid={touched.message && !errors.message}
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
              </Form.Row>
              <Button type="submit">Submit form</Button>
            </Form>
          )}
        </Formik>
      </Container>
      <div className={styles.contactPageBottomBorder}></div>
    </Layout>
  )
}

export default ContactForm
