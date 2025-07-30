import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CarPrice from './pages/CarPrice';
import GoldPrice from "./pages/GoldPrice";
// import GoldPrice, Login, Signup... when ready

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/car-price' element={<CarPrice />} />
        <Route path='/gold-price' element={<GoldPrice />} />
        {/* Add these as you build them */}
        {/* <Route path='/login' element={<Login />} /> */}
        {/* <Route path='/signup' element={<Signup />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
