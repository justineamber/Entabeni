import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/seo/seo"
import styles from "./pages-styles/pagestyles-css-modules.module.css"
import { GiSeahorse } from "react-icons/gi"
import BookingForm from "../components/booking-form/booking-form"

const History = () => {
  return (
    <Layout pageInfo={{ pageName: "History" }}>
      <SEO title="History" keywords={[`Plett`, `Beach`, `House`, `History`]} />
      <div className={styles.paragraphContainerNoImage}>
        <div className={styles.bookingFormWrapperAllPages}>
          <BookingForm />
        </div>
        <GiSeahorse />
        <h2 className={styles.headingStyle}>About us</h2>
        <p className={styles.paragraphStyles}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </Layout>
  )
}
export default History
