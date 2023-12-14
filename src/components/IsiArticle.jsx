import React from "react";

const IsiArticle = ({ article }) => {
  const { date, author, img, title, fulltext } = article;
  return (
    <div className="max-w-3xl mx-auto p-4">
      <img
        src={img}
        alt={title}
        className="w-full h-66 object-cover mb-4"
      />
      <div className="bg-gray-100 p-6 gap-4">
        <p className="text-gray-800 text-2xl font-semibold">{title}</p>
        <p className="text-gray-700 text-md mt-4">{author}</p>
        <p className="text-gray-600 text-sm mt-2">{date}</p>
      </div>
      <div className="text-gray-800 mt-4 text-sm md:text-md lg:text-lg xl:text-xl">
        <p>{fulltext}</p>
      </div>
    </div>
  );
};

export default IsiArticle;