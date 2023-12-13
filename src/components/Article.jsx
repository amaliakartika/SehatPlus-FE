// Article.js
import React from "react";
import { Link } from 'react-router-dom';

const Article = ({ article }) => {
  return (
    <div
      className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8 sm:mx-auto"
      data-aos="zoom-in"
      data-aos-duration="1000"
    >
      <div className="border-none rounded-lg border-[#080C71] bg-[#f6f9ff] overflow-hidden flex items-center justify-center flex-col text-center">
        <div className="relative">
          <img
            src={article.img}
            alt={article.title}
            className="w-full h-auto rounded-t-lg object-cover mb-4"
          />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold mb-2">{article.title}</h3>
          <p className="text-gray-700 mb-4">{article.desc}</p>
          <Link
            to={`../artikel/${article.id}`}
            className="text-blue-700 hover:underline font-bold"
          >
            Baca Selengkapnya
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Article;
