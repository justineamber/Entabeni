import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { GiSeahorse } from "react-icons/gi"
import useSubmitForm from "../components/customHook"
import Image from "react-bootstrap/Image"
import styles from "./contact-css-modules.module.css"

export default function ContactPage() {
  const { inputs, handleInputChange, handleSubmit } = useSubmitForm()
  return (
    <Layout pageInfo={{ pageName: "contact" }}>
      <SEO title="Contact page" />

      <div className={styles.imgHeadingContainer}>
        <Image
          fluid
          src={`/pack4vacay.jpg`}
          alt="Contact page image"
          className={styles.imgWrapper}
        />
        <div className={styles.centeredTextOverImg}>
          <GiSeahorse />
          <h1 className={styles.LocalAttractionsH1}>Contact us</h1>
        </div>
      </div>

      <form
        className={styles.contactform}
        onSubmit={handleSubmit}
        method="post"
        action="https://getform.io/{your-unique-getform-endpoint}"
      >
        <div className={`${styles.half} ${styles.left}`}>
          <input
            type="text"
            name="firstName"
            className="input-name"
            placeholder="First Name"
            onChange={handleInputChange}
            value={inputs.firstName}
            required
          />
          <input
            type="text"
            name="lastName"
            className="input-name"
            placeholder="Last Name"
            onChange={handleInputChange}
            value={inputs.lastName}
            required
          />
          <input
            type="email"
            name="email"
            className="input-email"
            placeholder="Email address"
            onChange={handleInputChange}
            value={inputs.email}
            required
          />
        </div>
        <div className={`${styles.half} ${styles.right}`}>
          <input
            type="text"
            name="message"
            className="input-message"
            placeholder="Message"
            onChange={handleInputChange}
            value={inputs.message}
          />
        </div>
        <input type="submit" value="Submit" className={styles.inputSubmit} />
      </form>
    </Layout>
  )
}
