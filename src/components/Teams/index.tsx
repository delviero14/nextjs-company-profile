
'use client';

import { useState, useEffect } from 'react';
import SectionTitle from '../Common/SectionTitle';

interface User {
  name: {
    first: string;
    last: string;
  };
  email: string;
  phone: string;
  picture: {
    large: string;
  };
  location: {
    country: string;
  };
  gender: string;
}

function Teams() {
  const [users, setUsers] = useState<User[] | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=10')
      .then(response => response.json())
      .then(data => setUsers(data.results))
      .catch(error => console.error('Error:', error));
  }, []);

  if (!users) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  }

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % users.length);
  };

  const handlePrev = () => {
    setCurrentIndex((currentIndex - 1 + users.length) % users.length);
  };

  return (
      <div className="bg-gray-light py-6 ">
        <SectionTitle
          title="Team Engineering Company"
          paragraph="Beberapa Tim dari Perusahaan kami."
          center
        />
    <div className="max-w-md mx-auto p-4 mt-4  rounded shadow-md">
      {users.slice(currentIndex, currentIndex + 3).map((user, index) => (
        <div key={index} className="mb-4">
          <img src={user.picture.large} alt={user.name.first} className="w-24 h-24 rounded-full mx-auto" />
          <h1 className="text-2xl font-bold">{user.name.first} {user.name.last}</h1>
          <p className="text-gray-600">Email: {user.email}</p>
          <p className="text-gray-600">Phone: {user.phone}</p>
          <p className="text-gray-600">Country: {user.location.country}</p>
          <p className="text-gray-600">Gender: {user.gender}</p>
        </div>
      ))}
      <div className="flex justify-between">
        <button onClick={handlePrev} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Previous
        </button>
        <button onClick={handleNext} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Next
        </button>
      </div>
    </div>
    </div>
  );
}

export default Teams;