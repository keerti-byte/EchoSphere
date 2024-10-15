import axios from 'axios';


const API_BASE_URL = 'https://your-api-url.com/api'; 


export const createParty = async (partyData) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/parties`, partyData);
        return response.data;
    } catch (error) {
        console.error('Error creating party:', error);
        throw error;
    }
};

s
export const getPublicParties = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/parties/public`);
        return response.data;
    } catch (error) {
        console.error('Error fetching public parties:', error);
        throw error;
    }
};


export const getFollowedParties = async (userId) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/parties/followed/${userId}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching followed parties:', error);
        throw error;
    }
};


export const joinParty = async (partyId, userId) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/parties/join`, {
            partyId,
            userId
        });
        return response.data;
    } catch (error) {
        console.error('Error joining party:', error);
        throw error;
    }
};


export const getPartyDetails = async (partyId) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/parties/${partyId}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching party details:', error);
        throw error;
    }
};


export const reportParty = async (partyId, reason) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/parties/report`, {
            partyId,
            reason
        });
        return response.data;
    } catch (error) {
        console.error('Error reporting party:', error);
        throw error;
    }
};
