import Table from 'react-bootstrap/Table';
import './userSummary.css'

function UserSummary() {
  return (
    <div className='userSummary' >
      <h4>
      Analytics
      </h4>
        <Table striped bordered hover center className='summary-table'>
      <thead>
        <tr>         
          <th>Received</th>
          <th>Sent</th>
          <th>Balance</th>
        </tr>
      </thead>
      <tbody>
        <tr className='summary'>
          
          <td>KSHS 124,520</td>
          <td>KSHS 350,480</td>
          <td>KSHS 475,000</td>
        </tr>
       
      </tbody>
    </Table>
  </div>
  );
}

export default UserSummary;