import React from "react"
import { Form, Col } from "react-bootstrap"
import selectNumberOfGuestsStyles from "./select-number-of-guests.module.css"

function SelectNumberOfGuests({ guestValue, handleGuestChange, children }) {
  return (
    <>
      <Col xs="auto">
        <Form.Group as={Col} controlId="formGridState">
          <Form.Label bsPrefix={selectNumberOfGuestsStyles.selectLabelStyles}>
            Guests
          </Form.Label>
          {children}
          <Form.Control
            as="select"
            onChange={handleGuestChange}
            value={guestValue}
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
            <option>9</option>
            <option>10</option>
            <option>12</option>
          </Form.Control>
        </Form.Group>
      </Col>
    </>
  )
}

export default SelectNumberOfGuests
