// src/App.js
import React, { useState } from 'react';
import Pagination from './components/Pagination';

const articles = [
  {
    id: 1,
    title: "The Evolution of Technology in the 21st Century",
    content:
      "Technology has evolved rapidly in the 21st century. From the rise of smartphones to the advent of artificial intelligence, technology has transformed the way we live and work...",
  },
  {
    id: 2,
    title: "The Impact of Social Media on Society",
    content:
      "Social media has had a profound impact on society. It has changed the way we communicate, share information, and build relationships. However, it also raises concerns about privacy and mental health...",
  },
  {
    id: 3,
    title: "Understanding Climate Change: Causes and Effects",
    content:
      "Climate change is one of the most pressing issues of our time. It is caused by human activities such as burning fossil fuels, deforestation, and industrial processes. The effects of climate change include rising temperatures, sea level rise, and extreme weather events...",
  },
  // Add more articles here
];

for (let i = 4; i <= 210; i++) {
  articles.push({
    id: i,
    title: `Article Title ${i}`,
    content: `This is the content for article number ${i}. It provides insightful information about a particular topic that is relevant to current events or academic discussions. Each article is designed to engage the reader with thoughtful analysis and comprehensive coverage of the subject matter.`,
  });
}


const App = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);

  const handlePageChange = (page, perPage) => {
    setCurrentPage(page);
    setItemsPerPage(perPage);
  };

  const currentItems = articles.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="container mx-auto p-4">
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
  {currentItems.map((article, index) => (
    <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">{article.title}</h2>
        <p className="text-gray-700 text-sm">{article.content}</p>
      </div>
      <div className="p-4 border-t">
        <button className="text-blue-500 hover:text-blue-700 font-semibold">Read more</button>
      </div>
    </div>
  ))}
</div>


      {/* Pagination Component */}
      <Pagination
        totalItems={articles.length}
        itemsPerPageOptions={[5, 10, 15, 20]}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default App;
