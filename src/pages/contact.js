import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { GiSeahorse } from "react-icons/gi"
import useSubmitForm from "../components/submitForm"
import styles from "./pagesStyles-css-modules.module.css"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const ContactPage = () => {
  const { inputs, handleInputChange, handleSubmit } = useSubmitForm()
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "pack4vacay.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 800, maxHeight: 500, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Layout pageInfo={{ pageName: "contact" }}>
      <SEO
        title="Contact page"
        keywords={[`Plett`, `Beach`, `House`, `Contact`]}
      />

      <div className={styles.imgNavMargin}>
        <div className={styles.imgHeadingContainer}>
          <div className={styles.imgOpacityHover}>
            <Img
              fluid={data.file.childImageSharp.fluid}
              alt="Passport, hat and bag on bed"
            />
          </div>
          <div className={styles.centeredTextOverImg}>
            <h1 className={styles.PlettBeachHouseH1}>Contact Us</h1>
          </div>
        </div>
      </div>
      <div className={styles.paragraphContainer}>
        <GiSeahorse />
        <h2 className={styles.highlight}>Get in Touch</h2>
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

export default ContactPage
