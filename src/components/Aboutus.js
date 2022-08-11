import React from 'react'
import '../styles/layout/About.css'
import { Container, Row, Col, Image } from 'react-bootstrap';
import whoweAre from '../assests/who-we-are.png'
import whatWeDo from '../assests/what-we-do.png'

const Aboutus = () => {
  return (
    <div>
      <Container>
        <Row className="whoweAre">
          <Col md={6}>
            <Image src={whoweAre} className="img-fluid" />
          </Col>
          <Col md={6}>
            <h2>Who We Are</h2>
            <p>Founded by team of seasoned bankers with over 120 years of collective experience in banking, 
              financial services and cards, encompassing strategy, operations, marketing, risk & technology, 
              both in India and internationally.
            </p>
          </Col>
        </Row>
        <Row  className="whatWeDo">
          <Col md={6} id="first">
            <h2>What We Do</h2>
            <p>We offer credit card processing solutions that can help you in effectively managing your 
              credit card portfolio end-to-end. These solutions are customised to meet the unique strategic, 
              operational and compliance requirements of each bank.
            </p>
          </Col>
          <Col md={6} id="second">
            <Image src={whatWeDo} className="img-fluid" />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Aboutus