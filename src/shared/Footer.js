import React from 'react';
import '../styles/shared/Footer.css';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom'
// import logo from '../assests/logo.png'
import logo from '../assests/SA WYT.png'
import border from '../assests/borderbottom.png'
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = () => {
  return (
    <div className='footer'>
      <Container>
        <Row>
          <Col md={4} className="footerLogo">
            <div>
              <Link to='/'>
                <Image src={logo} className="img-fluid" width="250px" />
              </Link>
            </div>
          </Col>
          <Col md={4} className="quick-link">
            <h2>Quick Links</h2>
            <Image src={border} className='img-fluid borderImage' />
            <ul>
              <li> <Link to="/">Home</Link>  </li>
              <li> <Link to="/services">Services</Link>  </li>
              <li> <Link to="/about">About Us</Link>  </li>
              <li> <Link to="/contact">Contact Us</Link>  </li>
            </ul>
          </Col>
          <Col md={4}>
            <h2>Connect With Us</h2>
            <Image src={border} className='img-fluid borderImage' />
            <br />
              <a href='mailto:info@42cards.in' className="emailIcon"> <EmailIcon /> info@42cards.in</a>
            <h2 className="mt-5">Follow Us</h2>
            <Image src={border} className='img-fluid borderImage' />
            <div className="socialIcon">
            <a href="https://www.linkedin.com/company/42-card-solutions-pvt-ltd" target="_blank" className="linkedinIcon"> 
              <LinkedInIcon />
            </a>
            <a href="https://twitter.com/42cardsolutions" target="_blank" className="twitterIcon"> 
              <TwitterIcon />
            </a>
            <a href="https://www.youtube.com/channel/UCDE2mxycdQv705jVb0JwGjw" target="_blank" className="youTubeIcon"> 
              <YouTubeIcon />
            </a>
            </div>
          </Col>
        </Row>
      </Container>
      
    </div>
  )
}

export default Footer