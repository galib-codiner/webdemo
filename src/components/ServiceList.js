import React from 'react'
import '../styles/layout/Services.css'
import { Container, Row, Col } from 'react-bootstrap';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import CreditScoreIcon from '@mui/icons-material/CreditScore';
import PaymentsIcon from '@mui/icons-material/Payments';
import AddCardIcon from '@mui/icons-material/AddCard';
import MoneyIcon from '@mui/icons-material/Money';
import CollectionsBookmarkIcon from '@mui/icons-material/CollectionsBookmark';
import ViewDayIcon from '@mui/icons-material/ViewDay';
import PhishingIcon from '@mui/icons-material/Phishing';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';

const ServiceList = () => {
  return (
    <div className='serviceList mt-5 mb-5'>
      <Container>
        <Row>
          <Col md={4}>
            <span class="icon"> <CreditCardIcon /> </span>
            <div class="content">
              <h5>Credit Card Design & Onboarding</h5>
            </div>
          </Col>
          <Col md={4}>
            <span class="icon"> <CreditScoreIcon /> </span>
            <div class="content">
              <h5>Credit Card Authorization</h5>
            </div>
          </Col>
          <Col md={4}>
            <span class="icon"> <PaymentsIcon /> </span>
            <div class="content">
              <h5>Payment Processing</h5>
            </div>
          </Col>

          <Col md={4}>
            <span class="icon"> <AddCardIcon /> </span>
            <div class="content">
              <h5>Rewards Program Management</h5>
            </div>
          </Col>
          <Col md={4}>
            <span class="icon"> <MoneyIcon /> </span>
            <div class="content">
              <h5>Customer Billing</h5>
            </div>
          </Col>
          <Col md={4}>
            <span class="icon"> <CollectionsBookmarkIcon /> </span>
            <div class="content">
              <h5>Collections & Dispute Resolutions</h5>
            </div>
          </Col>

          <Col md={4}>
            <span class="icon"> <ViewDayIcon /> </span>
            <div class="content">
              <h5>Credit Card Risk Management</h5>
            </div>
          </Col>
          <Col md={4}>
            <span class="icon"> <PhishingIcon /> </span>
            <div class="content">
              <h5>Credit Card Fraud Detection</h5>
            </div>
          </Col>
          <Col md={4}>
            <span class="icon"> <SupportAgentIcon /> </span>
            <div class="content">
              <h5>Customer Query Resolution</h5>
            </div>
          </Col>
        </Row>
      </Container>

    </div>
  )
}

export default ServiceList