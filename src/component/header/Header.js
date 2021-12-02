import React from 'react'
import { Container, Navbar } from 'react-bootstrap'

const Header = () => {
  return (
    <div>
      <Container>
  <Navbar style={{backgroundColor:"#eeebeb"}} >
    <Container>
      <Navbar.Brand href="#">Profile</Navbar.Brand>
    </Container>
  </Navbar>
</Container>
    </div>
  )
}

export default Header
