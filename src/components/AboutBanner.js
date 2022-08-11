import React from 'react'
import '../styles/layout/About.css'
import { Container, Row, Col } from 'react-bootstrap';

const AboutBanner = () => {
  return (
    <div className='aboutBanner'>
        <Container>
            <Row>
                <Col md={12}>
                    <h1>About Us</h1>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default AboutBanner