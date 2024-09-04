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
    <>
      <div className='w-3/4 mx-auto'>
      <div className="relative">
          <img
            src="https://emt.gartnerweb.com/ngw/commonassets/images/vis-imagery/photography/conference-homepage-banners/symposium-color-02.png"
            alt="Conference Calendar"
            className="w-full h-auto object-cover"
          />
          <div className="absolute top-1/2 left-0 transform -translate-y-1/2 pl-12 max-w-2xl">
            <h1 className="text-7xl text-white font-bold mb-4">
             {conference.title}
            </h1>
            <p className="text-3xl text-white">
            {formatDate(conference.date)} | {conference.location}
            </p>
            <button className="bg-orange-600 text-white mt-4 px-6 py-4 text-2xl ">
        View Agenda
      </button>

          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto p-6 py-24 rounded-lg">
      <h1 className="text-5xl font-bold mb-4">{conference.subtitle}</h1>
      <p className="text-gray-700 mb-4 text-2xl">{conference.description}</p>
      <a href="/" className="text-blue-600 hover:underline">Back to list</a>
    </div>
    </>

  );
};

export default ConferenceDetail;