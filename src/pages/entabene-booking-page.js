import React, { useState } from "react"
import Nav from "react-bootstrap/Nav"
import NavDropdown from "react-bootstrap/NavDropdown"
import Navbar from "react-bootstrap/Navbar"
import { Form } from "react-bootstrap"
import Button from "react-bootstrap/Button"
import DateRangePicker from "../components/date-range-picker/date-range-picker"
import { BsFillLockFill, BsPeopleFill, BsPlus, BsDash } from "react-icons/bs"
import EntabeneBookingForm from "../components/entabene-booking-form/entabene-booking-form"
import styles from "./pages-styles/pagestyles-css-modules.module.css"

function BookingPageForm({ location }) {
  const handleSelect = eventKey => `selected ${eventKey}`

  const [guestCountAdult, setGuestCountAdult] = useState(0)
  const handleClickIncreaseAdult = () => setGuestCountAdult(guestCountAdult + 1)
  const handleClickDecreaseAdult = () => setGuestCountAdult(guestCountAdult - 1)

  const [guestCountChild, setGuestCountChild] = useState(0)
  const handleClickIncreaseChild = () => setGuestCountChild(guestCountChild + 1)
  const handleClickDecreaseChild = () => setGuestCountChild(guestCountChild - 1)

  const [guestCountInfant, setGuestCountInfant] = useState(0)
  const handleClickIncreaseInfant = () =>
    setGuestCountInfant(guestCountInfant + 1)
  const handleClickDecreaseInfant = () =>
    setGuestCountInfant(guestCountInfant - 1)

  return (
    <>
      <Navbar bg="dark" expand="lg" fixed="top" variant="dark">
        <Navbar.Brand>Entabene</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto" onSelect={handleSelect}>
            <Button variant="outline-info">
              <BsFillLockFill />
            </Button>
            <NavDropdown title="Secure Booking Process" id="nav-dropdown">
              <NavDropdown.Item>Secure SSL Encryption</NavDropdown.Item>
              <NavDropdown.Item>Hotel Privacy Policy</NavDropdown.Item>
              <NavDropdown.Item>PCI DSS Compliant</NavDropdown.Item>
            </NavDropdown>

            <Form inline>
              <div className={styles.inputFormsWrappers}>
                {location.state && (
                  <DateRangePicker
                    handleDatesChange={() => {}}
                    startDate={location.state.startDate}
                    endDate={location.state.endDate}
                  />
                )}
              </div>
            </Form>

            <NavDropdown title="Guests" id="nav-dropdown">
              <BsPeopleFill />
              <NavDropdown.Item eventKey="4.1">
                Adults
                <div>{guestCountAdult}</div>
                <div>
                  <button onClick={handleClickIncreaseAdult}>
                    <BsPlus />
                  </button>
                </div>
                <div>
                  <button onClick={handleClickDecreaseAdult}>
                    <BsDash />
                  </button>
                </div>
              </NavDropdown.Item>
              <NavDropdown.Item eventKey="4.2">
                Children
                <div>{guestCountChild}</div>
                <div>
                  <button onClick={handleClickIncreaseChild}>
                    <BsPlus />
                  </button>
                </div>
                <div>
                  <button onClick={handleClickDecreaseChild}>
                    <BsDash />
                  </button>
                </div>
              </NavDropdown.Item>
              <NavDropdown.Item eventKey="4.3">
                Infants
                <div>{guestCountInfant}</div>
                <div>
                  <button onClick={handleClickIncreaseInfant}>
                    <BsPlus />
                  </button>
                </div>
                <div>
                  <button onClick={handleClickDecreaseInfant}>
                    <BsDash />
                  </button>
                </div>
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="NOK" id="nav-dropdown" onSelect={handleSelect}>
              <NavDropdown.Item eventKey="4.1">British Pounds</NavDropdown.Item>
              <NavDropdown.Item eventKey="4.2">
                Canadian Dollars
              </NavDropdown.Item>
              <NavDropdown.Item eventKey="4.3">Euros</NavDropdown.Item>
              <NavDropdown.Item eventKey="4.4">Japanese Yen</NavDropdown.Item>
              <NavDropdown.Item eventKey="4.5">
                Norwegian Krone
              </NavDropdown.Item>
              <NavDropdown.Item eventKey="4.6">US Dollars</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <EntabeneBookingForm />
    </>
  )
}

export default BookingPageForm
