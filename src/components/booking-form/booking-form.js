import React from "react"
import { Form, Button, Dropdown, Col } from "react-bootstrap"
import DateRangePicker from "../date-range-picker/date-range-picker"
import bookingFormStyles from "./booking-form.module.css"

const BookingForm = () => {
  return (
    <Form>
      <Form.Row bsPrefix={bookingFormStyles.formRowStyles}>
        <Col xs="auto">
          <Dropdown>
            <Dropdown.Toggle variant="light" id="dropdown-basic">
              Book Accomodation
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Book Accomodation</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Book Activity</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Request Quote</Dropdown.Item>
              <Dropdown.Item href="#/action-3">
                Modify or cancel booking
              </Dropdown.Item>
              <Dropdown.Item href="#/action-3">Cancel</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>

        <Col xs="auto">
          <Form.Group>
            <Form.Label htmlFor="inlineFormInput" srOnly>
              Calendar
            </Form.Label>
            <div className={bookingFormStyles.dateRangePickerWrapper}>
              <DateRangePicker />
            </div>
          </Form.Group>
        </Col>
        <div className={bookingFormStyles.dateRangePickerWrapper}>
          <Col>
            <Form.Group>
              <Form.Label srOnly>Promo Code</Form.Label>
              <Form.Control type="text" placeholder="Promo Code" />
            </Form.Group>
          </Col>
        </div>

        <Col xs="auto">
          <Button
            type="submit"
            className="mb-2"
            bsPrefix={bookingFormStyles.searchButtonStyles}
          >
            Search
          </Button>
        </Col>
      </Form.Row>
    </Form>
  )
}

export default BookingForm
