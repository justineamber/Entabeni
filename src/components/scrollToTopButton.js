import React, { useState } from "react"
import scrollToTopButtonStyles from "./scrollToTopButton.module.css"
import { FaArrowCircleUp } from "react-icons/fa"

function ScrollToTopButton() {
  const [showScrollButton, setScrollButton] = useState(false)

  const checkScrollingToTop = () => {
    if (!showScrollButton && window.pageYOffset > 400) {
      setScrollButton(true)
    } else if (showScrollButton && window.pageYOffset <= 400) {
      setScrollButton(false)
    }
  }

  const scrollTo = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  window.addEventListener("scroll", checkScrollingToTop)

  return (
    <FaArrowCircleUp
      className={scrollToTopButtonStyles.scrollToTop}
      onClick={scrollTo}
      style={{ height: 40, display: showScrollButton ? "flex" : "none" }}
    />
  )
}

export default ScrollToTopButton
