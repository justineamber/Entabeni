import React from "react"
import styles from "./home-css-modules.module.css"
import { GiSeahorse } from "react-icons/gi"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const LocalAttractions = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "vacaymood.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 800, maxHeight: 400, quality: 80) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  const imgContent = document.querySelectorAll(`.imgContentHover`)

  function showImgContent(e) {
    for (var i = 0; i < imgContent.length; i++) {
      imgContent[i].style.left = e.pageX + "px"
      imgContent[i].style.top = e.pageY + "px"
    }
  }

  document.addEventListener(`mousemove`, showImgContent)

  return (
    <Layout pageInfo={{ pageName: "Local Attractions" }}>
      <SEO title="Local Attractions" />

      <div className={styles.imgHeadingContainer}>
        <Img
          fluid={data.file.childImageSharp.fluid}
          alt="woman sitting by the pool"
        />
        <div className={styles.centeredTextOverImg}>
          <GiSeahorse />
          <h1 className={styles.PlettBeachHouseH1}>Local Attractions</h1>
        </div>
      </div>

      <div className={styles.paragraphContainer}>
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
                <img
                  src={`/golf.jpg`}
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
                <img
                  src={`/loriebird.jpg`}
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
                <img
                  src={`/polo.jpg`}
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
                <img
                  src={`/safari.jpg`}
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
                <img
                  src={`/waterski.jpg`}
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
                <img
                  src={`/monkeyland.jpg`}
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
                <img
                  src={`/spas.jpg`}
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
                <img
                  src={`/farmersmarket.jpg`}
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
                <img
                  src={`/oceansafari.jpg`}
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
                <img
                  src={`/kayak.jpg`}
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
                <img
                  src={`/wildwatersplett.jpg`}
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
                <img
                  src={`/robbergnaturereservepath.jpg`}
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
