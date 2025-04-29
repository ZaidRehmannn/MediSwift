import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import PlaceOrder from './pages/PlaceOrder/PlaceOrder';
import Footer from './components/Footer/Footer';
import LoginPopup from './components/LoginPopup/LoginPopup';
import Verify from './pages/Verify/Verify';
import MyOrders from './pages/MyOrders/MyOrders';
import ProductPage from './pages/ProductPage/ProductPage';
import ContactUs from './pages/ContactUs/ContactUs';
import AboutUs from './pages/AboutUs/AboutUs';
import Store from './pages/Store/Store';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import { ToastContainer } from 'react-toastify';
import SideBar from './components/SideBar/SideBar';

const App = () => {
  const [showLogin, setshowLogin] = useState(false);

  return (
    <ScrollToTop>
      <ToastContainer />
      {showLogin ? <LoginPopup setshowLogin={setshowLogin} /> : null}
      <Navbar setshowLogin={setshowLogin} />
      <SideBar setshowLogin={setshowLogin} />
      <div className='app w-[85%] lg:w-[80%] mx-auto'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/order' element={<PlaceOrder />} />
          <Route path='/verify' element={<Verify />} />
          <Route path='/myorders' element={<MyOrders />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path='/contactus' element={<ContactUs />} />
          <Route path='/aboutus' element={<AboutUs />} />
          <Route path='/store' element={<Store />} />
        </Routes>
      </div>
      <Footer />
    </ScrollToTop>
  );
};

export default App;