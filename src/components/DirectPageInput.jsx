// src/components/DirectPageInput.js
import React from 'react';

const DirectPageInput = ({ currentPage, totalPages, onDirectPageChange }) => {
  return (
    <div className="flex items-center space-x-2">
      <label htmlFor="directPage">Go to page:</label>
      <input
        id="directPage"
        type="number"
        min="1"
        max={totalPages}
        value={currentPage}
        onChange={(e) => onDirectPageChange(parseInt(e.target.value))}
        className="border rounded px-2 py-1 w-16 text-center"
      />
    </div>
  );
};

export default DirectPageInput;
