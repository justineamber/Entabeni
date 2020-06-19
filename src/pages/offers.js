import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { GiSeahorse } from "react-icons/gi"
import useSubmitForm from "../components/customHook"
import styles from "./home-css-modules.module.css"
import CardGroup from "react-bootstrap/CardGroup"
import Card from "react-bootstrap/Card"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Offers = () => {
  const { inputs, handleInputChange, handleSubmit } = useSubmitForm()
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "lilo.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 800, maxHeight: 400, quality: 80) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Layout pageInfo={{ pageName: "Offers" }}>
      <SEO title="Local Attractions" />
      <div className={styles.imgHeadingContainer}>
        <Img
          fluid={data.file.childImageSharp.fluid}
          alt="woman in lilo in the pool"
        />
        <div className={styles.centeredTextOverImg}>
          <GiSeahorse />
          <h1 className={styles.PlettBeachHouseH1}>Special offers</h1>
        </div>
      </div>
      <div className={styles.paragraphContainer}>
        <h2 className={styles.highlight}>Offers</h2>
        <p>
          Browse our range of inspiring offers, seasonal specials and themed
          escapes.
        </p>
      </div>
      <h5>
        Enter your email address below to receive our exclusive offers and
        promotions!
      </h5>
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

      <CardGroup>
        <Card>
          <Card.Img variant="top" src={`/ballinpool.jpg`} alt="ball in pool" />
          <Card.Body>
            <Card.Title>Summer specials</Card.Title>
            <Card.Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Valid Nov - Dec 2020</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src={`/cocktails.jpg`} alt="cockatisl" />
          <Card.Body>
            <Card.Title>Gourmet Breaks</Card.Title>
            <Card.Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Valid Sep 2020</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img
            variant="top"
            src={`/familyonbeach.jpg`}
            alt="family playing on beach"
          />
          <Card.Body>
            <Card.Title>Activity and family</Card.Title>
            <Card.Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Valid Oct - Jan 2021 </small>
          </Card.Footer>
        </Card>
      </CardGroup>
    </Layout>
  )
}

export default Offers
