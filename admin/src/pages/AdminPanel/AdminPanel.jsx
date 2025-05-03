import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Sidebar from '../../components/Sidebar/Sidebar';
import { Routes, Route } from 'react-router-dom';
import Add from '../Add/Add';
import List from '../List/List';
import Orders from '../Orders/Orders';
import Queries from '../Queries/Queries';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProtectedRoute from '../Protected/ProtectedRoute';

const AdminPanel = () => {
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
            <Route path='/add' element={<ProtectedRoute><Add url={url} /></ProtectedRoute>} />
            <Route path='/list' element={<ProtectedRoute><List url={url} /></ProtectedRoute>} />
            <Route path='/orders' element={<ProtectedRoute><Orders url={url} /></ProtectedRoute>} />
            <Route path='/queries' element={<ProtectedRoute><Queries url={url} /></ProtectedRoute>} />
        </Routes>
        </div>
      </div>
    </div>
  );
}

export default AdminPanel;
