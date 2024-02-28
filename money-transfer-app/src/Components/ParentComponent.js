import React, { useState } from 'react';
import Login from './Login';

export default function ParentComponent() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  console.log('Props received in ParentComponent:', setIsLoggedIn);

  return (
    <div>
      {/* Other components */}
      <Login setIsLoggedIn={setIsLoggedIn} />
    </div>
  );
}