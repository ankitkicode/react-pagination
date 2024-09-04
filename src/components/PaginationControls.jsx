import React from 'react';

const PaginationControls = ({
  currentPage,
  totalPages,
  onPageChange,
  onPrevPage,
  onNextPage,
}) => {
  // Define the number of pages to show based on screen size
  const pagesToShowSmall = 1; // Small screens
  const pagesToShowMedium = 4; // Medium screens
  const pagesToShowLarge = 8; // Large screens

  // Function to determine the number of pages to show based on window width
  const getPagesToShow = () => {
    if (window.innerWidth < 640) return pagesToShowSmall;
    if (window.innerWidth < 1024) return pagesToShowMedium;
    return pagesToShowLarge;
  };

  const visiblePages = getPagesToShow();

  // Generate an array for the first visible pages
  const firstPages = Array.from(
    { length: Math.min(visiblePages, totalPages) },
    (_, i) => i + 1
  );

  // Generate an array for the last few pages if there are more pages
  const lastPages =
    totalPages > visiblePages
      ? Array.from(
          { length: Math.min(visiblePages, totalPages - visiblePages) },
          (_, i) => totalPages - (visiblePages - i - 1)
        )
      : [];

  return (
    <div className="flex flex-wrap justify-center items-center space-x-2 mt-6">
      {/* Previous Button */}
      <button
        onClick={onPrevPage}
        className={`px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 disabled:bg-gray-200 transition-colors`}
        disabled={currentPage === 1}
      >
        Prev
      </button>

      {/* First Pages */}
      {firstPages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`px-4 py-2 rounded ${
            currentPage === page
              ? 'bg-blue-500 text-white'
              : 'bg-gray-300 hover:bg-gray-400'
          } transition-colors`}
        >
          {page}
        </button>
      ))}

      {/* Ellipsis */}
      {totalPages > visiblePages + visiblePages && (
        <span className="px-4 py-2">...</span>
      )}

      {/* Last Pages */}
      {lastPages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`px-4 py-2 rounded ${
            currentPage === page
              ? 'bg-blue-500 text-white'
              : 'bg-gray-300 hover:bg-gray-400'
          } transition-colors`}
        >
          {page}
        </button>
      ))}

      {/* Next Button */}
      <button
        onClick={onNextPage}
        className={`px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 disabled:bg-gray-200 transition-colors`}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default PaginationControls;
