import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styles from "./home-css-modules.module.css"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { GiSeahorse } from "react-icons/gi"

const History = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "exteriorhome.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 800, maxHeight: 400, quality: 80) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Layout pageInfo={{ pageName: "History" }}>
      <SEO title="History" />
      <div className={styles.imgHeadingContainer}>
        <Img
          fluid={data.file.childImageSharp.fluid}
          alt="Exterior of Plett Beach House"
        />
        <div className={styles.centeredTextOverImg}>
          <GiSeahorse />
          <h1 className={styles.PlettBeachHouseH1}>Our story</h1>
        </div>
      </div>
      <p className={styles.paragraph}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
    </Layout>
  )
}
export default History
