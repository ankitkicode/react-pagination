// src/components/ItemsPerPageSelect.js
import React from 'react';

const ItemsPerPageSelect = ({ itemsPerPage, itemsPerPageOptions, onItemsPerPageChange }) => {
  return (
    <div className="flex items-center space-x-2">
      <label htmlFor="itemsPerPage">Items per page:</label>
      <select
        id="itemsPerPage"
        value={itemsPerPage}
        onChange={(e) => onItemsPerPageChange(parseInt(e.target.value))}
        className="border rounded px-2 py-1"
      >
        {itemsPerPageOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ItemsPerPageSelect;
