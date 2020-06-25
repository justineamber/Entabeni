import React from "react"
import { Container, Navbar, NavDropdown, Nav, Button } from "react-bootstrap"
import navBarStyles from "./navBar.module.css"
import { GiSeahorse } from "react-icons/gi"
import { Link } from "gatsby"
import Img from "gatsby-image"

const navBar = ({ pageInfo, logoImg }) => {
  function handleClick(e) {
    e.preventDefault()
    console.log("The button was clicked.")
  }
  return (
    <Navbar bg="light" fixed="top" justify-content-between expand="lg">
      <Container>
        <Navbar.Brand bsPrefix={navBarStyles.navBrand} href="#home">
          <Link to="/home" activeClassName="active">
            <Img
              fixed={logoImg}
              width="100"
              height="100"
              alt="Plett Beach House logo"
              className="d-inline-block align-top"
            />
          </Link>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="</div>responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto" activeKey={pageInfo && pageInfo.pageName}>
            <div className={navBarStyles.navMenuSVG}>
              <GiSeahorse />
              <NavDropdown title="History" id="collasible-nav-dropdown">
                <Link to="/history" className="nav-link" active>
                  <NavDropdown.Item href="#history">History</NavDropdown.Item>
                </Link>
                <Link to="/location" className="nav-link" active>
                  <NavDropdown.Item href="#location">Location</NavDropdown.Item>
                </Link>
              </NavDropdown>
            </div>

            <div className={navBarStyles.navMenuSVG}>
              <GiSeahorse />
              <Link to="/offers" className="nav-link" active>
                Offers
              </Link>
            </div>
            <div className={navBarStyles.navMenuSVG}>
              <GiSeahorse />
              <Link to="/amenities" className="nav-link" active>
                Amenities
              </Link>
            </div>
            <div className={navBarStyles.navMenuSVG}>
              <GiSeahorse />
              <Link to="/localAttractions" className="nav-link" active>
                Local Attractions
              </Link>
            </div>
            <div className={navBarStyles.navMenuSVG}>
              <GiSeahorse />

              <Link to="/gallery" className="nav-link" active>
                Gallery
              </Link>
            </div>
            <div className={navBarStyles.navMenuSVG}>
              <GiSeahorse />
              <Link to="/contact" className="nav-link" active>
                Contact
              </Link>
            </div>
          </Nav>
          <Link to="/contact" className="nav-link" active>
            <Button
              type="button"
              active
              handleClick={handleClick}
              variant="dark"
            >
              BOOK NOW
            </Button>
          </Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default navBar
