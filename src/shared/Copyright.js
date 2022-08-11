import React from 'react'
import '../styles/shared/Copyright.css'
import { Container, Row, Col, } from 'react-bootstrap';

const Copyright = () => {
  return (
    <Container fluid className='copyright'>
      <Row className='text-center'>
        <Col md={12}>
          <p>Copyright © 42 Card Solutions</p>
        </Col>
      </Row>
    </Container>
  )
}

export default Copyright