import React from "react"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import { Container, Col, InputGroup } from "react-bootstrap"
import { Formik } from "formik"
import * as yup from "yup"
import entabeniBookingFormStyles from "./entabeni-booking-form.module.css"

const schema = yup.object({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  email: yup.string().required(),
  phoneNumber: yup.string().required(),
  addressLine1: yup.string().required(),
  addressLine2: yup.string().required(),
  city: yup.string().required(),
  country: yup.string().required(),
  postcode: yup.string().required(),
})

function EntabeniBookingForm() {
  return (
    <Container>
      <Formik
        validationSchema={schema}
        initialValues={{
          firstName: "",
          lastName: "",
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
            className={entabeniBookingFormStyles.form}
          >
            <Form.Row>
              <Form.Group as={Col} md="4" controlId="validationFormik01">
                <Form.Label>First name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="First name"
                  name="firstName"
                  value={values.firstName}
                  onChange={handleChange}
                  isValid={touched.firstName && !errors.firstName}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="validationFormik02">
                <Form.Label>Last name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Last name"
                  name="lastName"
                  value={values.lastName}
                  onChange={handleChange}
                  isValid={touched.lastName && !errors.lastName}
                />

                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="validationFormik03">
                <Form.Label>Email</Form.Label>
                <InputGroup>
                  <InputGroup.Prepend>
                    <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                  </InputGroup.Prepend>
                  <Form.Control
                    type="email"
                    placeholder="Email"
                    aria-describedby="inputGroupPrepend"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    isInvalid={!!errors.email}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.email}
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} md="4" controlId="validationFormik04">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Phone number"
                  name="phoneNumber"
                  value={values.phoneNumber}
                  onChange={handleChange}
                  isInvalid={!!errors.phoneNumber}
                />

                <Form.Control.Feedback type="invalid">
                  {errors.phoneNumber}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} md="4" controlId="validationFormik05">
                <Form.Label>Address 1</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Address 1"
                  name="addressLine1"
                  value={values.addressLine1}
                  onChange={handleChange}
                  isInvalid={!!errors.addressLine1}
                />

                <Form.Control.Feedback type="invalid">
                  {errors.addressLine1}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="validationFormik06">
                <Form.Label>Address 2</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Address 2"
                  name="addressLine2"
                  value={values.addressLine2}
                  onChange={handleChange}
                  isInvalid={!!errors.addressLine2}
                />

                <Form.Control.Feedback type="invalid">
                  {errors.addressLine2}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="validationFormik07">
                <Form.Label>City</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="City"
                  name="city"
                  value={values.city}
                  onChange={handleChange}
                  isInvalid={!!errors.city}
                />

                <Form.Control.Feedback type="invalid">
                  {errors.city}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="validationFormik08">
                <Form.Label>Country</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Country"
                  name="country"
                  value={values.country}
                  onChange={handleChange}
                  isInvalid={!!errors.country}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.country}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="validationFormik09">
                <Form.Label>Postcode</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Postcode"
                  name="postcode"
                  value={values.postcode}
                  onChange={handleChange}
                  isInvalid={!!errors.postcode}
                />

                <Form.Control.Feedback type="invalid">
                  {errors.postcode}
                </Form.Control.Feedback>
              </Form.Group>
            </Form.Row>
            <Button type="submit">Submit form</Button>
          </Form>
        )}
      </Formik>
    </Container>
  )
}

export default EntabeniBookingForm
