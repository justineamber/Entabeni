import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styles from "./pagesStyles-css-modules.module.css"
import { GiSeahorse } from "react-icons/gi"
import Table from "react-bootstrap/Table"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const GuestReviews = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "kayak.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 800, maxHeight: 300, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Layout pageInfo={{ pageName: "Guest Reviews" }}>
      <SEO
        title="Home"
        keywords={[`Plett`, `Beach`, `House`, `Guest`, `Reviews`]}
      />

      <div className={styles.paragraphContainerNoImg}>
        <GiSeahorse />
        <h2 className={styles.headingStyle}>More from our Guests...</h2>
        <p className={styles.paragraphStyles}>
          At Plett Beach Houe we value guest feedback as it helps us to improve
          our service. Here are some of our favourite guest testimonials:
        </p>
      </div>
      <Table responsive="sm">
        <tbody>
          <tr>
            <td>Review 1</td>
          </tr>
          <tr>
            <td>Review 2</td>
          </tr>
          <tr>
            <td>Review 3</td>
          </tr>
        </tbody>
      </Table>
      <div className={styles.imgOpacityHover}>
        <Img fluid={data.file.childImageSharp.fluid} alt="People kayaking" />
      </div>
    </Layout>
  )
}

export default GuestReviews
