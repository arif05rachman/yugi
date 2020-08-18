import React from 'react'
import { Navbar } from 'react-bootstrap'

export default function FooterComponent() {
  return(
    <Navbar bg="dark" variant="dark" sticky="bottom">
      <Navbar.Brand>
        Yugi-Deck
      </Navbar.Brand>
    </Navbar>
  )
}