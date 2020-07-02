import React from "react"
import styles from "./pagesStyles-css-modules.module.css"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import Img from "gatsby-image"

export const imageQuery = graphql`
  fragment galleryImages on File {
    childImageSharp {
      fluid(maxWidth: 800, maxHeight: 350, quality: 100) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`

export const query = graphql`
  query GalleryPageQuery {
    site {
      siteMetadata {
        title
      }
    }
    image1: file(relativePath: { eq: "bunsonbeach.jpg" }) {
      ...galleryImages
    }

    image2: file(relativePath: { eq: "cocktails.jpg" }) {
      ...galleryImages
    }

    image3: file(relativePath: { eq: "beachstepsrobberg.jpg" }) {
      ...galleryImages
    }

    image4: file(relativePath: { eq: "beaconislebeach.jpg" }) {
      ...galleryImages
    }

    image5: file(relativePath: { eq: "bedroomonsuite.jpg" }) {
      ...galleryImages
    }

    image6: file(relativePath: { eq: "exteriorhome.jpg" }) {
      ...galleryImages
    }

    image7: file(relativePath: { eq: "toddleronbeach.jpg" }) {
      ...galleryImages
    }

    image8: file(relativePath: { eq: "robbergnaturereserve.jpg" }) {
      ...galleryImages
    }

    image9: file(relativePath: { eq: "footstepsrobberg.jpg" }) {
      ...galleryImages
    }

    image10: file(relativePath: { eq: "poloplayers.jpg" }) {
      ...galleryImages
    }

    image11: file(relativePath: { eq: "waterski.jpg" }) {
      ...galleryImages
    }

    image12: file(relativePath: { eq: "mainbedroom.jpg" }) {
      ...galleryImages
    }

    image13: file(relativePath: { eq: "summerdress.jpg" }) {
      ...galleryImages
    }

    image14: file(relativePath: { eq: "fish+chips.jpg" }) {
      ...galleryImages
    }

    image15: file(relativePath: { eq: "golfshot.jpg" }) {
      ...galleryImages
    }

    image16: file(relativePath: { eq: "anotherviewofkitchen.jpg" }) {
      ...galleryImages
    }

    image17: file(relativePath: { eq: "couplereadingonbeach.jpg" }) {
      ...galleryImages
    }

    image18: file(relativePath: { eq: "livingroom.jpg" }) {
      ...galleryImages
    }

    image19: file(relativePath: { eq: "surferboard.jpg" }) {
      ...galleryImages
    }

    image20: file(relativePath: { eq: "poolsidehome.jpg" }) {
      ...galleryImages
    }

    image21: file(relativePath: { eq: "luxurybathroom.jpg" }) {
      ...galleryImages
    }

    image22: file(relativePath: { eq: "safari.jpg" }) {
      ...galleryImages
    }
  }
`
const Gallery = ({ data }) => {
  return (
    <Layout pageInfo={{ pageName: "Gallery" }}>
      <SEO title="Gallery" keywords={[`Plett`, `Beach`, `House`, `Gallery`]} />

      <div className={styles.imgNavMargin}>
        <div className={styles.imgHeadingContainer}>
          <div className={styles.imgOpacityHover}>
            <Img
              fluid={data.image1.childImageSharp.fluid}
              alt="woman standing in the waves"
            />
          </div>
          <div className={styles.centeredTextOverImg}>
            <h1 className={styles.PlettBeachHouseH1}>Gallery</h1>
          </div>
        </div>
      </div>

      <section>
        <div className={styles.container}>
          <div className={styles.grid}>
            <div className={styles.cell}>
              <figure className={styles.imgContainer}>
                <Img
                  fluid={data.image2.childImageSharp.fluid}
                  alt="cocktails by pool"
                  className={styles.attractionImg}
                />
              </figure>
            </div>

            <div className={styles.cell}>
              <figure className={styles.imgContainer}>
                <Img
                  fluid={data.image3.childImageSharp.fluid}
                  alt=" wooden steps going to beach"
                  className={styles.attractionImg}
                />
              </figure>
            </div>

            <div className={styles.cell}>
              <figure className={styles.imgContainer}>
                <Img
                  fluid={data.image4.childImageSharp.fluid}
                  alt="sunset at the beach"
                  className={styles.attractionImg}
                />
              </figure>
            </div>

            <div className={styles.cell}>
              <figure className={styles.imgContainer}>
                <Img
                  fluid={data.image5.childImageSharp.fluid}
                  alt="onsuite bedroom"
                  className={styles.attractionImg}
                />
              </figure>
            </div>

            <div className={styles.cell}>
              <figure className={styles.imgContainer}>
                <Img
                  fluid={data.image6.childImageSharp.fluid}
                  alt="exterior of Entabene Hill"
                  className={styles.attractionImg}
                />
              </figure>
            </div>

            <div className={styles.cell}>
              <figure className={styles.imgContainer}>
                <Img
                  fluid={data.image7.childImageSharp.fluid}
                  alt="toddler on beach"
                  className={styles.attractionImg}
                />
              </figure>
            </div>

            <div className={styles.cell}>
              <figure className={styles.imgContainer}>
                <Img
                  fluid={data.image8.childImageSharp.fluid}
                  alt="robberg nature reserve"
                  className={styles.attractionImg}
                />
              </figure>
            </div>

            <div className={styles.cell}>
              <figure className={styles.imgContainer}>
                <Img
                  fluid={data.image9.childImageSharp.fluid}
                  alt="footsteps on beach"
                  className={styles.attractionImg}
                />
              </figure>
            </div>

            <div className={styles.cell}>
              <figure className={styles.imgContainer}>
                <Img
                  fluid={data.image10.childImageSharp.fluid}
                  alt="2 people playing polo"
                  className={styles.attractionImg}
                />
              </figure>
            </div>

            <div className={styles.cell}>
              <figure className={styles.imgContainer}>
                <Img
                  fluid={data.image11.childImageSharp.fluid}
                  alt="man waterskiing"
                  className={styles.attractionImg}
                />
              </figure>
            </div>

            <div className={styles.cell}>
              <figure className={styles.imgContainer}>
                <Img
                  fluid={data.image12.childImageSharp.fluid}
                  alt="main bedroom"
                  className={styles.attractionImg}
                />
              </figure>
            </div>

            <div className={styles.cell}>
              <figure className={styles.imgContainer}>
                <Img
                  fluid={data.image13.childImageSharp.fluid}
                  alt="lady in summer dress"
                  className={styles.attractionImg}
                />
              </figure>
            </div>

            <div className={styles.cell}>
              <figure className={styles.imgContainer}>
                <Img
                  fluid={data.image14.childImageSharp.fluid}
                  alt="fish and chips"
                  className={styles.attractionImg}
                />
              </figure>
            </div>

            <div className={styles.cell}>
              <figure className={styles.imgContainer}>
                <Img
                  fluid={data.image15.childImageSharp.fluid}
                  alt="man playing golf"
                  className={styles.attractionImg}
                />
              </figure>
            </div>

            <div className={styles.cell}>
              <figure className={styles.imgContainer}>
                <Img
                  fluid={data.image16.childImageSharp.fluid}
                  alt="kitchen"
                  className={styles.attractionImg}
                />
              </figure>
            </div>

            <div className={styles.cell}>
              <figure className={styles.imgContainer}>
                <Img
                  fluid={data.image17.childImageSharp.fluid}
                  alt="couple reading on the beach"
                  className={styles.attractionImg}
                />
              </figure>
            </div>

            <div className={styles.cell}>
              <figure className={styles.imgContainer}>
                <Img
                  fluid={data.image18.childImageSharp.fluid}
                  alt="livingroom"
                  className={styles.attractionImg}
                />
              </figure>
            </div>

            <div className={styles.cell}>
              <figure className={styles.imgContainer}>
                <Img
                  fluid={data.image19.childImageSharp.fluid}
                  alt="surfboard on beach"
                  className={styles.attractionImg}
                />
              </figure>
            </div>

            <div className={styles.cell}>
              <figure className={styles.imgContainer}>
                <Img
                  fluid={data.image20.childImageSharp.fluid}
                  alt="view of pool and chairs at Entabene Hill"
                  className={styles.attractionImg}
                />
              </figure>
            </div>

            <div className={styles.cell}>
              <figure className={styles.imgContainer}>
                <Img
                  fluid={data.image21.childImageSharp.fluid}
                  alt="luxury bathroom"
                  className={styles.attractionImg}
                />
              </figure>
            </div>

            <div className={styles.cell}>
              <figure className={styles.imgContainer}>
                <Img
                  fluid={data.image22.childImageSharp.fluid}
                  alt="elephants in safari game drive"
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
