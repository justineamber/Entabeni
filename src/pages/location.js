import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styles from "./pagesStyles-css-modules.module.css"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { GiSeahorse } from "react-icons/gi"
import Button from "react-bootstrap/Button"
import MapComponent from "../components/MapComponent"

const Location = () => {
  function handleClick(e) {
    e.preventDefault()
  }
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "footstepsrobberg.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 800, maxHeight: 500, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Layout pageInfo={{ pageName: "Location" }}>
      <SEO
        title="Location"
        keywords={[`Plett`, `Beach`, `House`, `Location`]}
      />

      <div className={styles.imgNavMargin}>
        <div className={styles.imgHeadingContainer}>
          <div className={styles.imgOpacityHover}>
            <Img
              fluid={data.file.childImageSharp.fluid}
              alt="Exterior of Plett Beach House"
            />
          </div>
          <div className={styles.centeredTextOverImg}>
            <h1 className={styles.PlettBeachHouseH1}>Location</h1>
          </div>
        </div>
      </div>

      <div className={styles.paragraphContainer}>
        <GiSeahorse />
        <h2 className={styles.highlight}>Stay in the heart of Plett</h2>
        <p>
          A block from the town center and Beacon Isle beach, Plett Beach House
          puts Plettenberg Bay at your feet.
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
