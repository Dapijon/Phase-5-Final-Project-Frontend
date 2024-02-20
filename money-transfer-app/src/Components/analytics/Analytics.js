
import React from 'react'
import './analytics.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import UserSummary from './UserSummary'
import UserAnalyticsDetails from './UserAnalyticsDetails';

const Analytics = () => {

  return (
    <>

      <Container fluid className='analytics'>
        <Row>
          <Col xs={12} md={4} className="mb-3">
            <div style={{ background: 'none' }}>
            <UserSummary />
            </div>  
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={12}>
          <h4>Details</h4>
            <UserAnalyticsDetails />
          </Col>
        </Row>
      </Container>

    </>
  )
}

export default Analytics;
