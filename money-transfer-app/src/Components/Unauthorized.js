import React from 'react';
import { Link } from 'react-router-dom';
import './Unauthorized.css'

function Unauthorized() {
  return (
    <div className="unauthorized">
      <h2>Unauthorized Access</h2>
      <p>You do not have permission to access this page.</p>
      <p>Please contact your administrator for assistance.</p>
      <p><Link to="/">Go back to Home</Link></p>
    </div>
  );
}

export default Unauthorized;
