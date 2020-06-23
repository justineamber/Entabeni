import React from "react"
import styles from "./pagesStyles-css-modules.module.css"
import { GiSeahorse } from "react-icons/gi"
import Layout from "../components/layout"
import SEO from "../components/seo"
import CardGroup from "react-bootstrap/CardGroup"
import Card from "react-bootstrap/Card"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Amenities = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "luxurybedroom.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 800, maxHeight: 400, quality: 80) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Layout pageInfo={{ pageName: "Amenities" }}>
      <SEO title="Amenities" />
      <div className={styles.imgNavMargin}>
        <div className={styles.imgHeadingContainer}>
          <div className={styles.imgOpacityHover}>
            <Img fluid={data.file.childImageSharp.fluid} alt="luxury bedroom" />
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
          <Card.Img
            variant="top"
            src={`/anotherviewofkitchen.jpg`}
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
          <Card.Img
            variant="top"
            src={`/seaviewhome.jpg`}
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
          <Card.Img
            variant="top"
            src={`/mainbedroom.jpg`}
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
