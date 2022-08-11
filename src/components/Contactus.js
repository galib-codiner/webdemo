import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import '../styles/layout/Contact.css'
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import EmailIcon from '@mui/icons-material/Email';
import ReCAPTCHA from "react-google-recaptcha";

const Contactus = () => {
    const [val, setVal] = useState();
    const form = useRef();
    const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_9kgyhxf', 'template_hf1be7k', form.current, 'N8E7v4KNRh_GvIfmB')
      .then((result) => {
          console.log(result.text);
          console.log('Message Sent')
      }, (error) => {
          console.log(error.text);
      });
  };

const [verified, setVerified] = useState(false)

// Recaptcha Function
function onChange(value) {
    console.log("Captcha value:", value);
    setVerified(true)
}

  return (
    <div className="contact-us">
        <Container>
            <Row>
                <Col md={12}>
                    <h2>Transform Your Credit Cards Business</h2>
                </Col>
            </Row>
            <Row className="mt-4 mb-4">
                <Col md={6}>
                    <div className="contact-left">
                        <p>
                            Be one step ahead in today’s fast-paced competitive environment and make your customers 
                            choose you over others by offering a complete and customised credit cards experience. 
                            Partner with us and we’ll help you with everything that your bank needs in order to 
                            provide your customer with solutions that meet their unique requirements.
                        </p>
                        <div className="emailId">
                            <a href='mailto:info@42cards.in' className="emailIcon" style={{ color: '#000'}}> 
                                <EmailIcon /> info@42cards.in
                            </a>
                        </div>
                    </div>
                </Col>
                <Col md={6}>
                    <div className="contact-right">
                        <p>
                            We are happy to answer your questions. Please submit 
                            your query below and we will get in touch with you.
                        </p>
                        <div className="contactForm">
                        <Form ref={form} onSubmit={sendEmail}>
                            <Form.Group className="mb-3" controlId="yourName">
                                <Form.Control 
                                type="text" 
                                placeholder="Your Name*" 
                                name="user_name" 
                                value={val}
                                required 
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="yourEmail">
                                <Form.Control 
                                type="email" 
                                placeholder="Email*" 
                                name="user_email" 
                                value={val}
                                required
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="yourOrganization">
                                <Form.Control 
                                type="text" 
                                placeholder="Organization*" 
                                name="user_organization"  
                                value={val}
                                required
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="message">
                                <Form.Control 
                                as="textarea" 
                                rows={3}  
                                placeholder="Message" 
                                name="user_message" 
                                value={val}
                                />
                            </Form.Group>
                            <ReCAPTCHA
                                sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                                onChange={onChange}
                            />
                            <Button 
                                variant="primary" 
                                type="submit" 
                                value="Send" 
                                onClick={() => setVal(() => "")}
                                disabled={!verified}
                                >
                                Submit
                            </Button>
                        </Form>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Contactus