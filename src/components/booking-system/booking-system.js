import React from "react"
import { Form, Button, Dropdown, Col, InputGroup } from "react-bootstrap"
import bookingSystemStyles from "./booking-system.module.css"
import { FaCalendarAlt } from "react-icons/fa"

const BookingSystem = () => {
  return (
    <Form inline className={bookingSystemStyles.form}>
      <Form.Row
        className="align-items-center"
        bsPrefix={bookingSystemStyles.formRow}
      >
        <Col xs="auto">
          <Dropdown bsPrefix={bookingSystemStyles.bookingButtonStyles}>
            <Dropdown.Toggle variant="dark" id="dropdown-basic">
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

        <Col sm={3} className="my-1">
          <Form.Label htmlFor="inlineFormInput" srOnly>
            Calendar
          </Form.Label>
          <InputGroup>
            <Form.Control
              type="text"
              placeholder="23-Jul-2020"
              id="inlineFormInput"
              className="mb-2"
            />
            <div className={bookingSystemStyles.calendarIcon}>
              <FaCalendarAlt />
            </div>
          </InputGroup>
        </Col>
        <Col xs="auto">
          <Form.Label htmlFor="inlineFormInput" srOnly>
            Number of Nights
          </Form.Label>
          <Form.Control
            type="number"
            placeholder="1 Nights"
            id="inlineFormInput"
            className="mb-2"
          />
        </Col>
        <Col xs="auto">
          <Form.Label htmlFor="inlineFormInput" srOnly>
            Promo Code
          </Form.Label>
          <Form.Control
            id="inlineFormInput"
            placeholder="Promo Code"
            className="mb-2"
          />
        </Col>
        <Col>
          <Button
            type="submit"
            className="mb-2"
            bsPrefix={bookingSystemStyles.searchButtonStyles}
          >
            Search
          </Button>
        </Col>
      </Form.Row>
    </Form>
  )
}

export default BookingSystem
