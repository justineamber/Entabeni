import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { GiSeahorse } from "react-icons/gi"
import Image from "react-bootstrap/Image"
import useSubmitForm from "../components/customHook"
import styles from "./contact-css-modules.module.css"

function Offers() {
  const { inputs, handleInputChange, handleSubmit } = useSubmitForm()
  return (
    <Layout pageInfo={{ pageName: "Offers" }}>
      <SEO title="Local Attractions" />
      <div className={styles.imgHeadingContainer}>
        <Image fluid src={`/lilo.jpg`} alt="woman in lilo in the pool" />
        <div className={styles.centeredTextOverImg}>
          <GiSeahorse />
          <h1 className={styles.LocalAttractionsH1}>SPECIAL OFFERS</h1>
        </div>
      </div>
      <div className={styles.attractionsContainer}>
        <p>
          Enter your email address below to receive our exclusive offers &
          promotions!
        </p>
      </div>
      <form
        className={styles.contactform}
        onSubmit={handleSubmit}
        method="post"
        action="https://getform.io/{your-unique-getform-endpoint}"
      >
        <div>
          <input
            type="email"
            name="email"
            className="input-email"
            placeholder="Enter your email address"
            onChange={handleInputChange}
            value={inputs.email}
            required
          />
        </div>
        <input type="submit" value="Submit" className={styles.inputSubmit} />
      </form>
    </Layout>
  )
}

export default Offers
