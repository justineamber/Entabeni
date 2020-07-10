import React from "react"
import styles from "./pages-styles/pagestyles-css-modules.module.css"
import { GiSeahorse } from "react-icons/gi"
import Layout from "../components/layout/layout"
import SEO from "../components/seo/seo"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Button from "react-bootstrap/Button"
import { Link } from "gatsby"

export const imageQuery = graphql`
  fragment localAttractionsImages on File {
    childImageSharp {
      fluid(maxWidth: 800, maxHeight: 350, quality: 100) {
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

    image2: file(relativePath: { eq: "golfshot.jpg" }) {
      ...localAttractionsImages
    }

    image3: file(relativePath: { eq: "loriebird.jpg" }) {
      ...localAttractionsImages
    }

    image4: file(relativePath: { eq: "poloplayers.jpg" }) {
      ...localAttractionsImages
    }

    image5: file(relativePath: { eq: "safari.jpg" }) {
      ...localAttractionsImages
    }

    image6: file(relativePath: { eq: "seals.jpg" }) {
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

    image10: file(relativePath: { eq: "dolphins.jpg" }) {
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
    const imageContent = document.querySelectorAll(`.imageContentHover`)

    function showimageContent(e) {
      for (var i = 0; i < imageContent.length; i++) {
        imageContent[i].style.left = e.pageX + "px"
        imageContent[i].style.top = e.pageY + "px"
      }
    }

    document.addEventListener(`mousemove`, showimageContent)
  }

  function handleClick(e) {
    e.preventDefault()
  }
  return (
    <Layout pageInfo={{ pageName: "Local attractions" }}>
      <SEO
        title="Local attractions"
        keywords={[
          `Plett`,
          `Entabene`,
          `Beach`,
          `House`,
          `Local`,
          `Attractions`,
        ]}
      />
      <div className={styles.paragraphContainerNoImage}>
        <GiSeahorse />
        <h2 className={styles.headingStyle}>Discover more</h2>
        <p className={styles.paragraphStyles}>
          Plett offers many fun and luxurious choices for you to enjoy that will
          always make you smile. You can play polo in the morning, have lunch on
          a wine farm and be at the beach in the afternoon. <br />
          To get exclusive offers through our affiliated partners, view the
          below activities. There is always much more for you to discover at
          Plettenberg Bay and the surrounding area.
        </p>
        <Link to="/interests" className="nav-link" active>
          <Button type="button" active onClick={handleClick} variant="primary">
            Create your dream holiday
          </Button>
        </Link>
      </div>

      <section>
        <div className={styles.container}>
          <div className={styles.grid}>
            <div className={styles.cell}>
              <Link to="/interests" active>
                <figure className={styles.imageContainer}>
                  <Img
                    fluid={data.image1.childImageSharp.fluid}
                    alt="Lady wearing hat"
                    className={styles.attractionImage}
                  />
                  <figcaption className={styles.imageContent}>
                    <h2 className={styles.title}>
                      Designer boutiques and artisan shops
                    </h2>
                    <h3 className={styles.category}>
                      A list of the best shopping stores.
                    </h3>
                  </figcaption>

                  <span className={styles.imageContentHover}>
                    <h2 className={styles.title}>
                      Designer boutiques and artisan shops
                    </h2>
                    <h3 className={styles.category}>
                      A list of the best shopping stores.
                    </h3>
                  </span>
                </figure>
              </Link>
            </div>

            <div className={styles.cell}>
              <Link to="/interests" active>
                <figure className={styles.imageContainer}>
                  <Img
                    fluid={data.image2.childImageSharp.fluid}
                    alt="Man playing golf at Goose Valley Golf Club"
                    className={styles.attractionImage}
                  />
                  <figcaption className={styles.imageContent}>
                    <h2 className={styles.title}>Goose Valley Golf Club</h2>
                    <h3 className={styles.category}>
                      18-hole signature golf course designed by Gary Player.
                    </h3>
                  </figcaption>
                  <span className={styles.imageContentHover}>
                    <h2 className={styles.title}> Goose Valley Golf Club</h2>
                    <h3 className={styles.category}>
                      18-hole signature golf course designed by Gary Player
                    </h3>
                  </span>
                </figure>
              </Link>
            </div>

            <div className={styles.cell}>
              <Link to="/interests" active>
                <figure className={styles.imageContainer}>
                  <Img
                    fluid={data.image9.childImageSharp.fluid}
                    alt="fruit annd vegetables in box at farmers market"
                    className={styles.attractionImage}
                  />
                  <figcaption className={styles.imageContent}>
                    <h2 className={styles.title}>
                      Harkerville Saturday Market
                    </h2>
                    <h3 className={styles.category}>Outdoor Country Market</h3>
                  </figcaption>
                  <span className={styles.imageContentHover}>
                    <h2 className={styles.title}>
                      Harkerville Saturday Market
                    </h2>
                    <h3 className={styles.category}>Outdoor Country Market</h3>
                  </span>
                </figure>
              </Link>
            </div>

            <div className={styles.cell}>
              <Link to="/interests" active>
                <figure className={styles.imageContainer}>
                  <Img
                    fluid={data.image8.childImageSharp.fluid}
                    alt="lady at spa"
                    className={styles.attractionImage}
                  />
                  <figcaption className={styles.imageContent}>
                    <h2 className={styles.title}>
                      Relax and unwind at the Jiwu Spa
                    </h2>
                    <h3 className={styles.category}>Luxury spa and salon</h3>
                  </figcaption>
                  <span className={styles.imageContentHover}>
                    <h2 className={styles.title}>
                      Relax and unwind at the Jiwu Spa
                    </h2>
                    <h3 className={styles.category}>Luxury spa and salon</h3>
                  </span>
                </figure>
              </Link>
            </div>

            <div className={styles.cell}>
              <Link to="/interests" active>
                <figure className={styles.imageContainer}>
                  <Img
                    fluid={data.image7.childImageSharp.fluid}
                    alt="monkey in tree at Monkey Land"
                    className={styles.attractionImage}
                  />
                  <figcaption className={styles.imageContent}>
                    <h2 className={styles.title}>Monkey Land</h2>
                    <h3 className={styles.category}>
                      Worlds first free roaming multi-specie primate sanctuary
                    </h3>
                  </figcaption>
                  <span className={styles.imageContentHover}>
                    <h2 className={styles.title}>Monkey Land</h2>
                    <h3 className={styles.category}>
                      Worlds first free roaming multi-specie primate sanctuary
                    </h3>
                  </span>
                </figure>
              </Link>
            </div>

            <div className={styles.cell}>
              <Link to="/interests" active>
                <figure className={styles.imageContainer}>
                  <Img
                    fluid={data.image10.childImageSharp.fluid}
                    alt="two whales in the sea"
                    className={styles.attractionImage}
                  />
                  <figcaption className={styles.imageContent}>
                    <h2 className={styles.title}>Ocean Safaris</h2>
                    <h3 className={styles.category}>
                      2hr whale and dolphin watching boating adventure
                    </h3>
                  </figcaption>
                  <span className={styles.imageContentHover}>
                    <h2 className={styles.title}>Ocean Safaris</h2>
                    <h3 className={styles.category}>
                      2hr whale and dolphin watching boating adventure
                    </h3>
                  </span>
                </figure>
              </Link>
            </div>

            <div className={styles.cell}>
              <Link to="/interests" active>
                <figure className={styles.imageContainer}>
                  <Img
                    fluid={data.image6.childImageSharp.fluid}
                    alt="baby seal"
                    className={styles.attractionImage}
                  />
                  <figcaption className={styles.imageContent}>
                    <h2 className={styles.title}>Offshore adventures</h2>
                    <h3 className={styles.category}>Swim with seals</h3>
                  </figcaption>
                  <span className={styles.imageContentHover}>
                    <h2 className={styles.title}>Offshore adventures</h2>
                    <h3 className={styles.category}>Swim with seals</h3>
                  </span>
                </figure>
              </Link>
            </div>

            <div className={styles.cell}>
              <Link to="/interests" active>
                <figure className={styles.imageContainer}>
                  <Img
                    fluid={data.image4.childImageSharp.fluid}
                    alt="Two people playing polo"
                    className={styles.attractionImage}
                  />
                  <figcaption className={styles.imageContent}>
                    <h2 className={styles.title}>Plett Polo</h2>
                    <h3 className={styles.category}>
                      Leading polo club in the entire African continent.
                    </h3>
                  </figcaption>
                  <span className={styles.imageContentHover}>
                    <h2 className={styles.title}>Plett Polo</h2>
                    <h3 className={styles.category}>
                      Leading polo club in the entire African continent.
                    </h3>
                  </span>
                </figure>
              </Link>
            </div>

            <div className={styles.cell}>
              <Link to="/interests" active>
                <figure className={styles.imageContainer}>
                  <Img
                    fluid={data.image5.childImageSharp.fluid}
                    alt="Safari with elephants"
                    className={styles.attractionImage}
                  />
                  <figcaption className={styles.imageContent}>
                    <h2 className={styles.title}>
                      Plettenberg Bay Game Reserve
                    </h2>
                    <h3 className={styles.category}>
                      The only big 5 game reserve in Plett
                    </h3>
                  </figcaption>
                  <span className={styles.imageContentHover}>
                    <h2 className={styles.title}>
                      Plettenberg Bay Game Reserve
                    </h2>
                    <h3 className={styles.category}>
                      The only big 5 game reserve in Plett
                    </h3>
                  </span>
                </figure>
              </Link>
            </div>

            <div className={styles.cell}>
              <Link to="/interests" active>
                <figure className={styles.imageContainer}>
                  <Img
                    fluid={data.image13.childImageSharp.fluid}
                    alt="robberg nature reserve"
                    className={styles.attractionImage}
                  />
                  <figcaption className={styles.imageContent}>
                    <h2 className={styles.title}>Robberg Nature Reserve</h2>
                    <h3 className={styles.category}>
                      National monument, prehistoric rocks, stone age artefacts
                    </h3>
                  </figcaption>
                  <span className={styles.imageContentHover}>
                    <h2 className={styles.title}>Robberg Nature Reserve</h2>
                    <h3 className={styles.category}>
                      National monument, prehistoric rocks, stone age artefacts
                    </h3>
                  </span>
                </figure>
              </Link>
            </div>

            <div className={styles.cell}>
              <Link to="/interests" active>
                <figure className={styles.imageContainer}>
                  <Img
                    fluid={data.image11.childImageSharp.fluid}
                    alt="Two people kayaking on water"
                    className={styles.attractionImage}
                  />
                  <figcaption className={styles.imageContent}>
                    <h2 className={styles.title}>Untouched Adventures</h2>
                    <h3 className={styles.category}>
                      Kayak and lilo up the Storms River Gorge
                    </h3>
                  </figcaption>
                  <span className={styles.imageContentHover}>
                    <h2 className={styles.title}>Untouched Adventures</h2>
                    <h3 className={styles.category}>
                      Kayak and lilo up the Storms River Gorge
                    </h3>
                  </span>
                </figure>
              </Link>
            </div>

            <div className={styles.cell}>
              <Link to="/interests" active>
                <figure className={styles.imageContainer}>
                  <Img
                    fluid={data.image12.childImageSharp.fluid}
                    alt="water slide theme park"
                    className={styles.attractionImage}
                  />
                  <figcaption className={styles.imageContent}>
                    <h2 className={styles.title}>WWild Waters Fun Park</h2>
                    <h3 className={styles.category}>
                      Water slide, trampolines, swimming pool and putt-putt
                    </h3>
                  </figcaption>
                  <span className={styles.imageContentHover}>
                    <h2 className={styles.title}>Wild Waters Fun Park</h2>
                    <h3 className={styles.category}>
                      Water slide, trampolines, swimming pool and putt-putt
                    </h3>
                  </span>
                </figure>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default LocalAttractions
