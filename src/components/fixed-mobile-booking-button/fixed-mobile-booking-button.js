import React from "react"
import { Button } from "react-bootstrap"
import fixedMobileBookingButtonStyles from "./fixed-mobile-booking-button.module.css"
import { navigate } from "@reach/router"

const FixedMobileBookingButton = () => {
  const onSubmit = e => {
    e.preventDefault()
    navigate("/entabene-booking-page")
  }

  return (
    <Button
      bsPrefix={fixedMobileBookingButtonStyles.mobileButton}
      active
      onClick={onSubmit}
      type="button"
    >
      Book now
    </Button>
  )
}

export default FixedMobileBookingButton
