import React from "react"
import { Button } from "react-bootstrap"
import fixedMobileBookingButtonStyles from "./fixedMobileBookingButton.module.css"

const FixedMobileBookingButton = () => {
  function handleClick(e) {
    e.preventDefault()
    console.log("The button was clicked.")
  }

  return (
    <Button
      bsPrefix={fixedMobileBookingButtonStyles.mobileButton}
      active
      handleClick={handleClick}
      type="button"
    >
      Book now
    </Button>
  )
}

export default FixedMobileBookingButton
