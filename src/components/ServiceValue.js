import React from 'react'
import '../styles/layout/Services.css'
import { Container, Row, Col } from 'react-bootstrap';

const ServiceValue = () => {
  return (
    <div>
        <Container className="our-values">
            <Row>
                <Col md={12}>
                    <h2>Our Value Proposition</h2>
                    <p>As a bank, entrusting your credit card management and operations to 
                        <strong> 42 Card Solutions </strong> 
                        not only provides you with a cost-effective and scalable credit card program but 
                        also gives you access to futuristic technology with the latest digital and mobile 
                        solutions and an enhanced user experience. Along with an experienced team of bankers, 
                        42 Card Solutions offers you cutting edge technology that is robust, flexible and 
                        would meet the rigorous compliance, regulatory, risk and fraud control 
                        requirements of your organisation. Our services include –
                    </p>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default ServiceValue