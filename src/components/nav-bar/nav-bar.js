import React from "react"
import { Container, Navbar, NavDropdown, Nav } from "react-bootstrap"
import navBarStyles from "./nav-bar.module.css"
import { GiSeahorse, GiPresent, GiPhone } from "react-icons/gi"
import { Link } from "gatsby"

const NavBar = ({ pageInfo }) => {
  return (
    <Navbar bg="light" fixed="top" expand="lg">
      <Container>
        <Link to="/" className={navBarStyles.navbarBrand}>
          <Navbar.Brand>Entabeni</Navbar.Brand>
        </Link>

        <div className={navBarStyles.menuCenterMobile}>
          <a href="/offers">
            <GiPresent className={navBarStyles.svgGiftMobileViewWrapper} />
          </a>
          <a href="tel:+4796801110">
            <GiPhone className={navBarStyles.svgPhoneMobileViewWrapper} />
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
              <NavDropdown
                title="History"
                id="collasible-nav-dropdown"
                className={navBarStyles.navLinkDropdownItem}
              >
                <NavDropdown.Item>
                  <Link to="/history" className={navBarStyles.navLink}>
                    History
                  </Link>
                </NavDropdown.Item>

                <NavDropdown.Item>
                  <Link to="/location" className={navBarStyles.navLink}>
                    Location
                  </Link>
                </NavDropdown.Item>
              </NavDropdown>
            </div>

            <div className={navBarStyles.navMenuSVG}>
              <GiSeahorse />
              <Link to="/offers" className={navBarStyles.navLink}>
                Offers
              </Link>
            </div>
            <div className={navBarStyles.navMenuSVG}>
              <GiSeahorse />
              <Link to="/amenities" className={navBarStyles.navLink}>
                Amenities
              </Link>
            </div>
            <div className={navBarStyles.navMenuSVG}>
              <GiSeahorse />
              <Link to="/experiences" className={navBarStyles.navLink}>
                Experiences
              </Link>
            </div>
            <div className={navBarStyles.navMenuSVG}>
              <GiSeahorse />

              <Link to="/gallery" className={navBarStyles.navLink}>
                Gallery
              </Link>
            </div>
            <div className={navBarStyles.navMenuSVG}>
              <GiSeahorse />
              <Link to="/contact" className={navBarStyles.navLink}>
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
