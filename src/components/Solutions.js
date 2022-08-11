import React from 'react'
import '../styles/layout/Home.css'
import { Container, Row, Col, Image } from 'react-bootstrap';
import solutions from '../assests/solutions.png'

const Solutions = () => {
  return (
    <div className='mt-5 mb-5 solutions'>
      <Container>
        <Row>
          <Col md={12}>
            <h2>With 42 Card Solutions, you can</h2>
            <Image src={solutions} className='img-fluid' />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Solutions