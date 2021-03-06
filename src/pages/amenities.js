import React from "react"
import styles from "./pages-styles/pagestyles-css-modules.module.css"
import { GiSeahorse } from "react-icons/gi"
import Layout from "../components/layout/layout"
import SEO from "../components/seo/seo"
import CardGroup from "react-bootstrap/CardGroup"
import Card from "react-bootstrap/Card"
import { graphql, navigate } from "gatsby"
import Img from "gatsby-image"
import NavbarBookingForm from "../components/navbar-booking-form/navbar-booking-form"

export const imageQuery = graphql`
  fragment amenitiesImages on File {
    childImageSharp {
      fluid(maxWidth: 800, maxHeight: 300, quality: 100) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`

export const query = graphql`
  query AmenitiesPageQuery {
    site {
      siteMetadata {
        title
      }
    }

    image2: file(relativePath: { eq: "anotherviewofkitchen.jpg" }) {
      ...amenitiesImages
    }

    image3: file(relativePath: { eq: "seaviewhome.jpg" }) {
      ...amenitiesImages
    }

    image4: file(relativePath: { eq: "mainbedroom.jpg" }) {
      ...amenitiesImages
    }
  }
`

const Amenities = ({ data }) => {
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
    <Layout pageInfo={{ pageName: "Amenities" }}>
      <SEO
        title="Amenities"
        keywords={[`Plett`, `Beach`, `House`, `Amenities`, `Entabeni`]}
      />
      <div className={styles.bookingFormWrapperAllPages}>
        <NavbarBookingForm onSubmit={onSubmit} />
      </div>
      <div className={styles.paragraphContainerNoImage}>
        <GiSeahorse />
        <h2 className={styles.headingStyle}>All the perks</h2>
        <p className={styles.paragraphStyles}>
          Luxury interiors and beatiful views. Staying at the Entabeni gives you
          access to Plett's most sought-after activities and attractions. Here’s
          what comes with your stay.
        </p>
      </div>
      <CardGroup>
        <Card>
          <Img
            variant="top"
            fluid={data.image2.childImageSharp.fluid}
            alt="luxury kitchen"
          />
          <Card.Body>
            <Card.Title className={styles.cardTitleStyles}>
              Beautiful interior
            </Card.Title>
            <Card.Text>
              The home is modern and clean in design. The kitchen is fully
              kitted out. All bedrooms have linen, blankets, pillows and covers.
              The only things you have to bring are your bags.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Img
            variant="top"
            fluid={data.image3.childImageSharp.fluid}
            alt="home with sea view"
          />
          <Card.Body>
            <Card.Title className={styles.cardTitleStyles}>
              Central location and the best sea views
            </Card.Title>
            <Card.Text>
              Entabeni is in the ideal spot in Plett. From the house you have
              beauitiful views of all the beaches in Plett &amp; the house is
              one block from the beach and close to restuarants and the town
              center.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Img
            variant="top"
            fluid={data.image4.childImageSharp.fluid}
            alt="luxury bedroom"
          />
          <Card.Body>
            <Card.Title className={styles.cardTitleStyles}>
              Luxury bedrooms
            </Card.Title>
            <Card.Text>En suite large, luxury bedrooms</Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
    </Layout>
  )
}

export default Amenities
