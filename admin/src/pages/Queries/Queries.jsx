import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';

const Queries = ({ url }) => {
  const [queries, setqueries] = useState([]);

  const fetchQueries = async () => {
    try {
      const response = await axios.get(`${url}/api/query/fetch`);
      if (response.data.success) {
        setqueries(response.data.queries);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error('Network Error');
    }
  };

  useEffect(() => {
    fetchQueries();
  }, []);

  return (
    <div className="queries flex flex-col w-[90%] ml-[max(5vw,25px)] mt-8">
      <h2 className="text-xl font-semibold mb-4">Queries</h2>
      <div className="queries-table overflow-y-auto w-full max-h-[550px] lg:max-h-[420px] border border-gray-300 rounded-md">

        {/* Header */}
        <div className="queries-table-format title hidden lg:grid grid-cols-[1fr_2fr_5fr] items-center gap-4 py-3 px-4 border-b border-[#cacaca] text-sm bg-[#f9f9f9] font-semibold sticky top-0 z-10">
          <span>Name</span>
          <span>Email</span>
          <span>Message</span>
        </div>

        {/* Queries */}
        {queries.length > 0 ? (
          queries.map((query, index) => (
            <div
              key={index}
              className="query-table-format grid grid-cols-1 lg:grid-cols-[1fr_2fr_5fr] gap-3 lg:gap-4 py-4 px-4 border-b border-[#cacaca] text-sm"
            >
              {/* Mobile View */}
              <div className="lg:hidden flex flex-col gap-1">
                <p className="font-semibold text-base break-words whitespace-normal">Name: {query.name}</p>
                <p className="text-xs break-words whitespace-normal">Email: {query.email}</p>
                <p className="text-xs break-words whitespace-normal">Message: {query.message}</p>
              </div>

              {/* Desktop View */}
              <p className="hidden lg:block min-w-0 break-words whitespace-normal overflow-hidden">{query.name}</p>
              <p className="hidden lg:block min-w-0 break-words whitespace-normal overflow-hidden">{query.email}</p>
              <p className="hidden lg:block min-w-0 break-words whitespace-normal overflow-hidden">{query.message}</p>
            </div>
          ))
        ) : (
          <div className='text-center py-6 text-black font-semibold text-sm'>
            No Queries found
          </div>
        )}

      </div>
    </div>
  );
};

export default Queries;
