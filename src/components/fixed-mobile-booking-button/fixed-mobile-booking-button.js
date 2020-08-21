import React from "react"
import { Button } from "react-bootstrap"
import fixedMobileBookingButtonStyles from "./fixed-mobile-booking-button.module.css"
import { Link } from "gatsby"

const FixedMobileBookingButton = () => {
  return (
    <Link to="/entabeni-booking-page/">
      <Button
        bsPrefix={fixedMobileBookingButtonStyles.mobileButton}
        type="button"
      >
        Book now
      </Button>
    </Link>
  )
}

export default FixedMobileBookingButton
