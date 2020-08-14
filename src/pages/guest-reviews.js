import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/seo/seo"
import styles from "./pages-styles/pagestyles-css-modules.module.css"
import { GiSeahorse } from "react-icons/gi"
import Table from "react-bootstrap/Table"
import { useStaticQuery, graphql, navigate } from "gatsby"
import Img from "gatsby-image"
import NavbarBookingForm from "../components/navbar-booking-form/navbar-booking-form"

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

  const onSubmit = (startDate, endDate, bookingValue, guestValue) => {
    navigate("/entabene-booking-page/", {
      state: {
        endDate: endDate.format("YYYY-MM-DD"),
        startDate: startDate.format("YYYY-MM-DD"),
        bookingValue,
        guestValue,
      },
    })
  }
  return (
    <Layout pageInfo={{ pageName: "Guest reviews" }}>
      <SEO
        title="Guest reviews"
        keywords={[`Plett`, `Beach`, `House`, `Guest`, `Reviews`, `Entebene`]}
      />
      <div className={styles.bookingFormWrapperAllPages}>
        <NavbarBookingForm onSubmit={onSubmit} />
      </div>
      <div className={styles.paragraphContainerNoImage}>
        <GiSeahorse />
        <h2 className={styles.headingStyle}>More from our Guests...</h2>
        <p className={styles.paragraphStyles}>
          At Entabene we value guest feedback as it helps us to improve our
          service. Here are some of our favourite guest testimonials:
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
      <div className={styles.imageOpacityHover}>
        <Img fluid={data.file.childImageSharp.fluid} alt="People kayaking" />
      </div>
    </Layout>
  )
}

export default GuestReviews
