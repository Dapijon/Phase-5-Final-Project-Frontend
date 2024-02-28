import Table from 'react-bootstrap/Table';
import './userSummary.css'

function UserSummary({userSummary}) {

  console.log(userSummary)
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
          
          <td> KSHS {userSummary?.received_amount}</td>
          <td>KSHS {userSummary?.send_amount}</td>
            <td>KSHS {userSummary?.total_balance}</td>
        </tr>
       
      </tbody>
    </Table>
  </div>
  );
}

export default UserSummary;