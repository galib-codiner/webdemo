import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';

const About = () => {
  return (
    <div>
        <Container className="about mt-5 mb-5">
            <Row>
                <Col md={6}>
                    <h2>
                        Partner with 42 Card Solutions to make your bank everyone’s choice for Credit Cards!
                    </h2>
                    <p>
                        Credit Cards are one of the most profitable offerings in a bank’s product portfolio. 
                        Let a team of seasoned bankers at 42 Card Solutions manage this business for you in 
                        a manner that not only makes economic sense for your bank but also helps you deliver 
                        best-in-class experience for your customers in terms of quality, timeliness and user 
                        interface.
                    </p>
                </Col>
                <Col md={6} className="aboutVideo">
                    <div>
                    <iframe 
                        width="440" 
                        height="293" 
                        src="https://www.youtube.com/embed/XCa2zgwxZKQ" 
                        title="Beyond the boundaries; A brief to 42 Card Solutions" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen>
                    </iframe>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default About