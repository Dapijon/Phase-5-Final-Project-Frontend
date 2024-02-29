import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllTransactionsSummary } from '../../app/allTransactionsSlice';

const AllSummary = () => {
  const dispatch = useDispatch();
  const { summary, loading, error } = useSelector(state => state.allTransactionsSummary);
  const accessToken = useSelector((state) => state.auth.accessToken);

  // useEffect(() => {
  //   const fetchSummary = () => {
  //     if (!accessToken) {
  //       console.error('Access token not found');
  //       return;
  //     }

  //     dispatch(fetchAllTransactionsSummary());
  //   };

  //   fetchSummary();
  // }, [dispatch, accessToken]);

  return (
    <div className='allSummary'>
      <h2>Admin</h2>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {summary && (
        <table>
          <thead>
            <tr>
              <th>Transaction ID</th>
              <th>Sender ID</th>
              <th>Receiver ID</th>
              <th>Amount</th>
              <th>Timestamp</th>
            </tr>
          </thead>
          <tbody>
            {/* {summary.map(transaction => (
              <tr key={transaction.id}>
                <td>{transaction.id}</td>
                <td>{transaction.sender_id}</td>
                <td>{transaction.receiver_id}</td>
                <td>{transaction.amount}</td>
                <td>{transaction.timestamp}</td>
              </tr>
            ))} */}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AllSummary;