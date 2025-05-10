import React, { useContext } from 'react';
import logo from '../../assets/frontend_assets/logo.png';
import { IoCloseOutline } from "react-icons/io5";
import { Link, useNavigate } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';
import { assets } from '../../assets/frontend_assets/assets';

function SideBar({ setshowLogin }) {
  const { getTotalCartAmount, token, settoken, page, setpage , isOpen, setIsOpen } = useContext(StoreContext);
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    settoken("");
    navigate("/");
    setIsOpen(false);
  };

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleNavigation = (pageName) => {
    if (setpage) {
      setpage(pageName);
    }
    setIsOpen(false);
  };

  return (
    <>
      {/* Sidebar Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={toggleSidebar}
        ></div>
      )}

      {/* Sidebar */}
      <div className={`w-[80%] fixed top-0 right-0 bottom-0 bg-white shadow-lg z-50 max-w-[350px] block lg:hidden p-6 transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <img src={logo} alt="logo" className="h-16 object-contain" />
          <IoCloseOutline 
            size={40} 
            className="text-green-700 cursor-pointer" 
            onClick={toggleSidebar}
          />
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col space-y-5 border-b border-gray-200 pb-6">
          <Link
            to="/"
            onClick={() => handleNavigation('Home')}
            className={`text-lg ${page === 'Home' ? 'text-green-700 font-medium' : 'text-gray-700'}`}
          >
            Home
          </Link>
          <Link
            to="/aboutus"
            onClick={() => handleNavigation('About Us')}
            className={`text-lg ${page === 'About Us' ? 'text-green-700 font-medium' : 'text-gray-700'}`}
          >
            About Us
          </Link>
          <Link
            to="/store?category=All"
            onClick={() => handleNavigation('Store')}
            className={`text-lg ${page === 'Store' ? 'text-green-700 font-medium' : 'text-gray-700'}`}
          >
            Store
          </Link>
          <Link
            to="/contactus"
            onClick={() => handleNavigation('Contact Us')}
            className={`text-lg ${page === 'Contact Us' ? 'text-green-700 font-medium' : 'text-gray-700'}`}
          >
            Contact Us
          </Link>
        </div>

        {/* Cart Section */}
        <div className="mt-6 flex items-center gap-3 border-b border-gray-200 pb-6">
          <Link 
            to="/cart" 
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3"
          >
            <img className="w-6 h-6" src={assets.basket_icon} alt="Cart" />
            <span className="text-lg">Cart</span>
          </Link>
          {getTotalCartAmount() !== 0 && (
            <div className="w-3 h-3 bg-green-700 rounded-full"></div>
          )}
        </div>

        {/* Authentication Section */}
        <div className="mt-6">
          {!token ? (
            <button
              onClick={() => {
                setshowLogin(true);
                setIsOpen(false);
              }}
              className="w-full bg-green-700 text-white py-3 rounded-lg text-center font-medium"
            >
              Sign in
            </button>
          ) : (
            <div className="space-y-4">
              <div 
                onClick={() => {
                  navigate('/myorders');
                  setIsOpen(false);
                }}
                className="flex items-center gap-3 cursor-pointer hover:text-green-600"
              >
                <img className="w-6" src={assets.bag_icon} alt="Orders" />
                <p className="text-lg">My Orders</p>
              </div>
              <div 
                onClick={logout}
                className="flex items-center gap-3 cursor-pointer hover:text-green-600"
              >
                <img className="w-6" src={assets.logout_icon} alt="Logout" />
                <p className="text-lg">Logout</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default SideBar;