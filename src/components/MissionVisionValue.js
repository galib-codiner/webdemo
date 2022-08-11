import React from 'react'
import '../styles/layout/Home.css'
import { Container, Row, Col } from 'react-bootstrap';

const MissionVisionValue = () => {
  return (
    <div fluid className='visionMissionValue'>
      <Container>
        <Row>
          <Col md={4} className="vision">
            <div className='inner'>
              <h2>Vision</h2>
              <p>To be the first choice for banks in their quest to build, operate and 
              manage a profitable credit card business that delivers a seamless and 
              delightful digital customer experience.  
              </p>
            </div>
          </Col>
          <Col md={4} className="mission">
          <div className='inner'>
            <h2>Mission</h2>
            <p>To work with our partner banks using future technology, robust processes and well-trained 
              personnel to ensure timely, accurate, compliant and cost-effective solutions that not only 
              meet our client’s needs but also go well beyond their expectations.
            </p>
          </div>
          </Col>
          <Col md={4} className="value">
          <div className='inner'>
            <h2>Values</h2>
            <ul>
              <li>Responsibility</li>
              <li>Reliability</li>
              <li>Transparency</li>
              <li>Accountability</li>
              <li>Fairness</li>
            </ul>
          </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default MissionVisionValue