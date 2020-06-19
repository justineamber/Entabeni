import React from "react"
import styles from "./home-css-modules.module.css"
import { GiSeahorse } from "react-icons/gi"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Gallery = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "bunsonbeach.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 800, maxHeight: 400, quality: 80) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Layout pageInfo={{ pageName: "Gallery" }}>
      <SEO title="Gallery" />

      <div className={styles.imgHeadingContainer}>
        <Img
          fluid={data.file.childImageSharp.fluid}
          alt="woman standing in the waves"
        />

        <div className={styles.centeredTextOverImg}>
          <GiSeahorse />
          <h1 className={styles.PlettBeachHouseH1}>Gallery</h1>
        </div>
      </div>

      <div className={styles.paragraphContainer}>
        <h2 className={styles.highlight}>Explore more</h2>
        <p>Gallery of Plett Beach House</p>
      </div>

      <section className={styles.gallery}>
        <div className={styles.container}>
          <div className={styles.grid}>
            <div className={styles.cell}>
              <figure className={styles.imgContainer}>
                <img
                  src={`/cocktails.jpg`}
                  alt="cocktails by pool"
                  className={styles.attractionImg}
                />
              </figure>
            </div>

            <div className={styles.cell}>
              <figure className={styles.imgContainer}>
                <img
                  src={`/beachstepsrobberg.jpg`}
                  alt=" wooden steps going to beach"
                  className={styles.attractionImg}
                />
              </figure>
            </div>

            <div className={styles.cell}>
              <figure className={styles.imgContainer}>
                <img
                  src={`/beaconislebeach.jpg`}
                  alt="sunset at the beach"
                  className={styles.attractionImg}
                />
              </figure>
            </div>

            <div className={styles.cell}>
              <figure className={styles.imgContainer}>
                <img
                  src={`/bedroomonsuite.jpg`}
                  alt="onsuite bedroom"
                  className={styles.attractionImg}
                />
              </figure>
            </div>

            <div className={styles.cell}>
              <figure className={styles.imgContainer}>
                <img
                  src={`/exteriorhome.jpg`}
                  alt="exterior of Plett Beach House"
                  className={styles.attractionImg}
                />
              </figure>
            </div>

            <div className={styles.cell}>
              <figure className={styles.imgContainer}>
                <img
                  src={`/toddleronbeach.jpg`}
                  alt="toddler on beach"
                  className={styles.attractionImg}
                />
              </figure>
            </div>

            <div className={styles.cell}>
              <figure className={styles.imgContainer}>
                <img
                  src={`/robbergnaturereserve.jpg`}
                  alt="robberg nature reserve"
                  className={styles.attractionImg}
                />
              </figure>
            </div>

            <div className={styles.cell}>
              <figure className={styles.imgContainer}>
                <img
                  src={`/footstepsrobberg.jpg`}
                  alt="footsteps on beach"
                  className={styles.attractionImg}
                />
              </figure>
            </div>

            <div className={styles.cell}>
              <figure className={styles.imgContainer}>
                <img
                  src={`/icecream.jpg`}
                  alt="icecream on beach"
                  className={styles.attractionImg}
                />
              </figure>
            </div>

            <div className={styles.cell}>
              <figure className={styles.imgContainer}>
                <img
                  src={`/ladyonbeach.jpg`}
                  alt="lady on beach"
                  className={styles.attractionImg}
                />
              </figure>
            </div>

            <div className={styles.cell}>
              <figure className={styles.imgContainer}>
                <img
                  src={`/mainbedroom.jpg`}
                  alt="main bedroom"
                  className={styles.attractionImg}
                />
              </figure>
            </div>

            <div className={styles.cell}>
              <figure className={styles.imgContainer}>
                <img
                  src={`/summerdress.jpg`}
                  alt="lady on lilo in pool"
                  className={styles.attractionImg}
                />
              </figure>
            </div>

            <div className={styles.cell}>
              <figure className={styles.imgContainer}>
                <img
                  src={`/luxuryinterior.jpg`}
                  alt="luxury interior of home"
                  className={styles.attractionImg}
                />
              </figure>
            </div>

            <div className={styles.cell}>
              <figure className={styles.imgContainer}>
                <img
                  src={`/lilo.jpg`}
                  alt="lady on lilo in pool"
                  className={styles.attractionImg}
                />
              </figure>
            </div>

            <div className={styles.cell}>
              <figure className={styles.imgContainer}>
                <img
                  src={`/amenities.jpg`}
                  alt="kitchen"
                  className={styles.attractionImg}
                />
              </figure>
            </div>

            <div className={styles.cell}>
              <figure className={styles.imgContainer}>
                <img
                  src={`/couplereadingonbeach.jpg`}
                  alt="couple reading on the beach"
                  className={styles.attractionImg}
                />
              </figure>
            </div>

            <div className={styles.cell}>
              <figure className={styles.imgContainer}>
                <img
                  src={`/livingroom.jpg`}
                  alt="livingroom"
                  className={styles.attractionImg}
                />
              </figure>
            </div>

            <div className={styles.cell}>
              <figure className={styles.imgContainer}>
                <img
                  src={`/surferboard.jpg`}
                  alt="surfboard on beach"
                  className={styles.attractionImg}
                />
              </figure>
            </div>

            <div className={styles.cell}>
              <figure className={styles.imgContainer}>
                <img
                  src={`/poolsidehome.jpg`}
                  alt="view of pool and chairs at Plett Beach House"
                  className={styles.attractionImg}
                />
              </figure>
            </div>

            <div className={styles.cell}>
              <figure className={styles.imgContainer}>
                <img
                  src={`/luxurybathroom.jpg`}
                  alt="luxury bathroom"
                  className={styles.attractionImg}
                />
              </figure>
            </div>

            <div className={styles.cell}>
              <figure className={styles.imgContainer}>
                <img
                  src={`/flamingo.jpg`}
                  alt="blow up flamigo floater in pool"
                  className={styles.attractionImg}
                />
              </figure>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Gallery
