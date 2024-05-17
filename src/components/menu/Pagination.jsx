import React from 'react';

const Pagination = ({ currentPage, totalPages, paginate }) => { 
  return ( // Returning JSX
    <div className="flex justify-center my-8"> {/* Pagination container */}
      {/* Creating buttons for each page */}
      {Array.from({ length: totalPages }).map((_, index) => (
        <button
          key={index + 1} // Unique key for each button
          onClick={() => paginate(index + 1)} // Function to handle pagination
          className={`mx-1 px-3 py-1 rounded-full ${
            currentPage === index + 1 ? "bg-Green text-white" : "bg-gray-200"
          }`} // Conditional class based on current page
        >
          {index + 1} {/* Page number */}
        </button>
      ))}
    </div>
  );
};

export default Pagination;

