import Login from './Components/Login';
import SignUp from './Components/SignUp';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import TransactionPage from './Components/TransactionsPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/signup" element={<SignUp/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path='/transactions' element={<TransactionPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
