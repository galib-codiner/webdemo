import React from 'react'
import '../styles/layout/Services.css'
import { Container, Row, Col, Image } from 'react-bootstrap';
import Flexible from '../assests/Flexible.png'
import Scalable from '../assests/Scalable.png'
import Economical from '../assests/Economical.png'
import Technology from '../assests/Technology.png'
import Analytics from '../assests/Analytics.png'
import Marketing from '../assests/Marketing.png'

const ServiceBenifits = () => {
  return (
    <div className='benifits mb-5'>
        <Container>
            <Row className='mb-4'>
                <Col>
                    <h2>Benefits</h2>
                </Col>
            </Row>
            <Row className="text-center">
                <Col md={3}>
                    <Image src={Flexible} />
                    <h3>Flexible</h3>
                </Col>
                <Col md={3}>
                    <Image src={Scalable} />
                    <h3>Scalable</h3>
                </Col>
                <Col md={3}>
                    <Image src={Economical} />
                    <h3>Economical</h3>
                </Col>
                <Col md={3}>
                    <Image src={Technology} />
                    <h3>State of Art Technology</h3>
                </Col>
            </Row>
            <Row className="text-center">
                <Col md={3}>
                   
                </Col>
                <Col md={3}>
                    <Image src={Analytics} />
                    <h3>Analytics</h3>
                </Col>
                <Col md={3}>
                    <Image src={Marketing} />
                    <h3>Marketing Solutions</h3>
                </Col>
                <Col md={3}>
                    
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default ServiceBenifits