import React from "react"
import styles from "./pagesStyles-css-modules.module.css"
import { GiSeahorse } from "react-icons/gi"
import Layout from "../components/layout"
import SEO from "../components/seo"
import CardGroup from "react-bootstrap/CardGroup"
import Card from "react-bootstrap/Card"
import { graphql } from "gatsby"
import Img from "gatsby-image"

export const imageQuery = graphql`
  fragment amenitiesImages on File {
    childImageSharp {
      fluid(maxWidth: 800, maxHeight: 500, quality: 100) {
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
    image1: file(relativePath: { eq: "luxurybedroom.jpg" }) {
      ...amenitiesImages
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
  return (
    <Layout pageInfo={{ pageName: "Amenities" }}>
      <SEO
        title="Amenities"
        keywords={[`Plett`, `Beach`, `House`, `Amenities`]}
      />
      <div className={styles.imgNavMargin}>
        <div className={styles.imgHeadingContainer}>
          <div className={styles.imgOpacityHover}>
            <Img
              fluid={data.image1.childImageSharp.fluid}
              alt="luxury bedroom"
            />
          </div>
          <div className={styles.centeredTextOverImg}>
            <h1 className={styles.PlettBeachHouseH1}>Amenities</h1>
          </div>
        </div>
      </div>
      <div className={styles.paragraphContainer}>
        <GiSeahorse />
        <h2 className={styles.highlight}>All the perks</h2>
        <p>
          Luxury interiors and beatiful views. Staying at the Plett Beach House
          gives you access to Plett's most sought-after activities and
          attractions. Here’s what comes with your stay.
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
            <Card.Title>Beautiful interior</Card.Title>
            <Card.Text>
              The home is modern and clean in design. The kitchen is fully
              kitted out. All bedrooms have linen, blankets, pillows and covers.
              The only things you have to bring are your bags.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Modern kitchen & interior</small>
          </Card.Footer>
        </Card>
        <Card>
          <Img
            variant="top"
            fluid={data.image3.childImageSharp.fluid}
            alt="home with sea view"
          />
          <Card.Body>
            <Card.Title>Central location and the best sea views</Card.Title>
            <Card.Text>
              Plett Beach House is in the ideal spot in Plett. From the house
              you have beauitiful views of all the beaches in Plett & the house
              is one block from the beach and close to restuarants and the town
              center.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Panaromic views</small>
          </Card.Footer>
        </Card>
        <Card>
          <Img
            variant="top"
            fluid={data.image4.childImageSharp.fluid}
            alt="luxury bedroom"
          />
          <Card.Body>
            <Card.Title>Luxury bedrooms</Card.Title>
            <Card.Text>En suite large, luxury bedrooms</Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted"> 5 Bedrooms, 4 bathrooms</small>
          </Card.Footer>
        </Card>
      </CardGroup>
    </Layout>
  )
}

export default Amenities
