import React from 'react'
import '../styles/layout/About.css'
import { Container, Row, Col } from 'react-bootstrap';

const AboutusWeOffer = () => {
  return (
    <div className="we-offer">
      <Container>
        <Row className="we-offer-title">
        <Col md={12}>
            <h1>We Offer</h1>
        </Col>
        </Row>
        <Row className="we-offer-body">
        <Col md={4}>
            <h3>Card Programs built for Everyone</h3>
            <h4 className="pb-4">Limit assignment based on customer risk assessment & credit profiles including secured cards.</h4>
        </Col>
        <Col md={4}>
            <h3>Cards that can be used Everywhere.</h3>
            <h4 className="pb-4">Through POS machines, UPI, E-Commerce websites.</h4>
        </Col>
        <Col md={4}>
            <h3>A Card for Everything</h3>
            <h4 className="pb-4">Enable customer purchases, both large and small.</h4>
        </Col>
        <Col md={4}>
            <h3>Customised Card Configurations</h3>
            <h4 className="pb-4">Restrict usage based on merchant codes, location, amount limits etc.</h4>
        </Col>
        <Col md={4}>
            <h3>End-to-End Support</h3>
            <h4 className="pb-4">We undertake the complete customer life cycle management right from KYC checks, onboarding, 
                risk profiling, fraud control, billing and collections.
            </h4>
        </Col>
        <Col md={4}>
            <h3>Rewards Program Management</h3>
            <h4 className="pb-4">We will manage the entire cards reward and customer loyalty programs for you.</h4>
        </Col>
        </Row>
      </Container>
    </div>
  )
}

export default AboutusWeOffer