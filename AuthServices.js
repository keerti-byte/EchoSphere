import axios from 'axios';


const API_BASE_URL = 'https://your-api-url.com/api'; // Replace with your actual API URL


export const signUp = async (userData) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/auth/signup`, userData);
        return response.data; 
    } catch (error) {
        console.error('Error signing up:', error);
        throw error; 
    }
};


export const login = async (credentials) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/auth/login`, credentials);
        return response.data; 
    } catch (error) {
        console.error('Error logging in:', error);
        throw error;
    }
};


export const logout = async () => {
    try {
       
        localStorage.removeItem('userToken'); 
        return { message: 'Logged out successfully' };
    } catch (error) {
        console.error('Error logging out:', error);
        throw error;
    }
};

export const getCurrentUser = async () => {
    try {
        const token = localStorage.getItem('userToken');
        const response = await axios.get(`${API_BASE_URL}/auth/user`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response.data; 
    } catch (error) {
        console.error('Error fetching user details:', error);
        throw error;
    }
};
