import Login from './Components/Login';
import SignUp from './Components/SignUp';
import Analytics from './Components/analytics/Analytics'
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './Components/Navbar';
import Home from './Components/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/signup" element={<SignUp/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/analytics" element={<Analytics/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
