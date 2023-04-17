import {BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './Component/Web_pages/About';
import Cart from './Component/Web_pages/Cart';
import Footer from './Component/Web_pages/Footer';
import Home from './Component/Web_pages/Home';
import LogIn from './Component/Web_pages/LogIn';
import Menu from './Component/Web_pages/Menu';
import NavBar from './Component/Web_pages/NavBar';
import Order from './Component/Web_pages/Order';
import Restorent from './Component/Web_pages/Restorent';
import SingIn from './Component/Web_pages/SingIn'
import StepProgressBar from './Component/Web_pages/StepProgressBar'
import OTP from './Component/Web_pages/OTPverify'
import Contact from './Component/Web_pages/Contact';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <header className="App-header">
      </header>
      <NavBar/>
      <Routes>
      < Route path="/" element={<Home/>} />
      < Route path="Home" element={<Home/>} />
      < Route path="About" element={<About/>} />
      < Route path="Cart" element={<Cart/>} />
      < Route path="Order" element={<Order/>} />
      < Route path="getFood/:id" element={<Menu/>} />
      < Route path="LogIn/" element={<LogIn/>} />
      < Route path="Restorent" element={<Restorent/>} />
      < Route path="SingIn" element={<SingIn/>} />
      < Route path="StepProgressBar" element={<StepProgressBar/>} />
      < Route path="OTP" element={<OTP/>} />
      < Route path="Contact" element={<Contact/>} />
      
        
      </Routes>
       <Footer/>
     </BrowserRouter> 
     
    </div>
  );
}

export default App;
