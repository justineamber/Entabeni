import React from "react"
import { Container, Navbar, NavDropdown, Nav } from "react-bootstrap"
import navBarStyles from "./nav-bar.module.css"
import { GiSeahorse, GiPresent, GiPhone } from "react-icons/gi"
import { Link } from "gatsby"
import Img from "gatsby-image"

const NavBar = ({ pageInfo, logoImage }) => {
  return (
    <Navbar bg="light" fixed="top" expand="lg">
      <Container>
        <Link to="/">
          <Navbar.Brand bsPrefix={navBarStyles.navBrand}>
            <Img
              fixed={logoImage}
              width="100"
              height="100"
              alt="Site logo"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
        </Link>
        <div className={navBarStyles.menuCenterMobile}>
          <a href="/offers">
            <GiPresent className={navBarStyles.svgGiftMobileViewWrapper} />
          </a>
          <a href="tel:+4796801110">
            <GiPhone className={navBarStyles.svgPhoneMobileViewWrapper} />
          </a>
        </div>
        <div className={navBarStyles.menuLeftMobile}>
          <a className={navBarStyles.logoStyleMobile} href="/">
            Entabene
          </a>
        </div>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav
            className={navBarStyles.navStyles}
            activeKey={pageInfo && pageInfo.pageName}
          >
            <div className={navBarStyles.navMenuSVG}>
              <GiSeahorse />
              <NavDropdown title="History" id="collasible-nav-dropdown">
                <NavDropdown.Item>
                  <Link to="/history" className="nav-link">
                    History
                  </Link>
                </NavDropdown.Item>

                <NavDropdown.Item>
                  <Link to="/location" className="nav-link">
                    Location
                  </Link>
                </NavDropdown.Item>
              </NavDropdown>
            </div>

            <div className={navBarStyles.navMenuSVG}>
              <GiSeahorse />
              <Link to="/offers" className="nav-link">
                Offers
              </Link>
            </div>
            <div className={navBarStyles.navMenuSVG}>
              <GiSeahorse />
              <Link to="/amenities" className="nav-link">
                Amenities
              </Link>
            </div>
            <div className={navBarStyles.navMenuSVG}>
              <GiSeahorse />
              <Link to="/experiences" className="nav-link">
                Experiences
              </Link>
            </div>
            <div className={navBarStyles.navMenuSVG}>
              <GiSeahorse />

              <Link to="/gallery" className="nav-link">
                Gallery
              </Link>
            </div>
            <div className={navBarStyles.navMenuSVG}>
              <GiSeahorse />
              <Link to="/contact" className="nav-link">
                Contact
              </Link>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar
