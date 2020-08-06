import React, { useState } from "react"
import { Form, Button, Dropdown, Col } from "react-bootstrap"
import DateRangePicker from "../date-range-picker/date-range-picker"
import bookingFormStyles from "./navbar-booking-form.module.css"
import { navigate } from "gatsby"

const NavbarBookingForm = () => {
  const [startDate, setStartDate] = useState()

  const [endDate, setEndDate] = useState()

  const handleDatesChange = ({ startDate, endDate }) => {
    setStartDate(startDate)
    setEndDate(endDate)
  }

  const onSubmit = e => {
    e.preventDefault()
    navigate("/entabene-booking-page", { state: { startDate, endDate } })
  }

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
            <div className={bookingFormStyles.inputFormsWrappers}>
              <DateRangePicker
                handleDatesChange={handleDatesChange}
                startDate={startDate}
                endDate={endDate}
              />
            </div>
          </Form.Group>
        </Col>
        <div className={bookingFormStyles.inputFormsWrappers}>
          <Col>
            <Form.Group>
              <Form.Label srOnly>Promo Code</Form.Label>
              <Form.Control type="text" placeholder="Promo Code" />
            </Form.Group>
          </Col>
        </div>

        <Col xs="auto">
          <Button
            onClick={onSubmit}
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
