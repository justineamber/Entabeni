import React from "react"
import { Form, Col } from "react-bootstrap"

function SelectTypeOfBooking({ bookingValue, handleBookingChange, children }) {
  return (
    <>
      <Col xs="auto">
        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>Select</Form.Label>
          {children}
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
