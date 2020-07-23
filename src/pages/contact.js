import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/seo/seo"
import { GiSeahorse } from "react-icons/gi"
import SubmitForm from "../components/submit-form/submit-form"
import styles from "./pages-styles/pagestyles-css-modules.module.css"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import BookingSystem from "../components/booking-system/booking-system"

const ContactPage = () => {
  const { inputs, handleInputChange, handleSubmit } = SubmitForm()
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "pack4vacay.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 800, maxHeight: 300, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Layout pageInfo={{ pageName: "Contact" }}>
      <SEO
        title="Contact page"
        keywords={[`Plett`, `Beach`, `House`, `Contact`]}
      />
      <BookingSystem />
      <div className={styles.paragraphContainerNoImage}>
        <GiSeahorse />
        <h2 className={styles.headingStyle}>Get in touch</h2>
      </div>
      <form
        className={styles.contactForm}
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

      <div className={styles.imageOpacityHover}>
        <Img
          fluid={data.file.childImageSharp.fluid}
          alt="Passport, hat and bag on bed"
        />
      </div>
    </Layout>
  )
}

export default ContactPage
