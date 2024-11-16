import React from "react";
import { IoEyeOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6 border border-gray-200">
      {/* Author Section */}
      <div className="flex items-center mb-4">
        <img
          src={news.author.img}
          alt="Author"
          className="w-10 h-10 rounded-full mr-3"
        />
        <div>
          <h3 className="text-sm font-medium">{news.author.name}</h3>
          <p className="text-xs text-gray-500">
            {new Date(news.author.published_date).toLocaleDateString()}
          </p>
        </div>
        <div className="ml-auto text-gray-500">
          <i className="fas fa-share-alt cursor-pointer"></i>
        </div>
      </div>

      {/* Title */}
      <h2 className="text-xl font-bold mb-2">{news.title}</h2>

      {/* Image */}
      <img
        src={news.thumbnail_url}
        alt="News"
        className="w-full h-48 object-cover rounded-lg mb-4"
      />

      {/* Description */}
      <p className="text-gray-700 text-sm mb-4">
        {news.details.slice(0, 100)}...
      </p>
      <Link to={`/news/${news._id}`} href="/read-more" className="text-red-500 font-semibold text-sm">
        Read More
      </Link>

      {/* Footer Section */}
      <div className="flex items-center justify-between mt-4">
        {/* Rating */}
        <div className="flex items-center">
          <div className="text-yellow-400 text-sm mr-1">
            {[...Array(5)].map((_, i) => (
              <i
                key={i}
                className={`fas fa-star ${
                  i < news.rating.number ? "text-yellow-400" : "text-gray-300"
                }`}
              ></i>
            ))}
          </div>
          <span className="text-sm text-gray-600 ml-2">
            <div className="rating">
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
                defaultChecked
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
            </div>
            {news.rating.number} ({news.rating.badge})
          </span>
        </div>
        {/* Views */}
        <div className="flex items-center text-gray-500">
          <IoEyeOutline />
          <span className="text-sm">{news.total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
