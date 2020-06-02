import React, { useState } from "react"
import { Navbar, NavDropdown, Nav, Button } from "react-bootstrap"
import navBarV2Styles from "./navBarV2.module.css"
import { GiSeahorse } from "react-icons/gi"

const CustomNavbar2 = ({ pageInfo }) => {
  console.log(pageInfo)

  return (
    <>
      <Navbar sticky="top" bg="light" expand="lg">
        <img
          className={navBarV2Styles.PBHLogo}
          src={`/logo.png`}
          alt="Plett Beach House logo"
        />
        <Navbar.Brand href="#home"></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav
            className={navBarV2Styles.navMenu}
            activeKey={pageInfo && pageInfo.pageName}
          >
            <div className={navBarV2Styles.navMenuSVG}>
              <GiSeahorse />
              <NavDropdown title="History" id="basic-nav-dropdown">
                <GiSeahorse />
                <NavDropdown.Item href="#history">History</NavDropdown.Item>
                <NavDropdown.Item href="#location">Location</NavDropdown.Item>
              </NavDropdown>
            </div>
            <div className={navBarV2Styles.navMenuSVG}>
              <GiSeahorse />
              <Nav.Link href="#offers">Offers</Nav.Link>
            </div>
            <div className={navBarV2Styles.navMenuSVG}>
              <GiSeahorse />
              <Nav.Link href="#amenities">Amenities</Nav.Link>
            </div>
            <div className={navBarV2Styles.navMenuSVG}>
              <GiSeahorse />
              <Nav.Link href="#happenings">Happenings</Nav.Link>
            </div>
            <div className={navBarV2Styles.navMenuSVG}>
              <GiSeahorse />
              <NavDropdown title="Gallery" id="basic-nav-dropdown">
                <NavDropdown.Item href="#gallery">Gallery</NavDropdown.Item>
                <NavDropdown.Item href="#video">Video</NavDropdown.Item>
              </NavDropdown>
            </div>
            <div className={navBarV2Styles.navMenuSVG}>
              <GiSeahorse />
              <Nav.Link href="#contact">Contact</Nav.Link>
            </div>
          </Nav>
        </Navbar.Collapse>
        <Button bsPrefix={`${navBarV2Styles.bookingBtn}`} variant="info">
          BOOK NOW
        </Button>
      </Navbar>
    </>
  )
}
//}

export default CustomNavbar2
