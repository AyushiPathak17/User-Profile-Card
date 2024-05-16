
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../src/styles/UserProfile.css'; 

const UserProfile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get('https://randomuser.me/api/?page=1&results=1&seed=abc');
        setUser(response.data.results[0]);
      } catch (error) {
        console.error('Error fetching user:', error);
      }
    };

    fetchUser();
  }, []);

  return (
    <div className="container">
      {user && (
        <div className="card">
          <div className="avatar">
            <img src={user.picture.large} alt="User Profile" />
          </div>
          <div className="details">
            <h2>{`${user.name.first} ${user.name.last}`}</h2>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
            <p>Gender: {user.gender}</p>
            <p>Location: {`${user.location.city}, ${user.location.country}`}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
