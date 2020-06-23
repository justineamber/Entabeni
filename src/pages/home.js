import React, { useState } from "react"
import Button from "react-bootstrap/Button"
import Carousel from "react-bootstrap/Carousel"
import Image from "react-bootstrap/Image"
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

const ControlledCarousel = () => {
  const [index, setIndex] = useState()

  const handleSelect = selectedIndex => {
    setIndex(selectedIndex)
  }

  /*  const optimizedImages = graphql`
    fragment optimizedImages on File {
      childImageSharp {
        fluid(maxWidth: 800, maxHeight: 400, quality: 80) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  `

  const query = graphql`
    query {
      image1: file(relativePath: { eq: "images/robbergbeach.jpg" }) {
        ...optimizedImages
      }

      image2: file(relativePath: { eq: "images/luxuryinterior.jpg" }) {
        ...optimizedImages
      }

      image3: file(relativePath: { eq: "images/mainbedroom.jpg" }) {
        ...optimizedImages
      }

      image4: file(relativePath: { eq: "images/familyonbeachtoddler.jpg" }) {
        ...optimizedImages
      }

      image5: file(relativePath: { eq: "images/seaviewhome.jpg" }) {
        ...optimizedImages
      }
    }
  ` */

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <Image
          fluid
          alt="First slide"
          className={styles.carousalImg}
          src={`/robbergbeach.jpg`}
        />
        <Carousel.Caption>
          <h2>The best location in Plett</h2>
          <h4>One block from the beach</h4>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <Image
          fluid
          className={styles.carousalImg}
          src={`/luxuryinterior.jpg`}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h2>Luxury interior</h2>
          <h4>The perks of staying at the Plett Beach House</h4>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image
          fluid
          className={styles.carousalImg}
          src={`/mainbedroom.jpg`}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h2>A sense of freedom</h2>
          <h4>Perfect holiday home for your family and friends.</h4>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image
          fluid
          className={styles.carousalImg}
          src={`/familyonbeachtoddler.jpg`}
          alt="Fourth slide"
        />
        <Carousel.Caption>
          <h2>One time group offer</h2>
          <h4>Plan ahead & book today</h4>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image
          fluid
          className={styles.carousalImg}
          src={`/seaviewhome.jpg`}
          alt="Fifth slide"
        />
        <Carousel.Caption>
          <h2>The best views in Plett</h2>
          <h4>Views of all the beaches in Plett</h4>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export const imageQuery = graphql`
  fragment plettImage on File {
    childImageSharp {
      fluid(maxWidth: 800, maxHeight: 400, quality: 80) {
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
      ...plettImage
    }
  }
`

const Home = ({ data }) => {
  function handleClick(e) {
    e.preventDefault()
  }
  /* const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "coupleonbeach.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 800, maxHeight: 400, quality: 80) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `) */

  return (
    <Layout pageInfo={{ pageName: "home" }}>
      <SEO title="Home" keywords={[`gatsby`, `react`, `bootstrap`]} />
      {/* {data.allFile.edges.map(({ node }) => (
        <Img fluid={node.childImageSharp.fluid} alt={node.base.split(".")[0]} />
      ))} */}
      <ControlledCarousel />
      <div className={styles.paragraphContainer}>
        <GiSeahorse />
        <h2 className={styles.h2Style}>Plett Beach House</h2>
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
          <Button variant="outline-light" href="/contact" onClick={handleClick}>
            Book your stay
          </Button>
        </div>
      </div>
      <div className={styles.paragraphContainer}>
        <GiSeahorse />
        <h2 className={styles.h2Style}>Life. Well lived.</h2>
        <p>
          As our valued guests always expect and deserve the best, our
          relentless pursuit for perfection never ends. We offer elegant luxury
          in the heart of a breath-taking nature. Sleep well and look good while
          doing it. Here 400-thread count sheets and rainfall showers come
          standard. Because we know that you will remember the countless
          beautiful memories when your holiday is over.
        </p>
        <Button variant="outline-dark" href="/gallery" onClick={handleClick}>
          Discover Plett Beach House
        </Button>
      </div>

      <CardGroup>
        <Card>
          <Card.Img variant="top" src={`/amenities.jpg`} alt="kitchen" />
          <Card.Body>
            <Card.Title>Fully kitted out kitchen</Card.Title>
            <Card.Text>
              Modern finishes, clean lines and fully kitted out. You can focus
              on cooking up a storm for your loved ones.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Designer kitchen</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img
            variant="top"
            src={`/bedroomonsuite.jpg`}
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
          <Card.Img
            variant="top"
            src={`/seaviewhome.jpg`}
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
          <Button
            variant="outline-dark"
            href="/amenities"
            onClick={handleClick}
          >
            View amenities
          </Button>
        </Card.Body>
      </Card>
      <div className={styles.imgHeadingContainer}>
        <div className={styles.imgOpacityHover}>
          {/* <Img
            fluid={data.file.childImageSharp.fluid}
            //fluid
            //src={`/holidaymode.jpg`}
            alt="Lady on beach looking at sunset"
          /> */}
        </div>
        <div className={styles.centeredTextOverImg}>
          <GiSeahorse />
          <h2>Ideal Spot in Plett</h2>
          <Button
            variant="outline-light"
            href="https://www.google.com/maps/@${34.06955925723115},${23.33735050000003},${8}z"
            onClick={handleClick}
          >
            Explore the area
          </Button>
        </div>
      </div>

      <div className={styles.mapSectionContainer}>
        <MapComponent />
      </div>
    </Layout>
  )
}

export default Home
