import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { formatDate } from '../utils/dateUtils'; 
import ConferenceModal from './ConferenceModal';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;


const ConferenceList = () => {
  const [conferences, setConferences] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false);

  const handleAddConferenceClick = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleSaveConference = async (newConference) => {
    try {
      const response = await fetch(`${API_BASE_URL}/conferences`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ conference: newConference }),
      });
  
      if (response.ok) {
        const savedConference = await response.json();
        setConferences([...conferences, savedConference]);
      } else {
        const errorData = await response.json();
        console.error('Error saving conference:', errorData.errors);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  useEffect(() => {
    fetch(`${API_BASE_URL}/conferences`)
      .then((response) => response.json())
      .then((data) => setConferences(data));
  }, []);



  return (
    <>
    <div className="relative">
      <img
        src="https://emt.gartnerweb.com/ngw/commonassets/images/build-graphics/calendar-new-viz/conference-calendar-hero-desktop-new.jpg"
        alt="Conference Calendar"
        className="w-full h-auto object-cover"
      />
      <div className="absolute top-1/2 left-0 transform -translate-y-1/2 pl-12 max-w-2xl">
        <h1 className="text-7xl text-white font-bold mb-4">
          Conference Calendar
        </h1>
        <p className="text-3xl text-white">
          Experience IT and business conferences aligned to your role and optimized to help you achieve stronger performance on your organization’s mission-critical priorities.
        </p>
      </div>
    </div>

    <div className="flex flex-col sm:flex-row items-start justify-between py-24 px-64 bg-white">
      <div className="max-w-[400px] mb-4 sm:mb-0">
        <h3 className="text-4xl mb-2 text-custom-blue font-semibold">
          Learn More about Gartner conferences
        </h3>
        <p className="text-xl text-gray-600">
          Get our latest conference schedules, updates, and insights straight to your inbox.
        </p>
      </div>
      <div className="flex flex-col  space-y-2 max-w-[600px]">
        <p className="text-xl text-custom-blue font-semibold">Work Email</p>
        <div className="flex items-center space-x-4 mb-2">
          <input 
            type="email" 
            placeholder="Enter your work email" 
            className="p-2 border border-gray-300 rounded-md flex-1"
          />
          <button className="bg-custom-blue text-white px-4 py-2 rounded-md">
            Continue
          </button>
        </div>
        <p className="text-sm text-gray-600 max-w-full">
          By clicking the "Subscribe" button, you are agreeing to the Gartner Terms of Use and Privacy Policy.
        </p>
      </div>
    </div>
    <div className="space-y-6 px-64 py-24 ">
      <h2 className="text-5xl font-semibold text-gray-800 mb-4">Find your conference</h2>
      <button className="bg-custom-blue text-white px-6 py-2 rounded-md hover:bg-blue-700" 
        onClick={handleAddConferenceClick}>
          Add Conference
      </button>
      <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {conferences.map((conference) => (
          <li 
            key={conference.id} 
            className="bg-white rounded-lg shadow-md overflow-hidden min-h-[185px] min-w-[280px] flex flex-col justify-between hover:bg-gray-200"

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
              <div className="flex items-center mt-auto justify-between">
                <p className="text-lg text-gray-600">{conference.location}</p>
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M1.80338 0.0627441L15.8034 0.0627441V3.06274H15.8033L15.8033 14.0628H12.8033L12.8033 5.25521L2.12132 15.9372L0 13.8159L10.7532 3.06274L1.80338 3.06274L1.80338 0.0627441Z" fill="#0000D3"></path>
                </svg>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
    <ConferenceModal 
      isOpen={isModalOpen} 
      onClose={handleCloseModal} 
      onSave={handleSaveConference} 
    />
  </>
  );
};

export default ConferenceList;