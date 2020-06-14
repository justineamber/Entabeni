import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styles from "./localAttractions-css-modules.module.css"
import Image from "react-bootstrap/Image"
import { GiSeahorse } from "react-icons/gi"

const History = () => (
  <Layout pageInfo={{ pageName: "History" }}>
    <SEO title="History" />
    <div className={styles.imgHeadingContainer}>
      <Image fluid src={`/exteriorhome.jpg`} alt="Plett Beach House exterior" />

      <div className={styles.centeredTextOverImg}>
        <GiSeahorse />
        <h1 className={styles.LocalAttractionsH1}>Our Story</h1>
      </div>
    </div>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </p>
  </Layout>
)

export default History
