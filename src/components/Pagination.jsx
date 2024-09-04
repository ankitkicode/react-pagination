// src/components/Pagination.js
import React, { useState } from 'react';
import ItemsPerPageSelect from './ItemsPerPageSelect';
import PaginationControls from './PaginationControls';
import DirectPageInput from './DirectPageInput';

const Pagination = ({ totalItems, itemsPerPageOptions, onPageChange }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(itemsPerPageOptions[0]);

  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handleItemsPerPageChange = (perPage) => {
    setItemsPerPage(perPage);
    setCurrentPage(1);
    onPageChange(1, perPage);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    onPageChange(page, itemsPerPage);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      handlePageChange(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      handlePageChange(currentPage + 1);
    }
  };

  const handleDirectPageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      handlePageChange(page);
    }
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      <ItemsPerPageSelect
        itemsPerPage={itemsPerPage}
        itemsPerPageOptions={itemsPerPageOptions}
        onItemsPerPageChange={handleItemsPerPageChange}
      />

      <PaginationControls
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
        onPrevPage={handlePrevPage}
        onNextPage={handleNextPage}
      />

      <DirectPageInput
        currentPage={currentPage}
        totalPages={totalPages}
        onDirectPageChange={handleDirectPageChange}
      />
    </div>
  );
};

export default Pagination;
