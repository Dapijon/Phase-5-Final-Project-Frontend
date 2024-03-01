import React, { useState } from 'react';
import { Table, Pagination, Form } from 'react-bootstrap';

function AllTransactions({ transactions }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [transactionsPerPage] = useState(5);
  const [searchTerm, setSearchTerm] = useState('');

  const indexOfLastTransaction = currentPage * transactionsPerPage;
  const indexOfFirstTransaction = indexOfLastTransaction - transactionsPerPage;

  const filteredTransactions = transactions.filter(transaction =>
    transaction.sender.first_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    transaction.sender.last_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    transaction.receiver.first_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    transaction.receiver.last_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const currentTransactions = filteredTransactions.slice(indexOfFirstTransaction, indexOfLastTransaction);

  const totalPages = Math.ceil(filteredTransactions.length / transactionsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1); // Reset pagination to first page when search term changes
  };

  if (!transactions) {
    return <div>No transactions available.</div>;
  }

  return (
    <div>
      <h2>All Transactions</h2>
      <Form.Group className="mb-3">
        <Form.Control
          type="text"
          placeholder="Search by sender or recipient name"
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </Form.Group>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Transaction ID</th>
            <th>Sender Name</th>
            <th>Recipient Name</th>
            <th>Amount</th>
            <th>Timestamp</th>
          </tr>
        </thead>
        <tbody>
          {currentTransactions.map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.id}</td>
              <td>{`${transaction.sender.first_name} ${transaction.sender.last_name}`}</td>
              <td>{`${transaction.receiver.first_name} ${transaction.receiver.last_name}`}</td>
              <td>{transaction.amount}</td>
              <td>{transaction.timestamp}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Pagination>
        <Pagination.Prev onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1} />
        {[...Array(totalPages)].map((_, index) => (
          <Pagination.Item key={index} active={index + 1 === currentPage} onClick={() => handlePageChange(index + 1)}>
            {index + 1}
          </Pagination.Item>
        ))}
        <Pagination.Next onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages} />
      </Pagination>
    </div>
  );
}

export default AllTransactions;
