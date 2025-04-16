import React from 'react';
import { Link } from 'react-router-dom';

const StoreCard = ({ store }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col transform transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl">
      <img
        src={process.env.PUBLIC_URL + `/images/${store.image}`}
        alt={store.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4 flex flex-col justify-between h-full">
        <div>
          <h2 className="text-xl font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
            {store.name}
          </h2>
          <p className="text-gray-600">{store.location}</p>
        </div>
        <Link
          to={`/store/${store.id}`}
          className="text-blue-500 hover:text-blue-700 mt-4 inline-block transition-colors duration-300"
        >
          View Stock →
        </Link>
      </div>
    </div>
  );
};

export default StoreCard;
