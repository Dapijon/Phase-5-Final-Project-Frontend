import Login from './Components/Login';
import SignUp from './Components/SignUp';
import Analytics from './Components/analytics/Analytics'
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import TransactionPage from './Components/TransactionsPage';
import UserProfile from './Components/UserProfile';
import Admin from './Components/admin/Admin'
import AdminSummary from './Components/all/AdminSummary';
import Unauthorized from './Components/Unauthorized';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/signup" element={<SignUp/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/userprofile" element={<UserProfile/>}></Route>

          <Route path="/analytics" element={<Analytics />}></Route>
          <Route path='/admin' element={<Admin />} />
          <Route path='/all-summary' element={<AdminSummary />} />

          <Route path='/transactions' element={<TransactionPage />} />
          <Route path='/unauthorized' element={<Unauthorized />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
