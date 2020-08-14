import React from "react"
import * as moment from "moment"
import { Link } from "gatsby"
import Nav from "react-bootstrap/Nav"
import Container from "react-bootstrap/Container"
import Navbar from "react-bootstrap/Navbar"
import SelectTypeOfBooking from "../components/select-type-of-booking/select-type-of-booking"
import DateRangePicker from "../components/date-range-picker/date-range-picker"
import SelectNumberOfGuests from "../components/select-number-of-guests/select-number-of-guests"
import EntabeneBookingForm from "../components/entabene-booking-form/entabene-booking-form"
import styles from "./pages-styles/pagestyles-css-modules.module.css"

function EntabeneBookingPage({ location }) {
  const handleSelect = eventKey => `selected ${eventKey}`

  const endDate = moment(new Date(location.state.endDate))
  const startDate = moment(new Date(location.state.startDate))

  return (
    <>
      <Navbar bg="dark" expand="lg" fixed="top" variant="dark">
        <Container>
          <Navbar.Brand bsPrefix={styles.entabeneBookingPageLogoStyles}>
            <Link to="/" className="nav-link">
              Entabene
            </Link>
          </Navbar.Brand>
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
              <SelectNumberOfGuests
                handleGuestChange={() => {}}
                guestValue={location.state.guestValue}
              />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <EntabeneBookingForm />
    </>
  )
}

export default EntabeneBookingPage
