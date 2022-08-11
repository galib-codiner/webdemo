import React, {useState} from 'react'
import '../styles/shared/Header.css'
import { Navbar, Container, Nav, Image } from 'react-bootstrap';
import { NavLink } from 'react-router-dom'
// import logo from '../assests/logo.png'logo-blue-1
// import logo from '../assests/logo-black.png'
import logo from '../assests/SA BLU.png'


const Header = () => {

const [show, setShow] = useState(false);
const handleNavClick = () => {
  setShow(false);
};

  return (
    <>
      <Navbar className='header' collapseOnSelect expand="lg" fixed='top'>
        <Container>
        <Navbar.Brand>
          <NavLink to="/">
            <Image src={logo} />
          </NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={() => setShow(!show)} />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link>
              <NavLink exact to="/" className="main-nav" activeClassName="main-nav-active" onClick={handleNavClick}>
                Home
              </NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink exact to="/services" className="main-nav" activeClassName="main-nav-active" onClick={handleNavClick}>
                Services
              </NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink exact to="/about" className="main-nav" activeClassName="main-nav-active" onClick={handleNavClick}>
                About Us
              </NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink exact to="/contact" className="main-nav" activeClassName="main-nav-active" onClick={handleNavClick}>
                Contact Us
              </NavLink>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Header