import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styles from "./pagesStyles-css-modules.module.css"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { GiSeahorse } from "react-icons/gi"

const History = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "exteriorhome.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 800, maxHeight: 300, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Layout pageInfo={{ pageName: "History" }}>
      <SEO title="History" keywords={[`Plett`, `Beach`, `House`, `History`]} />

      <div className={styles.imgNavMargin}>
        <div className={styles.imgHeadingContainer}>
          <div className={styles.imgOpacityHover}>
            <Img
              fluid={data.file.childImageSharp.fluid}
              alt="Exterior of Plett Beach House"
            />
          </div>
          <div className={styles.centeredTextOverImg}>
            <h1 className={styles.PlettBeachHouseH1}>History</h1>
          </div>
        </div>
      </div>
      <div className={styles.paragraphContainer}>
        <GiSeahorse />
        <h2 className={styles.headingStyle}>About us</h2>
        <p className={styles.paragraphStyles}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <div className={styles.border}></div>
    </Layout>
  )
}
export default History
