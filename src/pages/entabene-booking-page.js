import React, { useState } from "react"
import Nav from "react-bootstrap/Nav"
import NavDropdown from "react-bootstrap/NavDropdown"
import Navbar from "react-bootstrap/Navbar"
import Button from "react-bootstrap/Button"
import DateRangePicker from "../components/date-range-picker/date-range-picker"
import { BsFillLockFill, BsPeopleFill, BsPlus, BsDash } from "react-icons/bs"

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
    <Navbar bg="dark" variant="dark">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav variant="dark" activeKey="1" onSelect={handleSelect}>
          <Button variant="outline-info">
            <BsFillLockFill />
          </Button>
          <NavDropdown title="Secure Booking Process" id="nav-dropdown">
            <NavDropdown.Item>Secure SSL Encryption</NavDropdown.Item>
            <NavDropdown.Item>Hotel Privacy Policy</NavDropdown.Item>
            <NavDropdown.Item>PCI DSS Compliant</NavDropdown.Item>
          </NavDropdown>

          <Nav.Item>
            <Nav.Link eventKey="2" title="Item">
              {location.state && (
                <DateRangePicker
                  handleDatesChange={() => {}}
                  startDate={location.state.startDate}
                  endDate={location.state.endDate}
                />
              )}
            </Nav.Link>
          </Nav.Item>
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
          <NavDropdown title="NOK" id="nav-dropdown">
            <NavDropdown.Item eventKey="4.1">British Pounds</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.2">Canadian Dollars</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.3">Euros</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.4">Japanese Yen</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.5">Norwegian Krone</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.6">US Dollars</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
export default BookingPageForm
