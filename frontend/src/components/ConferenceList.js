import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { formatDate } from '../utils/dateUtils'; // Import the utility function

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;


const ConferenceList = () => {
  const [conferences, setConferences] = useState([]);

  useEffect(() => {
    fetch(`${API_BASE_URL}/conferences`)
      .then((response) => response.json())
      .then((data) => setConferences(data));
  }, []);



  return (
    <div className="space-y-6">
    <h2 className="text-3xl font-semibold text-gray-800 mb-4">Upcoming Conferences</h2>
    <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {conferences.map((conference) => (
        <li 
          key={conference.id} 
          className="bg-white rounded-lg shadow-md overflow-hidden min-h-[185px] min-w-[280px] flex flex-col justify-between"
        >
          <Link 
            to={`/conferences/${conference.id}`} 
            className="block p-4 flex flex-col justify-between h-full"
          >
            <div>
              <h3 className="text-2xl mb-2 text-custom-blue font-semibold">
                {conference.title}
              </h3>
              <p className="text-lg text-gray-600">{formatDate(conference.date)}</p>
            </div>
            <p className="text-gray-600 mt-auto">Location: {conference.location}</p>
          </Link>
        </li>
      ))}
    </ul>
  </div>
  );
};

export default ConferenceList;