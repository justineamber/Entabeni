import React from "react"
import styles from "./pagesStyles-css-modules.module.css"
import { GiSeahorse } from "react-icons/gi"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import Img from "gatsby-image"

export const imageQuery = graphql`
  fragment localAttractionsImages on File {
    childImageSharp {
      fluid(maxWidth: 800, maxHeight: 500, quality: 100) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`

export const query = graphql`
  query LocalAttractionsPageQuery {
    site {
      siteMetadata {
        title
      }
    }
    image1: file(relativePath: { eq: "vacaymood.jpg" }) {
      ...localAttractionsImages
    }

    image2: file(relativePath: { eq: "golf.jpg" }) {
      ...localAttractionsImages
    }

    image3: file(relativePath: { eq: "loriebird.jpg" }) {
      ...localAttractionsImages
    }

    image4: file(relativePath: { eq: "polo.jpg" }) {
      ...localAttractionsImages
    }

    image5: file(relativePath: { eq: "safari.jpg" }) {
      ...localAttractionsImages
    }

    image6: file(relativePath: { eq: "waterski.jpg" }) {
      ...localAttractionsImages
    }

    image7: file(relativePath: { eq: "monkeyland.jpg" }) {
      ...localAttractionsImages
    }

    image8: file(relativePath: { eq: "spas.jpg" }) {
      ...localAttractionsImages
    }

    image9: file(relativePath: { eq: "farmersmarket.jpg" }) {
      ...localAttractionsImages
    }

    image10: file(relativePath: { eq: "oceansafari.jpg" }) {
      ...localAttractionsImages
    }

    image11: file(relativePath: { eq: "kayak.jpg" }) {
      ...localAttractionsImages
    }

    image12: file(relativePath: { eq: "wildwatersplett.jpg" }) {
      ...localAttractionsImages
    }

    image13: file(relativePath: { eq: "robbergnaturereservepath.jpg" }) {
      ...localAttractionsImages
    }
  }
`
const LocalAttractions = ({ data }) => {
  if (typeof document !== `undefined`) {
    const imgContent = document.querySelectorAll(`.imgContentHover`)

    function showImgContent(e) {
      for (var i = 0; i < imgContent.length; i++) {
        imgContent[i].style.left = e.pageX + "px"
        imgContent[i].style.top = e.pageY + "px"
      }
    }

    document.addEventListener(`mousemove`, showImgContent)
  }
  return (
    <Layout pageInfo={{ pageName: "Local Attractions" }}>
      <SEO
        title="Local Attractions"
        keywords={[`Plett`, `Beach`, `House`, `Local`, `Attractions`]}
      />
      <div className={styles.imgNavMargin}>
        <div className={styles.imgHeadingContainer}>
          <div className={styles.imgOpacityHover}>
            <Img
              fluid={data.image1.childImageSharp.fluid}
              alt="woman sitting by the pool"
            />
          </div>
          <div className={styles.centeredTextOverImg}>
            <h1 className={styles.PlettBeachHouseH1}>Local Attractions</h1>
          </div>
        </div>
      </div>
      <div className={styles.paragraphContainer}>
        <GiSeahorse />
        <h2 className={styles.highlight}>Discover more</h2>
        <p>
          Plettenberg Bay offers many luxurious choices for you to enjoy that
          will always make you smile. From happy family holidays to sports games
          or from important conventions to special offers… There is always much
          more for you to discover at Plettenberg Bay.
        </p>
      </div>

      <section className={styles.gallery}>
        <div className={styles.container}>
          <div className={styles.grid}>
            <div className={styles.cell}>
              <figure className={styles.imgContainer}>
                <Img
                  fluid={data.image2.childImageSharp.fluid}
                  alt="Lady playing golf at Goose Valley Golf Club"
                  className={styles.attractionImg}
                />
                <figcaption className={styles.imgContent}>
                  <h2 className={styles.title}>Goose Valley Golf Club</h2>
                  <h3 className={styles.category}>Read More</h3>
                </figcaption>
                <span className={styles.imgContentHover}>
                  <h2 className={styles.title}>Goose Valley Golf Club</h2>
                  <h3 className={styles.category}>Read More</h3>
                </span>
              </figure>
            </div>

            <div className={styles.cell}>
              <figure className={styles.imgContainer}>
                <Img
                  fluid={data.image3.childImageSharp.fluid}
                  alt="Lorie bird in Knysna forest"
                  className={styles.attractionImg}
                />
                <figcaption className={styles.imgContent}>
                  <h2 className={styles.title}>Birds of Eden</h2>
                  <h3 className={styles.category}>Read More</h3>
                </figcaption>
                <span className={styles.imgContentHover}>
                  <h2 className={styles.title}>Birds of Eden</h2>
                  <h3 className={styles.category}>Read More</h3>
                </span>
              </figure>
            </div>

            <div className={styles.cell}>
              <figure className={styles.imgContainer}>
                <Img
                  fluid={data.image4.childImageSharp.fluid}
                  alt="Man on horse playing polo"
                  className={styles.attractionImg}
                />
                <figcaption className={styles.imgContent}>
                  <h2 className={styles.title}>Plettenberg Bay Polo</h2>
                  <h3 className={styles.category}>Read More</h3>
                </figcaption>
                <span className={styles.imgContentHover}>
                  <h2 className={styles.title}>Plettenberg Bay Polo</h2>
                  <h3 className={styles.category}>Read More</h3>
                </span>
              </figure>
            </div>

            <div className={styles.cell}>
              <figure className={styles.imgContainer}>
                <Img
                  fluid={data.image5.childImageSharp.fluid}
                  alt="Safari with elephants"
                  className={styles.attractionImg}
                />
                <figcaption className={styles.imgContent}>
                  <h2 className={styles.title}>Plettenberg Bay Game Reserve</h2>
                  <h3 className={styles.category}>Read More</h3>
                </figcaption>
                <span className={styles.imgContentHover}>
                  <h2 className={styles.title}>Plettenberg Bay Game Reserve</h2>
                  <h3 className={styles.category}>Read More</h3>
                </span>
              </figure>
            </div>

            <div className={styles.cell}>
              <figure className={styles.imgContainer}>
                <Img
                  fluid={data.image6.childImageSharp.fluid}
                  alt="Man wake boarding on water"
                  className={styles.attractionImg}
                />
                <figcaption className={styles.imgContent}>
                  <h2 className={styles.title}>Water sports</h2>
                  <h3 className={styles.category}>Read More</h3>
                </figcaption>
                <span className={styles.imgContentHover}>
                  <h2 className={styles.title}>Water sports</h2>
                  <h3 className={styles.category}>Read More</h3>
                </span>
              </figure>
            </div>

            <div className={styles.cell}>
              <figure className={styles.imgContainer}>
                <Img
                  fluid={data.image7.childImageSharp.fluid}
                  alt="monkey in tree at Monkey Land"
                  className={styles.attractionImg}
                />
                <figcaption className={styles.imgContent}>
                  <h2 className={styles.title}>Monkey Land</h2>
                  <h3 className={styles.category}>Read More</h3>
                </figcaption>
                <span className={styles.imgContentHover}>
                  <h2 className={styles.title}>Monkey Land</h2>
                  <h3 className={styles.category}>Read More</h3>
                </span>
              </figure>
            </div>

            <div className={styles.cell}>
              <figure className={styles.imgContainer}>
                <Img
                  fluid={data.image8.childImageSharp.fluid}
                  alt="lady at spa"
                  className={styles.attractionImg}
                />
                <figcaption className={styles.imgContent}>
                  <h2 className={styles.title}>Spa's in Plett</h2>
                  <h3 className={styles.category}>Read More</h3>
                </figcaption>
                <span className={styles.imgContentHover}>
                  <h2 className={styles.title}>Spa's in Plett</h2>
                  <h3 className={styles.category}>Read More</h3>
                </span>
              </figure>
            </div>

            <div className={styles.cell}>
              <figure className={styles.imgContainer}>
                <Img
                  fluid={data.image9.childImageSharp.fluid}
                  alt="fruit annd vegetables in box at farmers market"
                  className={styles.attractionImg}
                />
                <figcaption className={styles.imgContent}>
                  <h2 className={styles.title}>Harkerville Market</h2>
                  <h3 className={styles.category}>Read More</h3>
                </figcaption>
                <span className={styles.imgContentHover}>
                  <h2 className={styles.title}>Harkerville Market</h2>
                  <h3 className={styles.category}>Read More</h3>
                </span>
              </figure>
            </div>

            <div className={styles.cell}>
              <figure className={styles.imgContainer}>
                <Img
                  fluid={data.image10.childImageSharp.fluid}
                  alt="two whales in the sea"
                  className={styles.attractionImg}
                />
                <figcaption className={styles.imgContent}>
                  <h2 className={styles.title}>Ocean safari</h2>
                  <h3 className={styles.category}>Read More</h3>
                </figcaption>
                <span className={styles.imgContentHover}>
                  <h2 className={styles.title}>Ocean safari</h2>
                  <h3 className={styles.category}>Read More</h3>
                </span>
              </figure>
            </div>

            <div className={styles.cell}>
              <figure className={styles.imgContainer}>
                <Img
                  fluid={data.image11.childImageSharp.fluid}
                  alt="Two people kayaking on water"
                  className={styles.attractionImg}
                />
                <figcaption className={styles.imgContent}>
                  <h2 className={styles.title}>
                    Kayak & lilo up the Storms river gorge
                  </h2>
                  <h3 className={styles.category}>Read More</h3>
                </figcaption>
                <span className={styles.imgContentHover}>
                  <h2 className={styles.title}>
                    Kayak & lilo up the Storms river gorge
                  </h2>
                  <h3 className={styles.category}>Read More</h3>
                </span>
              </figure>
            </div>

            <div className={styles.cell}>
              <figure className={styles.imgContainer}>
                <Img
                  fluid={data.image12.childImageSharp.fluid}
                  alt="water slide theme park"
                  className={styles.attractionImg}
                />
                <figcaption className={styles.imgContent}>
                  <h2 className={styles.title}>Wildwaters Plett & put-put</h2>
                  <h3 className={styles.category}>Read More</h3>
                </figcaption>
                <span className={styles.imgContentHover}>
                  <h2 className={styles.title}>Wildwaters Plett & put-put</h2>
                  <h3 className={styles.category}>Read More</h3>
                </span>
              </figure>
            </div>

            <div className={styles.cell}>
              <figure className={styles.imgContainer}>
                <Img
                  fluid={data.image13.childImageSharp.fluid}
                  alt="robberg nature reserve"
                  className={styles.attractionImg}
                />
                <figcaption className={styles.imgContent}>
                  <h2 className={styles.title}>Hiking in nature reserves</h2>
                  <h3 className={styles.category}>Read More</h3>
                </figcaption>
                <span className={styles.imgContentHover}>
                  <h2 className={styles.title}>Hiking in nature reserves</h2>
                  <h3 className={styles.category}>Read More</h3>
                </span>
              </figure>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default LocalAttractions
