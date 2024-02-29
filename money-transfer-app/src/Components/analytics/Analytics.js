import React, { useEffect } from 'react';
import './analytics.css';
import { Container, Row, Col, Alert } from 'react-bootstrap';
import UserSummary from './UserSummary';
import UserAnalyticsDetails from './UserAnalyticsDetails';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import {jwtDecode} from 'jwt-decode';
import { getUserSummaryStart, getUserSummarySuccess, getUserSummaryFailure } from '../../app/userSummarySlice';
import { setError, setLoading, setTransactions } from '../../app/analyticsSlice';

const Analytics = () => {
  const currentUser = useSelector((state)=> state.auth.user);
  const accessToken = useSelector((state) => state.auth.accessToken);
  const dispatch = useDispatch();
  const transactions = useSelector((state) => state.analytics.transactions);
  const userSummary = useSelector((state) => state.userSummary.userSummary);

  console.log(currentUser)

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        dispatch(setLoading());
        const decodedToken = jwtDecode(accessToken);
        const userId = decodedToken.userId;
        console.log('user ID',userId);

        const response = await axios.get(`http://127.0.0.1:5000/summary/user-transactions`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        console.log('response',response.data)
        dispatch(setTransactions(response.data));
      } catch (error) {
        dispatch(setError(error.message));
      }
    };

    const fetchUserSummary = async () => {
      try {
        dispatch(getUserSummaryStart());
        const response = await axios.get('http://127.0.0.1:5000/summary/user-summary', {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        dispatch(getUserSummarySuccess(response.data));
      } catch (error) {
        dispatch(getUserSummaryFailure(error.message));
      }
    };

    if (accessToken) {
      fetchTransactions();
      fetchUserSummary();
    }
  }, [accessToken, dispatch]);

  return (
    <>
      {currentUser ? `Welcome, ${currentUser.first_name}!` : 'Please sign in'}
      <Container fluid className='analytics'>
        <Row>
          <Col xs={12} md={4} className="mb-3">
            <div style={{ background: 'none' }}>
              <UserSummary userSummary={userSummary} />
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={12}>
            <h4>Details</h4>
            {transactions.loading && <p>Loading...</p>}
            {transactions.error && <Alert variant="danger">{transactions.error}</Alert>}
            {transactions.length === 0 && !transactions.loading && <p>No transactions found.</p>}
            {transactions.length > 0 && <UserAnalyticsDetails trans={transactions} />}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Analytics;
