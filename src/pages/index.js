import React from "react"
import Button from "react-bootstrap/Button"
import Table from "react-bootstrap/Table"
import Layout from "../components/layout/layout"
import SEO from "../components/seo/seo"
import styles from "./pages-styles/pagestyles-css-modules.module.css"
import MapComponent from "../components/map-component/map-component"
import { GiSeahorse, GiPositionMarker } from "react-icons/gi"
import { FaTripadvisor } from "react-icons/fa"
import CardGroup from "react-bootstrap/CardGroup"
import Card from "react-bootstrap/Card"
import { graphql, navigate, Link } from "gatsby"
import Img from "gatsby-image"
import ControlledCarousel from "../components/carousal/carousal"
import NavbarBookingForm from "../components/navbar-booking-form/navbar-booking-form"

export const imageQuery = graphql`
  fragment optimizeHomeImages on File {
    childImageSharp {
      fluid(maxWidth: 800, maxHeight: 400, quality: 100) {
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
      ...optimizeHomeImages
    }

    image2: file(relativePath: { eq: "holidaymode.jpg" }) {
      ...optimizeHomeImages
    }

    image3: file(relativePath: { eq: "poloplayers.jpg" }) {
      ...optimizeHomeImages
    }

    image4: file(relativePath: { eq: "bedroomview.jpg" }) {
      ...optimizeHomeImages
    }

    image5: file(relativePath: { eq: "plettsunset.jpg" }) {
      ...optimizeHomeImages
    }

    slide1: file(relativePath: { eq: "plettsunset.jpg" }) {
      ...optimizeHomeImages
    }

    slide2: file(relativePath: { eq: "poolside.jpg" }) {
      ...optimizeHomeImages
    }

    slide3: file(relativePath: { eq: "safari.jpg" }) {
      ...optimizeHomeImages
    }

    slide4: file(relativePath: { eq: "bedroomview.jpg" }) {
      ...optimizeHomeImages
    }

    slide5: file(relativePath: { eq: "dolphins.jpg" }) {
      ...optimizeHomeImages
    }
  }
`

const Home = ({ data }) => {
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
    <Layout pageInfo={{ pageName: "Home" }}>
      <SEO
        title="Home"
        keywords={[
          `Plett`,
          `Beach`,
          `House`,
          `Entabeni`,
          `luxury`,
          `accomodation`,
          `Plettenberg`,
          `Bay`,
          `holiday`,
          `home`,
          `Garden`,
          `route`,
          `family`,
          `bedrooms`,
          `rent`,
          `sea`,
          `views`,
          `central`,
          `location`,
        ]}
      />
      <ControlledCarousel
        slideImage1={data.slide1.childImageSharp.fluid}
        slideImage2={data.slide2.childImageSharp.fluid}
        slideImage3={data.slide3.childImageSharp.fluid}
        slideImage4={data.slide4.childImageSharp.fluid}
        slideImage5={data.slide5.childImageSharp.fluid}
      />
      <div className={styles.bookingFormWrapperHomePage}>
        <NavbarBookingForm onSubmit={onSubmit} />
      </div>

      <div className={styles.paragraphContainer}>
        <GiSeahorse />
        <h2 className={styles.headingStyle}>{data.site.siteMetadata.title}</h2>
        <p className={styles.paragraphStyles}>
          Swim in the Indian ocean, see the whales in the bay, take long beach
          walks and take in the beautiful panaromic views when you base yourself
          at Entabeni Beach House. Perfectly located to explore all that the
          Garden Route has to offer, Entabeni offers guests the chance to
          totally unplug, reset and relax in a magnificent setting. Get in touch
          to book your stay. Discover our exquisite interiors, beautiful coastal
          town, pristine beaches, friendly locals and wealth of activities in
          the garden route.
        </p>
      </div>
      <Table responsive="sm" className={styles.tableAddressContainer}>
        <tbody>
          <tr>
            <td>
              <a
                className={styles.SvgAddress}
                href="https://www.google.com/maps/place/5+Harker+St,+Plettenberg+Bay,+6600,+South+Africa/@-34.0583289,23.3734568,17z/data=!3m1!4b1!4m5!3m4!1s0x1e78e20c8f14ba5d:0x312f5c5696e65c04!8m2!3d-34.0583334!4d23.3756455"
                target="_blank"
                rel="noreferrer"
              >
                <GiPositionMarker className={styles.positionMarkerSvgStyle} />5
                Harker Street, Plettenberg Bay, South Africa
              </a>
            </td>
          </tr>
        </tbody>
      </Table>

      <div className={styles.imageHeadingContainer}>
        <div className={styles.imageOpacityHover}>
          <Img
            fluid={data.image1.childImageSharp.fluid}
            alt="couple walking on beach"
          />
        </div>
        <div className={styles.centeredTextOverImage}>
          <GiSeahorse />
          <h2 className={styles.headingStyle}>Paradise Found</h2>
          <Link to="/entabeni-booking-page/">
            <Button variant="outline-light" href="/entabeni-booking-page/">
              Book your stay
            </Button>
          </Link>
        </div>
      </div>

      <div className={styles.paragraphContainerLifeWellLived}>
        <GiSeahorse />
        <h2 className={styles.headingStyle}>Life. Well lived.</h2>
        <p className={styles.paragraphStyles}>
          As our valued guests always expect and deserve the best, our
          relentless pursuit for perfection never ends at our luxury
          accomodation. We offer elegant luxury in the heart of a breath-taking
          nature. Sleep well and look good while doing it. Here 400-thread count
          sheets and rainfall showers come standard. Because we know that you
          will remember the countless beautiful memories when your holiday is
          over. This is the perfect holiday accomodation for your family
          holiday.
        </p>
      </div>

      <CardGroup className={styles.cardGroupStyles}>
        <Card className={styles.cardStyles}>
          <Img
            variant="top"
            fluid={data.image3.childImageSharp.fluid}
            alt="kitchen"
          />
          <Card.Body>
            <Card.Title className={styles.cardTitleStyles}>
              Best activites for the family
            </Card.Title>
            <Card.Text>
              Plettenberg Bay is a great location and offers many fun activities
              for the family. You can play polo in the morning, have lunch on a
              beautiful wine farm, spend the rest of the afternoon on the beach
              and have sundowners at Robberg Nature Reserve that overlooks the
              beautiful coastal town, sea and mountain ranges.
            </Card.Text>
            <Link to="/experiences/">
              <Button variant="outline-dark">Book experiences now</Button>
            </Link>
          </Card.Body>
        </Card>
        <Card>
          <Img
            fluid={data.image4.childImageSharp.fluid}
            variant="top"
            alt="onsuite bedroom"
          />
          <Card.Body>
            <Card.Title className={styles.cardTitleStyles}>
              Luxury signiture
            </Card.Title>
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
            <Link to="/entabeni-booking-page/">
              <Button variant="outline-dark">Book accomodation now</Button>
            </Link>
          </Card.Body>
        </Card>
        <Card>
          <Img
            fluid={data.image5.childImageSharp.fluid}
            variant="top"
            alt="seaview from Entabene"
          />
          <Card.Body>
            <Card.Title className={styles.cardTitleStyles}>
              Wake up to the best views of Plett
            </Card.Title>
            <Card.Text>
              Located in central Plettenberg Bay and walking distance to the
              beach, shops and restaurants. The stunning Entabeni House has
              beautiful views of the Beacon Isle beach, Robberg Heads and the
              Tsitsikamma mountain range. It is the perfect holiday beach home
              for you and your family to build beautiful memories and have fun.
            </Card.Text>
            <Link to="/gallery/">
              <Button variant="outline-dark">View gallery</Button>
            </Link>
          </Card.Body>
        </Card>
      </CardGroup>
      <Card>
        <Card.Body>
          <FaTripadvisor />
          <Card.Title className={styles.cardTitleStyles}>
            Guest Reviews
          </Card.Title>
          <Card.Subtitle>"Experience of a lifetime!"</Card.Subtitle>
          <Card.Text bsPrefix={styles.paragraphStyles}>
            We had the experience of a lifetime and enjoyed every minute of it.
            Plett is a very special place and a beautiful house in the best
            location. Booking activites based on our interests through the
            website was amazing! You furthermore got exclusive offers/discounts
            booking the activities through the website. Very informative and it
            made our stay very special. We will never forget our holiday in
            Plett, South Africa and all the fun activities we did! Thank you so
            much for such an unforgettable experience. <br />
            Mr. &amp; Mrs. J. Finnegan - <em>May 2019</em>
          </Card.Text>
          <Link to="/guest-reviews/">
            <Button variant="dark">See all reviews</Button>
          </Link>
        </Card.Body>
      </Card>
      <div className={styles.imageHeadingContainer}>
        <div className={styles.imageOpacityHover}>
          <Img
            fluid={data.image2.childImageSharp.fluid}
            alt="Lady on beach looking at sunset"
          />
        </div>
        <div className={styles.centeredTextOverImage}>
          <GiSeahorse />
          <h2 className={styles.headingStyle}>Ideal spot in Plett</h2>
          <Button
            variant="outline-light"
            href="https://www.google.com/maps/place/5+Harker+St,+Plettenberg+Bay,+6600,+South+Africa/@-34.0583289,23.3734568,17z/data=!3m1!4b1!4m5!3m4!1s0x1e78e20c8f14ba5d:0x312f5c5696e65c04!8m2!3d-34.0583334!4d23.3756455"
            target="_blank"
            rel="noreferrer"
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
