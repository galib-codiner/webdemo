import React from 'react'
import '../styles/layout/Services.css'
import { Container, Row, Col } from 'react-bootstrap';

const ServiceBanner = () => {
  return (
    <div className='serviceBanner'>
        <Container>
            <Row>
                <Col md={12}>
                  <h1>Services</h1>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default ServiceBanner