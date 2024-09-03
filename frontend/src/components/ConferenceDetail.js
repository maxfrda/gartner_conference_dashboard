// src/components/ConferenceDetail.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

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
    <div>
      <h1>{conference.name}</h1>
      <p>Date: {conference.date}</p>
      <p>Location: {conference.location}</p>
      <p>Description: {conference.description}</p>
      <a href="/">Back to list</a>
    </div>
  );
};

export default ConferenceDetail;