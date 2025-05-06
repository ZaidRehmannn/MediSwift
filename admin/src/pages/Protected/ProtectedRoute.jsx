import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import axios from 'axios';

const ProtectedRoute = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [isAuthorized, setIsAuthorized] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      setTimeout(() => {
        setIsAuthorized(false);
        setLoading(false);
      }, 500)
      return;
    }

    const verifyToken = async () => {
      try {
        const response = await axios.get("http://localhost:4000/api/user/info", { headers: { token } });

        console.log(response);
        console.log(response.data?.userData?.userType);

        if (response.data?.userData?.userType === "admin") {
          setTimeout(() => {
            setIsAuthorized(true);
            setLoading(false);
          }, 500)
        } else {
          setTimeout(() => {
            setIsAuthorized(false);
            setLoading(false);
          }, 500)
        }
      } catch (error) {
        console.error("Verification failed:", error);
        setTimeout(() => {
          setIsAuthorized(false);
          setLoading(false);
        }, 500)
      } finally {
        setTimeout(() => {
          setIsAuthorized(true);
          setLoading(false);
        }, 500)
      }
    };

    verifyToken();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen fixed top-0 left-0 bottom-0 right-0 bg-white">
        <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return isAuthorized ? children : <Navigate to="/admin/login" />;
};

export default ProtectedRoute;
