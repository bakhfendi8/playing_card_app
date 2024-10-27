import axios from 'axios';

export const distributeCards = async (totalContestant) => {
  try {
    const response = await axios.get('http://localhost:8000/api/cards', {
      params: { contestant: totalContestant },
    });
    return response.data.distribution;
  } catch (error) {
    throw error.response ? error.response.data.error : 'An error occurred';
  }
};
