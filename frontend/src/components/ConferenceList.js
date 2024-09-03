import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;


const ConferenceList = () => {
  const [conferences, setConferences] = useState([]);

  useEffect(() => {
    fetch(`${API_BASE_URL}/conferences`)
      .then((response) => response.json())
      .then((data) => setConferences(data));
  }, []);


  return (
    <div>
      <h1>Conferences</h1>
      <ul>
        {conferences.map((conference) => (
          <li key={conference.id}>
            <Link to={`/conferences/${conference.id}`}>
              <h2>{conference.name}</h2>
              <p>Date: {conference.date}</p>
              <p>Location: {conference.location}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ConferenceList;