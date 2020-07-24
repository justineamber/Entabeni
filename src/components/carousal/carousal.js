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
  slideImage6,
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
          className={carousalStyles.carousalImage}
        />
      </Carousel.Item>
      <Carousel.Item>
        <Img
          fluid={slideImage2}
          className={carousalStyles.carousalImage}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <Img
          fluid={slideImage3}
          className={carousalStyles.carousalImage}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <Img
          fluid={slideImage4}
          className={carousalStyles.carousalImage}
          alt="Fourth slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <Img
          fluid={slideImage5}
          className={carousalStyles.carousalImage}
          alt="Fifth slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <Img
          fluid={slideImage6}
          className={carousalStyles.carousalImage}
          alt="Sixth slide"
        />
      </Carousel.Item>
    </Carousel>
  )
}

export default ControlledCarousel
