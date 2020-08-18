import React, { useState, useEffect } from "react"
import * as moment from "moment"
import EntabeneBookingForm from "../components/entabene-booking-form/entabene-booking-form"
import styles from "./pages-styles/pagestyles-css-modules.module.css"
import DateRangePicker from "../components/date-range-picker/date-range-picker"
import SelectTypeOfBooking from "../components/select-type-of-booking/select-type-of-booking"
import SelectNumberOfGuests from "../components/select-number-of-guests/select-number-of-guests"

function EntabeneBookingPage({ location }) {
  const [startDate, setStartDate] = useState(null)
  const [endDate, setEndDate] = useState(null)
  const [bookingValue, setBookingValue] = useState(undefined)
  const [guestValue, setGuestValue] = useState(undefined)

  const handleDatesChange = ({ startDate, endDate }) => {
    setStartDate(startDate)
    setEndDate(endDate)
  }

  useEffect(() => {
    if (location && location.state) {
      if (location.state.startDate) {
        setStartDate(moment(new Date(location.state.startDate)))
      }

      if (location.state.endDate) {
        setEndDate(moment(new Date(location.state.endDate)))
      }

      if (location.state.bookingValue) {
        setBookingValue(location.state.bookingValue)
      }

      if (location.state.guestValue) {
        setGuestValue(location.state.guestValue)
      }
    }
  }, [location])

  return (
    <>
      <SelectTypeOfBooking
        handleBookingChange={() => {}}
        bookingValue={bookingValue}
      />
      <div className={styles.inputFormsWrappers}>
        <DateRangePicker
          handleDatesChange={handleDatesChange}
          startDate={startDate}
          endDate={endDate}
        />
      </div>
      <SelectNumberOfGuests
        handleGuestChange={() => {}}
        guestValue={guestValue}
      />

      <EntabeneBookingForm />
    </>
  )
}

export default EntabeneBookingPage
