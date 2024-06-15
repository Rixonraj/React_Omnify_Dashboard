import React, { useState } from 'react';
import { FiClock, FiUser, FiMail, FiPhone, FiCalendar, FiCheckCircle, FiHelpCircle } from 'react-icons/fi';

const Table = ({ data, displayColumns }) => {
  const [itemsPerPage, setItemsPerPage] = useState(5); // Number of items per page
  const [currentPage, setCurrentPage] = useState(1); // Current page of pagination

  // Calculate total pages
  const totalPages = Math.ceil(data.length / itemsPerPage);

  // Calculate index of the first and last item of the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const formatDate = (timestamp) => {
    const date = new Date(timestamp * 1000); // Convert UNIX timestamp to milliseconds
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const day = days[date.getDay()];
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = hours % 12 === 0 ? 12 : hours % 12;
    const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
    const month = date.toLocaleString('en-US', { month: 'short' });
    const formattedDate = `${day}. ${date.getDate()} ${month} ${date.getFullYear()} ${formattedHours}:${formattedMinutes} ${ampm}`;
    return formattedDate;
  };

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Previous page
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Next page
  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Handle items per page change
  const handleItemsPerPageChange = (e) => {
    const perPage = parseInt(e.target.value, 10);
    setItemsPerPage(perPage);
    setCurrentPage(1); // Reset to first page when changing items per page
  };

  // Function to get icon based on column
  const getColumnIcon = (column) => {
    switch (column) {
      case 'createdOn':
        return <FiCalendar />;
      case 'payer':
        return <FiUser />;
      case 'status':
        return <FiCheckCircle />;
      case 'email':
        return <FiMail />;
      case 'phone':
        return <FiPhone />;
      case 'services':
        return <FiHelpCircle />;
      case 'scheduledOn':
        return <FiClock />;
      default:
        return null;
    }
  };

  // Function to get badge color based on status
  const getStatusBadge = (status) => {
    switch (status) {
      case 'Active':
        return 'bg-yellow-500';
      case 'Lead':
        return 'bg-blue-500';
      case 'Inactive':
        return 'bg-red-500';
      default:
        return 'bg-gray-400';
    }
  };

  return (
    <div className="overflow-hidden border border-gray-200 rounded-lg shadow-md">
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead>
            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
              {displayColumns.map((column) => (
                <th key={column} className="py-3 px-6 border-b border-gray-300">
                  <div className="flex items-center justify-center">
                    <span className="mr-2">{getColumnIcon(column)}</span>
                    {column}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {currentItems.map((item, index) => (
              <tr key={index} className="border-t">
                {displayColumns.map((column) => (
                  <td key={`${index}-${column}`} className="py-4 px-6 border-b border-gray-300">
                    {column === 'createdOn' || column === 'scheduledOn'
                      ? formatDate(item[column])
                      : column === 'status'
                        ? (
                          <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium leading-4 ${getStatusBadge(item[column])} text-white`}>
                            {item[column]}
                          </span>
                        )
                        : item[column]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination controls */}
      <div className="flex justify-between items-center p-4">
        {/* Items per page input */}
        <div className="flex items-center space-x-2">
          <span>Show</span>
          <input
            type="number"
            value={itemsPerPage}
            onChange={handleItemsPerPageChange}
            className="border px-2 py-1 rounded focus:outline-none"
            min="1"
          />
          {/* Total count */}

          out of {data.length}

        </div>

        {/* Previous and next buttons */}
        <div className="flex space-x-2">
          <button
            onClick={prevPage}
            className={`border px-4 py-2 rounded ${currentPage === 1 ? 'cursor-not-allowed text-gray-400' : 'text-gray-800'}`}
            disabled={currentPage === 1}
          >
            &lt; Previous
          </button>
          {/* Page numbers */}
          <div className="flex space-x-2">
            {[...Array(Math.min(3, totalPages))].map((_, index) => (
              <button
                key={index}
                onClick={() => paginate(index + 1)}
                className={`border px-4 py-2 rounded ${currentPage === index + 1 ? 'bg-gray-800 text-white' : 'text-gray-800'}`}
              >
                {index + 1}
              </button>
            ))}
          </div>
          <button
            onClick={nextPage}
            className={`border px-4 py-2 rounded ${currentPage === totalPages ? 'cursor-not-allowed text-gray-400' : 'text-gray-800'}`}
            disabled={currentPage === totalPages}
          >
            Next &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Table;
