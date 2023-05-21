import axios from 'axios';

const API_BASE_URL = 'https://api.jackalstorage.com';

export const createProposal = async (proposalData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/proposals`, proposalData);
    return response.data;
  } catch (error) {
    console.error('Error creating proposal:', error);
    throw error;
  }
};

export const getProposals = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/proposals`);
    return response.data;
  } catch (error) {
    console.error('Error getting proposals:', error);
    throw error;
  }
};
