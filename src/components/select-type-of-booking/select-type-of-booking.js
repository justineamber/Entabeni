import React from "react"
import { Form, Col } from "react-bootstrap"
import selectTypeOfBookingStyles from "./select-type-of-booking.module.css"

function SelectTypeOfBooking({ bookingValue, handleBookingChange }) {
  return (
    <>
      <Col xs="auto">
        <Form.Group as={Col} controlId="formGridState">
          <Form.Label bsPrefix={selectTypeOfBookingStyles.selectLabelStyles}>
            Select
          </Form.Label>

          <Form.Control
            as="select"
            onChange={handleBookingChange}
            value={bookingValue}
          >
            <option>Book Accomodation</option>
            <option>Book Experience</option>
            <option>Request Quote</option>
            <option>Modify or cancel booking</option>
          </Form.Control>
        </Form.Group>
      </Col>
    </>
  )
}

export default SelectTypeOfBooking
