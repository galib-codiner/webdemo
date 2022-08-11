import React from 'react'
import '../styles/shared/Thanks.css';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'

const Thanks = () => {
  return (
    <>
    <div className='serviceBanner'>
    <Container>
        <Row>
            <Col md={12}>
              <h1>Thank You</h1>
            </Col>
        </Row>
    </Container>
    </div>
    <Container>
    <Row className='text-center mt-5 mb-5'>
        <Col md={12}>
            <h2>Your submission has been sent successfully!</h2>
            <Button className="mt-3" style={{background: '#014a97', border: 'none'}}>
                <Link style={{color: '#fff'}} to='/' >Home Page</Link>
            </Button>
        </Col>
    </Row>
</Container>
</>
  )
}

export default Thanks