import React from 'react';
import { Routes, Route } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import Login from './pages/Login/Login';
import AdminPanel from './pages/AdminPanel/AdminPanel';

const App = () => {
  const url = "http://localhost:4000";
  return (
      <Routes>
          <Route path='/admin/*' element={<AdminPanel />} />
          <Route path='/admin/login' element={<Login url={url} />} />
      </Routes>
  );
}

export default App;
