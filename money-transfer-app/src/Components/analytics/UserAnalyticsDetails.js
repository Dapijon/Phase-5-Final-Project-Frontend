import React from 'react';
import Table from 'react-bootstrap/Table';
import './userAnalytics.css'

const UserAnalyticsDetails = () => {
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
                    <tr>

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
                    </tr>

                </tbody>
            </Table>




        </div>
    );
}

export default UserAnalyticsDetails;
