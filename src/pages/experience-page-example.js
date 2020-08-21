import React from "react"
import { GiSeahorse } from "react-icons/gi"
import Layout from "../components/layout/layout"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import SEO from "../components/seo/seo"
import { useStaticQuery, graphql, navigate, Link } from "gatsby"
import Img from "gatsby-image"
import NavbarBookingForm from "../components/navbar-booking-form/navbar-booking-form"
import styles from "./pages-styles/pagestyles-css-modules.module.css"

const ExperienceBookingPage = () => {
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
    <Layout pageInfo={{ pageName: "Experience Booking Page" }}>
      <SEO
        title="Experience Booking Page"
        keywords={[
          `Plett`,
          `Entabeni`,
          `Beach`,
          `House`,
          `Local`,
          `Attractions`,
          `Experiences`,
          `Bookings`,
        ]}
      />
      <div className={styles.bookingFormWrapperAllPages}>
        <NavbarBookingForm onSubmit={onSubmit} />
      </div>
      <div className={styles.paragraphContainerNoImage}>
        <GiSeahorse />
        <h2 className={styles.headingStyle}>Experience title</h2>
        <p className={styles.paragraphStyles}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      <Card>
        <Img fluid={data.file.childImageSharp.fluid} alt="People kayaking" />
        <Card.Body>
          <Card.Title className={styles.cardTitleStyles}>
            Experience itinerary
          </Card.Title>
          <Card.Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Card.Text>
          <Link to="/entabeni-booking-page/">
            <Button variant="dark">Enquire now</Button>
          </Link>
        </Card.Body>
      </Card>
    </Layout>
  )
}

export default ExperienceBookingPage
