import React from "react"
import { navigate } from "gatsby"
import Layout from "../components/layout/layout"
import SEO from "../components/seo/seo"
import styles from "./pages-styles/pagestyles-css-modules.module.css"
import { GiSeahorse } from "react-icons/gi"
import Button from "react-bootstrap/Button"
import MapComponent from "../components/map-component/map-component"
import NavbarBookingForm from "../components/navbar-booking-form/navbar-booking-form"

const Location = () => {
  function handleClick(e) {
    e.preventDefault()
  }

  const onSubmit = (startDate, endDate, bookingValue, guestValue) => {
    navigate("/entabeni-booking-page/", {
      state: {
        endDate: endDate.format("YYYY-MM-DD"),
        startDate: startDate.format("YYYY-MM-DD"),
        bookingValue,
        guestValue,
      },
    })
  }

  return (
    <Layout pageInfo={{ pageName: "Location" }}>
      <SEO
        title="Location"
        keywords={[`Plett`, `Entabeni`, `Beach`, `House`, `Location`]}
      />

      <div className={styles.paragraphContainerNoImageLocationPage}>
        <div className={styles.bookingFormWrapperAllPages}>
          <NavbarBookingForm onSubmit={onSubmit} />
        </div>
        <GiSeahorse />
        <h2 className={styles.headingStyle}>Stay in the heart of Plett</h2>
        <p className={styles.paragraphStyles}>
          A block from the town center and Beacon Isle beach, Entabeni puts
          Plettenberg Bay at your feet.
        </p>
        <Button
          variant="outline-dark"
          onClick={handleClick}
          href="https://www.google.com/maps/place/Bay+Lodge/@-34.0590199,23.3744413,17z/data=!3m1!4b1!4m8!3m7!1s0x0:0x43d38d1d6ade11c6!5m2!4m1!1i2!8m2!3d-34.0590199!4d23.37663"
          target="_blank"
          rel="noreferrer"
        >
          Get Directions
        </Button>
      </div>

      <div className={styles.mapSectionContainer}>
        <MapComponent />
      </div>
    </Layout>
  )
}
export default Location
