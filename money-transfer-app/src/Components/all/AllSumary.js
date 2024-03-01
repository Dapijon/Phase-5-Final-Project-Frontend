import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import './AllSummary.css'


const AllSummary = ({ summary }) => {
  
  if (!summary) {
    return <div>No Summary available.</div>;
  }

  

  return (
    

<Table striped bordered hover center className='summary-table'>
<thead>
  <tr>         
    <th>Total Transactions</th>
    <th>Total Amount Transacted</th>
    <th>Average Transaction</th>
    <th>Total Balance</th>
  </tr>
</thead>
<tbody>
  <tr className='summary'>
    
    <td>  {summary.total_transactions}</td>
    <td>{summary.total_amount_transacted}</td>
      <td>{summary.Average_transaction}</td>
      <td>{summary.total_balance}</td>
  </tr>
 
</tbody>
</Table>
  );
}
export default AllSummary;