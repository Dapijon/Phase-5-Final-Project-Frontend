import React, { useState } from 'react';
import "./TransactionsPage.css"

const TransactionPage = () => {
  const [depositAmount, setDepositAmount] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [transferAmount, setTransferAmount] = useState('');
  const [favorites, setFavorites] = useState([]);
  const [accountBalance, setAccountBalance] = useState(0);

  const handleDepositSubmit = (event) => {
    event.preventDefault();
    console.log('Deposit amount:', depositAmount);

    // Update account balance
    setAccountBalance(prevBalance => prevBalance + parseFloat(depositAmount));
  };

  const handleTransferSubmit = (event) => {
    event.preventDefault();
    console.log('Phone number:', phoneNumber);
    console.log('Transfer amount:', transferAmount);
    
    // Update account balance
    setAccountBalance(prevBalance => prevBalance - parseFloat(transferAmount));

    // the moment utaclick send it will clear the phone number and transfer amount inputed
    setPhoneNumber('');
    setTransferAmount('');
  };

  const addToFavorites = () => {
    // Add phone number to favorites
    setFavorites(prevFavorites => [...prevFavorites, phoneNumber]);

    // Clear the phone number input
    setPhoneNumber('');
  };

  return (
    <div className="transaction-container">
      {/* Title */}
      <h2>Transactions</h2>
      {/* Account balance */}
      <h1>Account Balance: ${accountBalance.toFixed(2)}</h1>

      {/* Deposit form */}
      <div className="card">
        <h3>Deposit</h3>
        <form onSubmit={handleDepositSubmit}>
          <label>
            Deposit Amount:
            <input 
              type="number" 
              value={depositAmount} 
              onChange={(event) => setDepositAmount(event.target.value)} 
            />
          </label>
          <button type="submit">Deposit</button>
        </form>
      </div>

      {/* Send Money form */}
      <div className="card">
        <h3>Send Money</h3>
        <form onSubmit={handleTransferSubmit}>
          <label>
            Phone Number:
            <input 
              type="text" 
              value={phoneNumber} 
              onChange={(event) => setPhoneNumber(event.target.value)} 
            />
          </label>
          <label>
            Transfer Amount:
            <input 
              type="number" 
              value={transferAmount} 
              onChange={(event) => setTransferAmount(event.target.value)} 
            />
          </label>
          <div className="form-buttons">
            <button type="submit">Send</button>
            <button 
              type="button" 
              onClick={addToFavorites}
            >
              Add to Favorites
            </button>
          </div>
        </form>
      </div>

      {/* Favorites list */}
      <div className="favorites-list">
        <h3>Favorites</h3>
        <ul>
          {favorites.map((favorite, index) => (
            <li key={index}>{favorite}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TransactionPage;
