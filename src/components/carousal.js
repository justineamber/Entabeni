import React, { useState } from "react"
import Carousel from "react-bootstrap/Carousel"
import carousalStyles from "./carousal.module.css"
import Img from "gatsby-image"

const ControlledCarousel = ({
  slideImage1,
  slideImage2,
  slideImage3,
  slideImage4,
  slideImage5,
}) => {
  const [index, setIndex] = useState()

  const handleSelect = selectedIndex => {
    setIndex(selectedIndex)
  }

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <Img
          fluid={slideImage1}
          alt="First slide"
          className={carousalStyles.carousalImg}
        />
        <Carousel.Caption>
          <h2>The best location in Plett</h2>
          <h4>One block from the beach</h4>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <Img
          fluid={slideImage2}
          className={carousalStyles.carousalImg}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h2>Luxury interior</h2>
          <h4>The perks of staying at the Plett Beach House</h4>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Img
          fluid={slideImage3}
          className={carousalStyles.carousalImg}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h2>A sense of freedom</h2>
          <h4>Perfect holiday home for your family and friends.</h4>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Img
          fluid={slideImage4}
          className={carousalStyles.carousalImg}
          alt="Fourth slide"
        />
        <Carousel.Caption>
          <h2>One time group offer</h2>
          <h4>Plan ahead & book today</h4>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Img
          fluid={slideImage5}
          className={carousalStyles.carousalImg}
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

export default ControlledCarousel
