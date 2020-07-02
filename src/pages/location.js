import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styles from "./pagesStyles-css-modules.module.css"
import { GiSeahorse } from "react-icons/gi"
import Button from "react-bootstrap/Button"
import MapComponent from "../components/MapComponent"

const Location = () => {
  function handleClick(e) {
    e.preventDefault()
  }

  return (
    <Layout pageInfo={{ pageName: "Location" }}>
      <SEO
        title="Location"
        keywords={[`Plett`, `Beach`, `House`, `Location`]}
      />

      <div className={styles.paragraphContainerNoImgLP}>
        <GiSeahorse />
        <h2 className={styles.headingStyle}>Stay in the heart of Plett</h2>
        <p className={styles.paragraphStyles}>
          A block from the town center and Beacon Isle beach, Entabene Hill puts
          Plettenberg Bay at your feet.
        </p>
        <Button
          variant="outline-dark"
          handleClick={handleClick}
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
