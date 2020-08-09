import React, { useState } from "react"
import { Form, Button, Col } from "react-bootstrap"
import DateRangePicker from "../date-range-picker/date-range-picker"
import bookingFormStyles from "./navbar-booking-form.module.css"

const NavbarBookingForm = ({ onSubmit }) => {
  const [startDate, setStartDate] = useState()
  const [endDate, setEndDate] = useState()

  const handleDatesChange = ({ startDate, endDate }) => {
    setStartDate(startDate)
    setEndDate(endDate)
  }

  return (
    <Form>
      <Form.Row bsPrefix={bookingFormStyles.formRowStyles}>
        <Col xs="auto">
          <Form.Group as={Col} controlId="formGridState">
            <Form.Label bsPrefix={bookingFormStyles.labelStyles}>
              Select
            </Form.Label>
            <Form.Control as="select" defaultValue="">
              <option>Book Accomodation</option>
              <option>Book Experience</option>
              <option>Request Quote</option>
              <option>Modify or cancel booking</option>
            </Form.Control>
          </Form.Group>
        </Col>

        <Col xs="auto">
          <Form.Group>
            <Form.Label htmlFor="inlineFormInput" srOnly>
              Calendar
            </Form.Label>
            <div className={bookingFormStyles.inputFormsWrappers}>
              <DateRangePicker
                handleDatesChange={handleDatesChange}
                startDate={startDate}
                endDate={endDate}
              />
            </div>
          </Form.Group>
        </Col>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label bsPrefix={bookingFormStyles.labelStyles}>
            Guests
          </Form.Label>
          <Form.Control as="select" defaultValue="">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
            <option>9</option>
            <option>10</option>
            <option>12</option>
          </Form.Control>
        </Form.Group>

        <Col xs="auto">
          <Button
            onClick={() => onSubmit(startDate, endDate)}
            className="mb-2"
            bsPrefix={bookingFormStyles.searchButtonStyles}
          >
            Book Now
          </Button>
        </Col>
      </Form.Row>
    </Form>
  )
}

export default NavbarBookingForm
