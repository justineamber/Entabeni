import React from "react"
import Button from "react-bootstrap/Button"
import Table from "react-bootstrap/Table"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styles from "./pagesStyles-css-modules.module.css"
import MapComponent from "../components/MapComponent"
import { GiSeahorse, GiSmartphone, GiPositionMarker } from "react-icons/gi"
import CardGroup from "react-bootstrap/CardGroup"
import Card from "react-bootstrap/Card"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import ControlledCarousel from "../components/carousal"
import { Link } from "gatsby"

export const imageQuery = graphql`
  fragment optimizeHomeImgs on File {
    childImageSharp {
      fluid(maxWidth: 800, maxHeight: 500, quality: 100) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`

export const query = graphql`
  query HomePageQuery {
    site {
      siteMetadata {
        title
      }
    }
    image1: file(relativePath: { eq: "coupleonbeach.jpg" }) {
      ...optimizeHomeImgs
    }

    image2: file(relativePath: { eq: "holidaymode.jpg" }) {
      ...optimizeHomeImgs
    }

    image3: file(relativePath: { eq: "amenities.jpg" }) {
      ...optimizeHomeImgs
    }

    image4: file(relativePath: { eq: "bedroomonsuite.jpg" }) {
      ...optimizeHomeImgs
    }

    image5: file(relativePath: { eq: "seaviewhome.jpg" }) {
      ...optimizeHomeImgs
    }

    slide1: file(relativePath: { eq: "robbergbeach.jpg" }) {
      ...optimizeHomeImgs
    }

    slide2: file(relativePath: { eq: "luxuryinterior.jpg" }) {
      ...optimizeHomeImgs
    }

    slide3: file(relativePath: { eq: "mainbedroom.jpg" }) {
      ...optimizeHomeImgs
    }

    slide4: file(relativePath: { eq: "familyonbeachtoddler.jpg" }) {
      ...optimizeHomeImgs
    }

    slide5: file(relativePath: { eq: "seaviewhome.jpg" }) {
      ...optimizeHomeImgs
    }
  }
`

const Home = ({ data }) => {
  function handleClick(e) {
    e.preventDefault()
  }

  return (
    <Layout pageInfo={{ pageName: "home" }}>
      <SEO title="Home" keywords={[`Plett`, `Beach`, `House`]} />
      <ControlledCarousel
        slideImage1={data.slide1.childImageSharp.fluid}
        slideImage2={data.slide2.childImageSharp.fluid}
        slideImage3={data.slide3.childImageSharp.fluid}
        slideImage4={data.slide4.childImageSharp.fluid}
        slideImage5={data.slide5.childImageSharp.fluid}
      />
      <div className={styles.paragraphContainer}>
        <GiSeahorse />
        <h1 className={styles.headingStyle}>{data.site.siteMetadata.title}</h1>
        <p>
          Your adventure begins when you enter through the gates of our
          remarkable holiday home. Discover our exquisite interiors, beautiful
          coastal town, pristine beaches, friendly locals and wealth of
          activities in the garden route.
        </p>
        <p>
          Plett Beach House is due to reopen 2nd July. In the meantime, our team
          will be working hard to ensure our hotel is ready to welcome you back
          soon.
        </p>
      </div>
      <Table responsive className={styles.tableAddressContainer}>
        <thead>
          <tr>
            <th>
              <a
                className={styles.SvgAddress}
                href="https://www.google.com/maps/place/Bay+Lodge/@-34.0590199,23.3744413,17z/data=!3m1!4b1!4m8!3m7!1s0x0:0x43d38d1d6ade11c6!5m2!4m1!1i2!8m2!3d-34.0590199!4d23.37663"
                target="_blank"
                rel="noreferrer"
              >
                <GiPositionMarker />
                Plettenberg Bay, South Africa
              </a>
            </th>
          </tr>
        </thead>
        <thead>
          <tr>
            <td>
              <span itemprop="telephone">
                <a href="tel:+4796801110">
                  <GiSmartphone />
                  +47 968 01110
                </a>
              </span>
            </td>
          </tr>
        </thead>
      </Table>

      <div className={styles.imgHeadingContainer}>
        <div className={styles.imgOpacityHover}>
          <Img
            fluid={data.image1.childImageSharp.fluid}
            alt="couple walking on beach"
          />
        </div>
        <div className={styles.centeredTextOverImg}>
          <GiSeahorse />
          <h2>Paradise Found</h2>
          <Link to="/contact" active>
            <Button variant="outline-light" handleClick={handleClick}>
              Book your stay
            </Button>
          </Link>
        </div>
      </div>
      <div className={styles.paragraphContainer}>
        <GiSeahorse />
        <h2 className={styles.headingStyle}>Life. Well lived.</h2>
        <p>
          As our valued guests always expect and deserve the best, our
          relentless pursuit for perfection never ends. We offer elegant luxury
          in the heart of a breath-taking nature. Sleep well and look good while
          doing it. Here 400-thread count sheets and rainfall showers come
          standard. Because we know that you will remember the countless
          beautiful memories when your holiday is over.
        </p>
        <Link to="/gallery" active>
          <Button variant="outline-dark" handleClick={handleClick}>
            Discover Plett Beach House
          </Button>
        </Link>
      </div>

      <CardGroup>
        <Card>
          <Img
            variant="top"
            fluid={data.image3.childImageSharp.fluid}
            alt="kitchen"
          />
          <Card.Body>
            <Card.Title>Modern home</Card.Title>
            <Card.Text>
              Modern finishes and clean lines. This holiday home's interior is
              elegant and simple.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Elegant interior</small>
          </Card.Footer>
        </Card>
        <Card>
          <Img
            fluid={data.image4.childImageSharp.fluid}
            variant="top"
            alt="onsuite bedroom"
          />
          <Card.Body>
            <Card.Title>Luxury signiture</Card.Title>
            <Card.Text>
              Our 250 sq. ft. full bed guest rooms are beautifully decorated and
              includes textured wood accents, ocean-hued carpeting,
              vintage-inspired furniture, clean lines and sleek décor. Refresh
              in the bathroom with white marble rain shower and illuminated
              vanity mirrors, premium bath products and cozy bathrobe. Enjoy
              complimentary WiFi, a 55-inch HDTV, clock radio with Bluetooth, as
              well as ample outlets for charging any device. Three en suite
              bedrooms.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted"> 5 bedrooms and 4 bathrooms</small>
          </Card.Footer>
        </Card>
        <Card>
          <Img
            fluid={data.image5.childImageSharp.fluid}
            variant="top"
            alt="seaview from Plett Beach House"
          />
          <Card.Body>
            <Card.Title>Wake up to the best views of Plett</Card.Title>
            <Card.Text>
              Located in central Plettenberg Bay and walking distance to the
              beach, shops and restaurants. The stunning Plett Beach House has
              beautiful views of the Beacon Isle beach, Robberg Heads and the
              Tsitsikamma mountain range.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Panaromic views</small>
          </Card.Footer>
        </Card>
      </CardGroup>

      <Card className="text-center">
        <Card.Body>
          <Card.Title>All the perks</Card.Title>
          <Card.Text>
            The perks of staying at the Plett Beach House extend far beyond our
            luxurious rooms and interior. Staying at the Plett Beach House gives
            you access to Plett's most sought-after activities and attractions.
            Here’s what comes with your stay.
          </Card.Text>
          <Link to="/amenities" active>
            <Button variant="outline-dark" handleClick={handleClick}>
              View amenities
            </Button>
          </Link>
        </Card.Body>
      </Card>
      <div className={styles.imgHeadingContainer}>
        <div className={styles.imgOpacityHover}>
          <Img
            fluid={data.image2.childImageSharp.fluid}
            alt="Lady on beach looking at sunset"
          />
        </div>
        <div className={styles.centeredTextOverImg}>
          <GiSeahorse />
          <h2>Ideal Spot in Plett</h2>
          <Link to="/location" active>
            <Button variant="outline-light" handleClick={handleClick}>
              Explore the area
            </Button>
          </Link>
        </div>
      </div>

      <div className={styles.mapSectionContainer}>
        <MapComponent />
      </div>
    </Layout>
  )
}

export default Home
