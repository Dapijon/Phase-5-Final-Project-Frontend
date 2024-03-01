import React from 'react';
import { Link } from 'react-router-dom';

function Unauthorized() {
  return (
    <div className="unauthorized">
      <h2>Unauthorized Access</h2>
      <p>You do not have permission to access this page.</p>
      <p>Please contact your administrator for assistance.</p>
      <Link to="/">Go back to Home</Link>
    </div>
  );
}

export default Unauthorized;
