import React from "react"
import { Button } from "react-bootstrap"

const FixedBookingBtn = () => {
  function handleClick(e) {
    e.preventDefault()
    console.log("The button was clicked.")
  }

  return (
    <Button
      active
      block
      handleClick={handleClick}
      size="lg"
      type="button"
      variant="dark"
    >
      Book now
    </Button>
  )
}

export default FixedBookingBtn
