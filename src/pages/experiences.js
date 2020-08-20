import React from "react"
import styles from "./pages-styles/pagestyles-css-modules.module.css"
import { GiSeahorse } from "react-icons/gi"
import Layout from "../components/layout/layout"
import CardGroup from "react-bootstrap/CardGroup"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import SEO from "../components/seo/seo"
import { graphql, navigate } from "gatsby"
import Img from "gatsby-image"
import { Link } from "gatsby"
import NavbarBookingForm from "../components/navbar-booking-form/navbar-booking-form"

export const imageQuery = graphql`
  fragment localAttractionsImages on File {
    childImageSharp {
      fluid(maxWidth: 800, maxHeight: 350, quality: 100) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`

export const query = graphql`
  query LocalAttractionsPageQuery {
    site {
      siteMetadata {
        title
      }
    }
    image1: file(relativePath: { eq: "vacaymood.jpg" }) {
      ...localAttractionsImages
    }

    image2: file(relativePath: { eq: "golfshot.jpg" }) {
      ...localAttractionsImages
    }

    image4: file(relativePath: { eq: "poloplayers.jpg" }) {
      ...localAttractionsImages
    }

    image5: file(relativePath: { eq: "safari.jpg" }) {
      ...localAttractionsImages
    }

    image6: file(relativePath: { eq: "seals.jpg" }) {
      ...localAttractionsImages
    }

    image7: file(relativePath: { eq: "monkeyland.jpg" }) {
      ...localAttractionsImages
    }

    image8: file(relativePath: { eq: "spas.jpg" }) {
      ...localAttractionsImages
    }

    image9: file(relativePath: { eq: "farmersmarket.jpg" }) {
      ...localAttractionsImages
    }

    image10: file(relativePath: { eq: "dolphins.jpg" }) {
      ...localAttractionsImages
    }

    image11: file(relativePath: { eq: "kayak.jpg" }) {
      ...localAttractionsImages
    }

    image12: file(relativePath: { eq: "wildwatersplett.jpg" }) {
      ...localAttractionsImages
    }

    image13: file(relativePath: { eq: "robbergnaturereservepath.jpg" }) {
      ...localAttractionsImages
    }
  }
`
const Experiences = ({ data }) => {
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
    <Layout pageInfo={{ pageName: "Experiences" }}>
      <SEO
        title="Experiences"
        keywords={[
          `Plett`,
          `Entabene`,
          `Beach`,
          `House`,
          `Local`,
          `Attractions`,
          `Experiences`,
        ]}
      />
      <div className={styles.bookingFormWrapperAllPages}>
        <NavbarBookingForm onSubmit={onSubmit} />
      </div>
      <div className={styles.paragraphContainerNoImage}>
        <GiSeahorse />
        <h2 className={styles.headingStyle}>Things to do</h2>
        <p className={styles.paragraphStyles}>
          Plett offers many fun and luxurious choices for you to enjoy that will
          always make you smile. You can play polo in the morning, have lunch on
          a wine farm and be at the beach in the afternoon. <br />
          To get exclusive offers through our affiliated partners, view the
          below activities. There is always much more for you to discover at
          Plettenberg Bay and the surrounding area.
        </p>
        <p className={styles.paragraphStyles}>
          Please note: Advance bookings are highly recommended to avoid
          disappointment.
        </p>
      </div>

      <CardGroup>
        <Card>
          <Img
            fluid={data.image1.childImageSharp.fluid}
            alt="Lady wearing hat"
          />
          <Card.Body>
            <Card.Title className={styles.cardTitleStyles}>
              Experience title
            </Card.Title>
            <Card.Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </Card.Text>
            <Link to="/experience-page-example">
              <Button variant="dark">View itinerary</Button>
            </Link>
          </Card.Body>
        </Card>

        <Card>
          <Img
            fluid={data.image2.childImageSharp.fluid}
            alt="Man playing golf at Goose Valley Golf Club"
          />
          <Card.Body>
            <Card.Title className={styles.cardTitleStyles}>
              Experience title
            </Card.Title>
            <Card.Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </Card.Text>
            <Link to="/experience-page-example">
              <Button variant="dark">View itinerary</Button>
            </Link>
          </Card.Body>
        </Card>

        <Card>
          <Img fluid={data.image8.childImageSharp.fluid} alt="lady at spa" />
          <Card.Body>
            <Card.Title className={styles.cardTitleStyles}>
              Experience title
            </Card.Title>
            <Card.Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </Card.Text>
            <Link to="/experience-page-example">
              <Button variant="dark">View itinerary</Button>
            </Link>
          </Card.Body>
        </Card>
      </CardGroup>

      <CardGroup>
        <Card>
          <Img
            fluid={data.image7.childImageSharp.fluid}
            alt="monkey in tree at Monkey Land"
          />
          <Card.Body>
            <Card.Title className={styles.cardTitleStyles}>
              Experience title
            </Card.Title>
            <Card.Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </Card.Text>
            <Link to="/experience-page-example">
              <Button variant="dark">View itinerary</Button>
            </Link>
          </Card.Body>
        </Card>

        <Card>
          <Img
            fluid={data.image9.childImageSharp.fluid}
            alt="fruit annd vegetables in box at farmers market"
          />
          <Card.Body>
            <Card.Title className={styles.cardTitleStyles}>
              Experience title
            </Card.Title>
            <Card.Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </Card.Text>
            <Link to="/experience-page-example">
              <Button variant="dark">View itinerary</Button>
            </Link>
          </Card.Body>
        </Card>

        <Card>
          <Img
            fluid={data.image10.childImageSharp.fluid}
            alt="two whales in the sea"
          />
          <Card.Body>
            <Card.Title className={styles.cardTitleStyles}>
              Experience title
            </Card.Title>
            <Card.Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </Card.Text>
            <Link to="/experience-page-example">
              <Button variant="dark">View itinerary</Button>
            </Link>
          </Card.Body>
        </Card>
      </CardGroup>

      <CardGroup>
        <Card>
          <Img fluid={data.image6.childImageSharp.fluid} alt="baby seal" />
          <Card.Body>
            <Card.Title className={styles.cardTitleStyles}>
              Experience title
            </Card.Title>
            <Card.Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </Card.Text>
            <Link to="/experience-page-example">
              <Button variant="dark">View itinerary</Button>
            </Link>
          </Card.Body>
        </Card>

        <Card>
          <Img
            fluid={data.image11.childImageSharp.fluid}
            alt="Two people kayaking on water"
          />
          <Card.Body>
            <Card.Title className={styles.cardTitleStyles}>
              Experience title
            </Card.Title>
            <Card.Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </Card.Text>
            <Link to="/experience-page-example">
              <Button variant="dark">View itinerary</Button>
            </Link>
          </Card.Body>
        </Card>

        <Card>
          <Img
            fluid={data.image5.childImageSharp.fluid}
            alt="Safari with elephants"
          />
          <Card.Body>
            <Card.Title className={styles.cardTitleStyles}>
              Experience title
            </Card.Title>
            <Card.Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </Card.Text>
            <Link to="/experience-page-example">
              <Button variant="dark">View itinerary</Button>
            </Link>
          </Card.Body>
        </Card>
      </CardGroup>

      <CardGroup>
        <Card>
          <Img
            fluid={data.image13.childImageSharp.fluid}
            alt="robberg nature reserve"
          />
          <Card.Body>
            <Card.Title className={styles.cardTitleStyles}>
              Experience title
            </Card.Title>
            <Card.Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </Card.Text>
            <Link to="/experience-page-example">
              <Button variant="dark">View itinerary</Button>
            </Link>
          </Card.Body>
        </Card>

        <Card>
          <Img
            fluid={data.image4.childImageSharp.fluid}
            alt="Two people playing polo"
          />
          <Card.Body>
            <Card.Title className={styles.cardTitleStyles}>
              Experience title
            </Card.Title>
            <Card.Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </Card.Text>
            <Link to="/experience-page-example">
              <Button variant="dark">View itinerary</Button>
            </Link>
          </Card.Body>
        </Card>

        <Card>
          <Img
            fluid={data.image12.childImageSharp.fluid}
            alt="water slide theme park"
          />
          <Card.Body>
            <Card.Title className={styles.cardTitleStyles}>
              Experience title
            </Card.Title>
            <Card.Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </Card.Text>
            <Link to="/experience-page-example">
              <Button variant="dark">View itinerary</Button>
            </Link>
          </Card.Body>
        </Card>
      </CardGroup>

      <p className={styles.paragraphStyles}>
        Please note: all the above mentioned activities are provided and
        organised by independent companies/contractors and booked at your own
        risk. Safety information for garden and grounds - there are high walls
        around the property. Children must be accompanied and supervised by a
        responsible adult at all times. Safety information for ramblers - the
        terrain is uneven, all guests must be suitably attired and activities
        are undertaken at your own risk.
      </p>
    </Layout>
  )
}

export default Experiences
