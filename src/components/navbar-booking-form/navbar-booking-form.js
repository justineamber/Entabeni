import React, { useState } from "react"
import { Form, Button, Col } from "react-bootstrap"
import SelectTypeOfBooking from "../select-type-of-booking/select-type-of-booking"
import DateRangePicker from "../date-range-picker/date-range-picker"
import GuestNumberSelector from "../guest-number-selector/guest-number-selector"
import bookingFormStyles from "./navbar-booking-form.module.css"

const NavbarBookingForm = ({ onSubmit }) => {
  const [startDate, setStartDate] = useState()
  const [endDate, setEndDate] = useState()

  const handleDatesChange = ({ startDate, endDate }) => {
    setStartDate(startDate)
    setEndDate(endDate)
  }
  const [bookingValue, setBookingValue] = useState()

  const handleBookingChange = e => {
    setBookingValue(e.target.value)
  }

  console.log(bookingValue)

  return (
    <Form>
      <Form.Row bsPrefix={bookingFormStyles.formRowStyles}>
        <SelectTypeOfBooking
          bookingValue={bookingValue}
          handleBookingChange={handleBookingChange}
        />

        <div className={bookingFormStyles.inputFormsWrappers}>
          <DateRangePicker
            handleDatesChange={handleDatesChange}
            startDate={startDate}
            endDate={endDate}
          />
        </div>

        <GuestNumberSelector />

        <Col xs="auto">
          <Button
            onClick={() => onSubmit(startDate, endDate, bookingValue)}
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
