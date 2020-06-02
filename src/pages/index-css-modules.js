import React, { useState } from "react"
import { Row, Col, Container } from "react-bootstrap"
import { Link } from "gatsby"
import Button from "react-bootstrap/Button"
import Carousel from "react-bootstrap/Carousel"
import Image from "react-bootstrap/Image"
import Table from "react-bootstrap/Table"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styles from "./index-css-modules.module.css"
import MapContainer from "../components/MapContainer"
import { GiSeahorse, GiSmartphone, GiPositionMarker } from "react-icons/gi"

console.log(styles)

function ControlledCarousel() {
  const [index, setIndex] = useState()

  const handleSelect = selectedIndex => {
    setIndex(selectedIndex)
  }

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={`/beachview.jpg`}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>The best location in Plett</h3>
          <p>One block from Beach Road, one block from the beach</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={`/bedside.jpg`}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Luxurious rooms and interior </h3>
          <p>The perks of staying at the Plett Beach House</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={`/poolside.jpg`}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>A sense of freedom</h3>
          <p>Perfect holiday home for your family and friends.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={`/villa.jpg`} alt="Fourth slide" />
        <Carousel.Caption>
          <h3>One time group offer</h3>
          <p>Plan ahead & book today</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={`/plettsunset.jpg`}
          alt="Fifth slide"
        />
        <Carousel.Caption>
          <h3>The best views in Plett</h3>
          <p>Views of all the beaches in Plett</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

const IndexPage = () => (
  <Layout pageInfo={{ pageName: "home" }}>
    <SEO title="Home" keywords={[`gatsby`, `react`, `bootstrap`]} />
    <Container className="text-center">
      <Row>
        <Col>
          <ControlledCarousel />
          <Table responsive>
            <thead>
              <tr>
                <th>
                  {" "}
                  <GiPositionMarker /> Plettenberg Bay, South Africa
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <a href="tel:+4796801110">
                    {" "}
                    <GiSmartphone />
                    +47 968 01110
                  </a>
                </td>
              </tr>
            </tbody>
          </Table>
          <div className={styles.imgHeadingContainer}>
            <Image
              fluid
              className={styles.imgWrapper}
              src={`/houseonbeach.jpg`}
              alt="House on beach"
            />
            <div className={styles.centeredTextOverImg}>
              <GiSeahorse />
              <h2>Plett Beach Chic</h2>
              <Button variant="outline-light">Book your stay</Button>{" "}
            </div>
          </div>
          <div className={styles.roomContainerOnHomepage}>
            <h3>Award winning style and comfort</h3>
            <p>
              Sleep well and look good while doing it. At the Plett Beach House
              our unique style blends classic South Beach and chic Italian
              accents without ever sacrificing comfort. Here 400-thread count
              sheets and rainfall showers come standard. Close enough that you
              can walk, far enough away that you can sleep
            </p>
            <Button variant="outline-dark">Discover Plett Beach House</Button>{" "}
          </div>

          <div className={styles.imgHeadingContainer}>
            <Image
              fluid
              className={styles.imgWrapper}
              src={`/amenities.jpg`}
              alt="Lady on beach looking at sunset"
            />
            <div className={styles.centeredTextOverImg}>
              <GiSeahorse />
              <h2>All the perks</h2>
              <Button variant="outline-light">View amenities</Button>{" "}
            </div>
          </div>
          <div className={styles.imgHeadingContainer}>
            <Image
              fluid
              className={styles.imgWrapper}
              src={`/holidaymode.jpg`}
              alt="Lady on beach looking at sunset"
            />
            <div className={styles.centeredTextOverImg}>
              <GiSeahorse />
              <h2>Ideal spot in Plett</h2>
              <Button variant="outline-light">Explore the area</Button>{" "}
            </div>
          </div>
          <div>
            <MapContainer />
          </div>
          <Link></Link>
        </Col>
      </Row>
    </Container>
  </Layout>
)
export default IndexPage
