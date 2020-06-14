import React, { useState } from "react"
import Button from "react-bootstrap/Button"
import Carousel from "react-bootstrap/Carousel"
import Image from "react-bootstrap/Image"
import Table from "react-bootstrap/Table"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styles from "./home-css-modules.module.css"
import MapComponent from "../components/MapComponent"
import { GiSeahorse, GiSmartphone, GiPositionMarker } from "react-icons/gi"
import Card from "react-bootstrap/Card"

function ControlledCarousel() {
  const [index, setIndex] = useState()

  const handleSelect = selectedIndex => {
    setIndex(selectedIndex)
  }

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <Image
          fluid
          className={styles.carousalImg}
          src={`/robbergbeach.jpg`}
          alt="First slide"
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

const Home = () => (
  <Layout pageInfo={{ pageName: "home" }}>
    <SEO title="Home" keywords={[`gatsby`, `react`, `bootstrap`]} />
    <ControlledCarousel />
    <div className={styles.paragraphContainer}>
      <GiSeahorse />
      <h2 className={styles.h2Style}>Plett Beach House</h2>
      <p>
        Your adventure begins when you enter through the gates of our remarkable
        holiday home. Discover our exquisite interiors, beautiful coastal town,
        pristine beaches, friendly locals and wealth of activities in the garden
        route.
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
            </a>{" "}
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

    <div className={styles.sectionContainer}>
      <div className={styles.imgHeadingContainer}>
        <div className={styles.imgOpacityHover}>
          <Image fluid src={`/coupleonbeach.jpg`} alt="couple on beach" />
        </div>
        <div className={styles.centeredTextOverImg}>
          <GiSeahorse />
          <h2>Paradise Found</h2>
          <Button variant="outline-light" href="/contact">
            Book your stay
          </Button>{" "}
        </div>
      </div>
      <div className={styles.paragraphContainer}>
        <h2 className={styles.h2Style}>Life. Well lived.</h2>
        <p>
          As our valued guests always expect and deserve the best, our
          relentless pursuit for perfection never ends. We offer elegant luxury
          in the heart of a breath-taking nature. Sleep well and look good while
          doing it. Here 400-thread count sheets and rainfall showers come
          standard. Because we know that you will remember the countless
          beautiful memories when your holiday is over.
        </p>
        <Button variant="outline-dark" href="/gallery">
          Discover Plett Beach House
        </Button>{" "}
      </div>
    </div>

    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" fluid src={`/amenities.jpg`} alt="amenities" />
      <Card.Body>
        <Card.Title>Amenities</Card.Title>
        <Card.Text>
         Fully stocked kitchen, 400 thread bed linen, rain showers, 5 bedroom and 5 bathrooms,
        </Card.Text>
        <Button variant="dark">View amenities</Button>
      </Card.Body>
    </Card>
    <div className={styles.imgHeadingContainer}>
      <div className={styles.wrapper}>
        <div className={styles.imgOpacityHover}>
          <Image fluid src={`/amenities.jpg`} alt="amenities" />
        </div>
        <div className={styles.centeredTextOverImg}>
          <GiSeahorse />
          <h2>All the perks</h2>
          <Button variant="outline-light" href="/amenities">
            View amenities
          </Button>{" "}
        </div>
      </div>
      <div className={styles.paragraphContainer}></div>
      <div className={styles.imgHeadingContainer}>
        <div className={styles.imgOpacityHover}>
          <Image
            fluid
            src={`/holidaymode.jpg`}
            alt="Lady on beach looking at sunset"
          />
        </div>
        <div className={styles.centeredTextOverImg}>
          <GiSeahorse />
          <h2>Ideal spot in Plett</h2>
          <Button
            variant="outline-light"
            href="https://www.google.com/maps/@${34.06955925723115},${23.33735050000003},${8}z"
          >
            Explore the area
          </Button>{" "}
        </div>
      </div>
    </div>

    <div className={styles.mapSectionContainer}>
      <MapComponent />
    </div>
  </Layout>
)
export default Home
