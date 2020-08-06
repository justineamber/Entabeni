import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/seo/seo"
import { GiSeahorse } from "react-icons/gi"
import styles from "./pages-styles/pagestyles-css-modules.module.css"
import CardGroup from "react-bootstrap/CardGroup"
import Card from "react-bootstrap/Card"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Button from "react-bootstrap/Button"
import { Link } from "gatsby"
import NavbarBookingForm from "../components/navbar-booking-form/navbar-booking-form"

export const imageQuery = graphql`
  fragment offersImages on File {
    childImageSharp {
      fluid(maxWidth: 800, maxHeight: 300, quality: 100) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`

export const query = graphql`
  query OffersPageQuery {
    site {
      siteMetadata {
        title
      }
    }
    image1: file(relativePath: { eq: "lilo.jpg" }) {
      ...offersImages
    }

    image2: file(relativePath: { eq: "golfshot.jpg" }) {
      ...offersImages
    }

    image3: file(relativePath: { eq: "fish+chips.jpg" }) {
      ...offersImages
    }

    image4: file(relativePath: { eq: "familyonbeach.jpg" }) {
      ...offersImages
    }
  }
`

const Offers = ({ data }) => {
  function handleClick(e) {
    e.preventDefault()
    console.log("The button was clicked.")
  }

  return (
    <Layout pageInfo={{ pageName: "Offers" }}>
      <SEO
        title="Offers"
        keywords={[`Plett`, `Beach`, `House`, `Special`, `Offers`]}
      />
      <div className={styles.paragraphContainerNoImage}>
        <div className={styles.bookingFormWrapperAllPages}>
          <NavbarBookingForm />
        </div>
        <GiSeahorse />
        <h2 className={styles.headingStyle}>View our offers</h2>
        <p className={styles.paragraphStyles}>
          Browse our range of inspiring offers, seasonal specials and themed
          escapes.
        </p>
      </div>
      <CardGroup>
        <Card>
          <Img
            variant="top"
            fluid={data.image2.childImageSharp.fluid}
            alt="ball in pool"
          />
          <Card.Body>
            <Card.Title>Summer Special</Card.Title>
            <Card.Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Card.Text>
            <Link to="/contact">
              <Button variant="outline-dark" onClick={handleClick}>
                Book now
              </Button>
            </Link>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Valid Nov - Dec 2020</small>
          </Card.Footer>
        </Card>
        <Card>
          <Img
            variant="top"
            fluid={data.image3.childImageSharp.fluid}
            alt="cocktails"
          />
          <Card.Body>
            <Card.Title>Gourmet Breaks</Card.Title>
            <Card.Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Card.Text>
            <Link to="/contact">
              <Button variant="outline-dark" onClick={handleClick}>
                Book now
              </Button>
            </Link>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Valid Sep 2020</small>
          </Card.Footer>
        </Card>
        <Card>
          <Img
            variant="top"
            fluid={data.image4.childImageSharp.fluid}
            alt="family playing on beach"
          />
          <Card.Body>
            <Card.Title>Family/Group Offer</Card.Title>
            <Card.Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Card.Text>
            <Link to="/contact">
              <Button variant="outline-dark" onClick={handleClick}>
                Book now
              </Button>
            </Link>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Valid Oct - Jan 2021 </small>
          </Card.Footer>
        </Card>
      </CardGroup>

      <div className={styles.imageOpacityHover}>
        <Img
          fluid={data.image1.childImageSharp.fluid}
          alt="woman in lilo in the pool"
        />
      </div>
    </Layout>
  )
}

export default Offers
