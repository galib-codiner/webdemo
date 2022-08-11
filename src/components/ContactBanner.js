import React from 'react'
import '../styles/layout/Contact.css'
import { Container, Row, Col } from 'react-bootstrap';

const ContactBanner = () => {
  return (
    <div className='contactBanner'>
        <Container>
            <Row>
                <Col md={12}>
                    <h1>Contact Us</h1>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default ContactBanner