import React from "react"
import styles from "./localAttractions-css-modules.module.css"
import Image from "react-bootstrap/Image"
import { GiSeahorse } from "react-icons/gi"
import Layout from "../components/layout"
import SEO from "../components/seo"

function Amenities() {
  return (
    <Layout pageInfo={{ pageName: "Amenities" }}>
      <SEO title="Amenities" />
      <div className={styles.imgHeadingContainer}>
        <Image fluid src={`/luxurybedroom.jpg`} alt="luxury bedroom" />
        <div className={styles.centeredTextOverImg}>
          <GiSeahorse />
          <h1 className={styles.LocalAttractionsH1}>Amenities</h1>
        </div>
      </div>
      <p>
        The perks of staying at the Plett Beach House extend far beyond our
        luxurious rooms and beautiful views. Staying at the Plett Beach House
        gives you access to Plett's most sought-after activities and
        attractions. Here’s what comes with your stay.
      </p>

      <Image
        fluid
        className={styles.imgWrapper}
        src={`/anotherviewofkitchen.jpg`}
        alt="luxury kitchen"
      />

      <Image
        fluid
        className={styles.imgWrapper}
        src={`/mainbedroom.jpg`}
        alt="luxury bedroom"
      />
      <Image
        fluid
        className={styles.imgWrapper}
        src={`/luxurybathroom.jpg`}
        alt="luxury bathroom"
      />
      <Image
        fluid
        className={styles.imgWrapper}
        src={`/poolsidehome.jpg`}
        alt="pool with seats around its"
      />
      <Image
        fluid
        className={styles.imgWrapper}
        src={`/seaviewhome.jpg`}
        alt="home with sea view"
      />
    </Layout>
  )
}

export default Amenities
