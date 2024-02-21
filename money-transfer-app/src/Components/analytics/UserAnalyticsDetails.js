import React, {useState} from 'react';
import Table from 'react-bootstrap/Table';
import Pagination from 'react-bootstrap/Pagination';
import './userAnalytics.css'

const UserAnalyticsDetails = ({ trans }) => {
  
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = trans.slice(indexOfFirstItem, indexOfLastItem);
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

      // Pagination items
      const pageNumbers = [];
      for (let i = 1; i <= Math.ceil(trans.length / itemsPerPage); i++) {
          pageNumbers.push(
              <Pagination.Item key={i} active={i === currentPage} onClick={() => paginate(i)}>
                  {i}
              </Pagination.Item>
          );
      }
    
    const transactionlist = currentItems.map((item => 
    
        <tr key={item.id}>
            <td>{item.first_name}</td>
            <td>{item.last_name}</td>
            <td> {item.sent ? item.sent : '-'}</td>
            <td> {item.received}</td>
            <td>{item.amount}</td>
            <td>{item.date}</td>

        </tr>
    ))

    return (
        <div className='user-Analytics'>




            <Table striped bordered hover center>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Details</th>
                        <th>Sent</th>
                        <th>Received</th>
                        <th>Amount</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {/* <tr>

                        <td>John Doe</td>
                        <td>John Doe</td>
                        <td>0722 000 000</td>
                        <td> -</td>
                        <td>KSHS 1,000</td>
                        <td>12/02/24 12:43pm</td>
                    </tr>
                    <tr>

                        <td>John Doe</td>
                        <td>John Doe</td>
                        <td> -</td>
                        <td> 0722 111 111</td>
                        <td>KSHS 1,000</td>
                        <td>12/02/24 12:43pm</td>
                    </tr> */}

                    {transactionlist}

                </tbody>
            </Table>
            <Pagination>{pageNumbers}</Pagination>




        </div>
    );
}

export default UserAnalyticsDetails;
