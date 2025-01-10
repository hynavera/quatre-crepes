import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import OrderLayout from './components/orders/OrderLayout';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/order' element={<OrderLayout/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App;
