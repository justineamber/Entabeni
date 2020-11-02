import React, { useState } from "react"
import { Form, Button, Col } from "react-bootstrap"
import SelectTypeOfBooking from "../select-type-of-booking/select-type-of-booking"
import DateRangePicker from "../date-range-picker/date-range-picker"
import SelectNumberOfGuests from "../select-number-of-guests/select-number-of-guests"
import bookingFormStyles from "./navbar-booking-form.module.css"

const NavbarBookingForm = ({ onSubmit }) => {
  const [startDate, setStartDate] = useState()
  const [endDate, setEndDate] = useState()
  const [errorMessage, setErrorMessage] = useState(null)

  const handleDatesChange = ({ startDate, endDate }) => {
    setStartDate(startDate)
    setEndDate(endDate)
  }

  const [bookingValue, setBookingValue] = useState()

  const handleBookingChange = e => {
    setBookingValue(e.target.value)
  }

  const [guestValue, setGuestValue] = useState()

  const handleGuestChange = e => {
    setGuestValue(e.target.value)
  }

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
          {errorMessage && (
            <p className={bookingFormStyles.errorMessageStyles}>
              {errorMessage}
            </p>
          )}
        </div>

        <SelectNumberOfGuests
          guestValue={guestValue}
          handleGuestChange={handleGuestChange}
        />

        <Col xs="auto">
          <Button
            className="mb-2"
            bsPrefix={bookingFormStyles.searchButtonStyles}
            onClick={() => {
              if (!startDate || !endDate) {
                return setErrorMessage(
                  "A start and end date is required for booking"
                )
              } else {
                onSubmit(startDate, endDate, bookingValue, guestValue)
              }
            }}
          >
            Book Now
          </Button>
        </Col>
      </Form.Row>
    </Form>
  )
}
export default NavbarBookingForm
