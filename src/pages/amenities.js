import React from "react"
import styles from "./home-css-modules.module.css"
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
      <Card>
        <div className={styles.imgHeadingContainer}>
          <Img fluid={data.file.childImageSharp.fluid} alt="luxury bedroom" />
          <div className={styles.centeredTextOverImg}>
            <GiSeahorse />
            <h1 className={styles.PlettBeachHouseH1}>Amenities</h1>
          </div>
        </div>
        <Card.Body bsPrefix={styles.card}>
          <Card.Text>
            Luxury interiors and beatiful views. Staying at the Plett Beach
            House gives you access to Plett's most sought-after activities and
            attractions. Here’s what comes with your stay.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Amenities</small>
        </Card.Footer>
      </Card>

      <CardGroup>
        <Card>
          <Card.Img
            variant="top"
            src={`/anotherviewofkitchen.jpg`}
            alt="luxury kitchen"
          />
          <Card.Body bsPrefix={styles.card}>
            <Card.Title>Designer kitchen</Card.Title>
            <Card.Text>Fully kitted out designer kitchen.</Card.Text>
          </Card.Body>
          <Card.Footer></Card.Footer>
        </Card>
        <Card>
          <Card.Img
            variant="top"
            src={`/seaviewhome.jpg`}
            alt="home with sea view"
          />
          <Card.Body bsPrefix={styles.card}>
            <Card.Title>Beautiful panaromic views</Card.Title>
            <Card.Text>The best views in Plett.</Card.Text>
          </Card.Body>
          <Card.Footer></Card.Footer>
        </Card>
        <Card>
          <Card.Img
            variant="top"
            src={`/mainbedroom.jpg`}
            alt="luxury bedroom"
          />
          <Card.Body bsPrefix={styles.card}>
            <Card.Title>Luxury bedrooms</Card.Title>
            <Card.Text>En suite large, luxury bedrooms</Card.Text>
          </Card.Body>
          <Card.Footer></Card.Footer>
        </Card>
      </CardGroup>
    </Layout>
  )
}

export default Amenities
