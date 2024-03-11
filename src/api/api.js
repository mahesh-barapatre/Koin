// src/api.js

const BASE_URL = 'https://api.example.com';

// Function to handle common fetch configurations and headers
const fetchWrapper = async (url, options = {}) => {
  const response = await fetch(url, options);

  if (!response.ok) {
    throw new Error(`Error: ${response.status} - ${response.statusText}`);
  }

  return response.json();
};

// Example API functions
const api = {
  getUsers: async () => {
    const url = `${BASE_URL}/users`;
    return fetchWrapper(url);
  },

  getUserById: async (userId) => {
    const url = `${BASE_URL}/users/${userId}`;
    return fetchWrapper(url);
  },

  // Add more API functions as needed
};

export default api;
