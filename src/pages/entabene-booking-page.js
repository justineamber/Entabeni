import React from "react"
import * as moment from "moment"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import SelectTypeOfBooking from "../components/select-type-of-booking/select-type-of-booking"
import DateRangePicker from "../components/date-range-picker/date-range-picker"
import GuestNumberSelector from "../components/guest-number-selector/guest-number-selector"
import EntabeneBookingForm from "../components/entabene-booking-form/entabene-booking-form"
import styles from "./pages-styles/pagestyles-css-modules.module.css"

function EntabeneBookingPage({ location }) {
  const handleSelect = eventKey => `selected ${eventKey}`

  const endDate = moment(new Date(location.state.endDate))
  const startDate = moment(new Date(location.state.startDate))

  return (
    <>
      <Navbar bg="dark" expand="lg" fixed="top" variant="dark">
        <Navbar.Brand>Entabene</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto" onSelect={handleSelect}>
            <SelectTypeOfBooking
              handleBookingChange={() => {}}
              bookingValue={location.state.bookingValue}
            />
            <div className={styles.inputFormsWrappers}>
              <DateRangePicker
                handleDatesChange={() => {}}
                startDate={startDate}
                endDate={endDate}
              />
            </div>
            <GuestNumberSelector />
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <EntabeneBookingForm />
    </>
  )
}

export default EntabeneBookingPage
