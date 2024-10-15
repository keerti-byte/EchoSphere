// api.js

const API_BASE_URL = 'https://api.yourapp.com'; // Replace with your actual API base URL

// Function to handle fetch requests
const fetchAPI = async (endpoint, options = {}) => {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
    });

    // Check if response is ok (status code 200-299)
    if (!response.ok) {
      const errorResponse = await response.json();
      throw new Error(errorResponse.message || 'Something went wrong');
    }

    return await response.json(); // Return the parsed JSON response
  } catch (error) {
    console.error('API call failed:', error);
    throw error; // Rethrow error for handling in calling function
  }
};

// Authentication functions
export const login = async (email, password) => {
  return fetchAPI('/auth/login', {
    method: 'POST',
    body: JSON.stringify({ email, password }),
  });
};

export const register = async (userData) => {
  return fetchAPI('/auth/register', {
    method: 'POST',
    body: JSON.stringify(userData),
  });
};

// Party functions
export const createParty = async (partyData) => {
  return fetchAPI('/parties', {
    method: 'POST',
    body: JSON.stringify(partyData),
  });
};

export const getParties = async () => {
  return fetchAPI('/parties');
};

export const joinParty = async (partyId, userId) => {
  return fetchAPI(`/parties/${partyId}/join`, {
    method: 'POST',
    body: JSON.stringify({ userId }),
  });
};

// Add other API functions as needed

