import React, { useState, useEffect } from "react"
import * as moment from "moment"
import { GiSeahorse } from "react-icons/gi"
import EntabeniBookingForm from "../components/entabeni-booking-form/entabeni-booking-form"
import styles from "./pages-styles/pagestyles-css-modules.module.css"
import DateRangePicker from "../components/date-range-picker/date-range-picker"
import SelectTypeOfBooking from "../components/select-type-of-booking/select-type-of-booking"
import SelectNumberOfGuests from "../components/select-number-of-guests/select-number-of-guests"

function EntabeniBookingPage({ location }) {
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
      <div className={styles.paragraphContainerBookingPage}>
        <GiSeahorse />
        <h2 className={styles.headingStyle}>Entabene</h2>
        <p className={styles.paragraphStyles}>Secure booking</p>
      </div>
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
      <EntabeniBookingForm />
    </>
  )
}

export default EntabeniBookingPage
