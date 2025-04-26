import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import { Routes, Route } from 'react-router-dom';
import Add from './pages/Add/Add';
import List from './pages/List/List';
import Orders from './pages/Orders/Orders';
import Queries from './pages/Queries/Queries';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const url = "http://localhost:4000";
  return (
    <div className='h-screen overflow-hidden flex flex-col'>
      <ToastContainer />
      <Navbar />
      <hr />
      <div className='flex flex-1 h-[calc(100vh-4rem)] overflow-hidden'>
        <Sidebar />
        <div className='w-full overflow-hidden'>
          <Routes>
            <Route path='/add' element={<Add url={url} />} />
            <Route path='/list' element={<List url={url} />} />
            <Route path='/orders' element={<Orders url={url} />} />
            <Route path='/queries' element={<Queries url={url} />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
