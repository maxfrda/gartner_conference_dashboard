// src/components/ConferenceDetail.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { formatDate } from '../utils/dateUtils'; // Import the utility function

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

const ConferenceDetail = () => {
  const { id } = useParams();
  const [conference, setConference] = useState(null);

  useEffect(() => {
    fetch(`${API_BASE_URL}/conferences/${id}`)
      .then((response) => response.json())
      .then((data) => setConference(data));
  }, [id]);

  if (!conference) return <p>Loading...</p>;

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-4xl font-bold mb-4">{conference.name}</h1>
      <p className="text-gray-600">Date: {formatDate(conference.date)}</p>

      <p className="text-gray-700 text-lg mb-2">Location: {conference.location}</p>
      <p className="text-gray-700 mb-4">{conference.description}</p>
      <a href="/" className="text-blue-600 hover:underline">Back to list</a>
    </div>
  );
};

export default ConferenceDetail;