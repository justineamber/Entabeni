import React from "react"
import { Form, Col } from "react-bootstrap"

function GuestNumberSelector() {
  return (
    <>
      <Form.Group as={Col} controlId="formGridState">
        <Form.Label>Guests</Form.Label>
        <Form.Control as="select" defaultValue="">
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
    </>
  )
}

export default GuestNumberSelector
