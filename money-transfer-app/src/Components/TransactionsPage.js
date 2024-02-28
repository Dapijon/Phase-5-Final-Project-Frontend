import React, { useState } from "react";
import axios from "axios";
import "./TransactionsPage.css";

const TransactionPage = () => {
  const [depositAmount, setDepositAmount] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [transferAmount, setTransferAmount] = useState("");
  const [favorites, setFavorites] = useState([]);
  const [accountBalance, setAccountBalance] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleDepositSubmit = async (event) => {
    event.preventDefault();
    console.log("Deposit amount:", depositAmount);

    try {
      setLoading(true);

      const response = await axios.post("http://127.0.0.1:5000/makeDeposit", {
        amount: depositAmount,
        key: "SJFuEzKXob9ztiXh1nGKZCsAFT2BDbQmPGNpQOp95GKw7ASM",
        secret:
          "AtQ9sa581NtvO8YB4E9m5VYsATlBLQSCAuG6ryr7slpApSgWe6ASrFuISxN1kxsg",
      });

      console.log(response.data);

      setAccountBalance(
        (prevBalance) => prevBalance + parseFloat(depositAmount)
      );

      setLoading(false);
    } catch (error) {
      console.error("Error depositing:", error);
      setError("Error depositing. Please try again.");
      setLoading(false);
    }
  };

  const handleTransferSubmit = (event) => {
    event.preventDefault();
    console.log("Phone number:", phoneNumber);
    console.log("Transfer amount:", transferAmount);

    // Send transfer request to backend
    axios
      .post(
        `http://127.0.0.1:5000/cash_transfer/${phoneNumber}/${transferAmount}`
      )
      .then((response) => {
        console.log(response.data);
        // Update account balance
        setAccountBalance(
          (prevBalance) => prevBalance - parseFloat(transferAmount)
        );
        // Clear the phone number and transfer amount inputs
        setPhoneNumber("");
        setTransferAmount("");
      })
      .catch((error) => {
        console.error("Error transferring:", error);
      });
  };

  const addToFavorites = () => {
    // Add phone number to favorites
    setFavorites((prevFavorites) => [...prevFavorites, phoneNumber]);
    // Clear the phone number input
    setPhoneNumber("");
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
          <button
            type="submit"
            className="button"
            style={{
              backgroundColor: "#ff004f",
              borderRadius: "20px",
              color: "black",
              justifyItems: "center",
              marginLeft: "40%",
            }}
          >
            {loading ? "Depositing..." : "Deposit"}
          </button>
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
            <button
              type="submit"
              className="button"
              style={{
                backgroundColor: "#ff004f",
                borderRadius: "20px",
                color: "black",
              }}
            >
              Send
            </button>
            <button
              type="button"
              onClick={addToFavorites}
              className="button"
              style={{
                backgroundColor: "#ff004f",
                borderRadius: "20px",
                color: "black",
                width: "150px",
                marginLeft: "10px",
              }}
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
