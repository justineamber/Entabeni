import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { GiSeahorse } from "react-icons/gi"
import styles from "./pagesStyles-css-modules.module.css"
import CardGroup from "react-bootstrap/CardGroup"
import Card from "react-bootstrap/Card"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Button from "react-bootstrap/Button"

const Offers = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "lilo.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 800, maxHeight: 400, quality: 80) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Layout pageInfo={{ pageName: "Offers" }}>
      <SEO title="Local Attractions" />
      <div className={styles.imgNavMargin}>
        <div className={styles.imgHeadingContainer}>
          <div className={styles.imgOpacityHover}>
            <Img
              fluid={data.file.childImageSharp.fluid}
              alt="woman in lilo in the pool"
            />
          </div>
          <div className={styles.centeredTextOverImg}>
            <h1 className={styles.PlettBeachHouseH1}>Exclusive Offers</h1>
          </div>
        </div>
      </div>
      <div className={styles.paragraphContainer}>
        <GiSeahorse />
        <h2 className={styles.highlight}>View our offers</h2>
        <p>
          Browse our range of inspiring offers, seasonal specials and themed
          escapes.
        </p>
      </div>
      <CardGroup>
        <Card>
          <Card.Img variant="top" src={`/ballinpool.jpg`} alt="ball in pool" />
          <Card.Body>
            <Card.Title>Summer Special</Card.Title>
            <Card.Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Card.Text>
            <Button variant="outline-dark">Book now</Button>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Valid Nov - Dec 2020</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src={`/cocktails.jpg`} alt="cockatisl" />
          <Card.Body>
            <Card.Title>Gourmet Breaks</Card.Title>
            <Card.Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Card.Text>
            <Button variant="outline-dark">Book now</Button>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Valid Sep 2020</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img
            variant="top"
            src={`/familyonbeach.jpg`}
            alt="family playing on beach"
          />
          <Card.Body>
            <Card.Title>Family/Group Offer</Card.Title>
            <Card.Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Card.Text>
            <Button variant="outline-dark">Book now</Button>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Valid Oct - Jan 2021 </small>
          </Card.Footer>
        </Card>
      </CardGroup>
    </Layout>
  )
}

export default Offers
