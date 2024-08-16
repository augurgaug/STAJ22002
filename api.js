import axios from 'axios';
import {API_URL} from'./src/constant/Link'




export const loginUser = async (user) => {
  try {
    const response = await axios.post(`${API_URL}/users/login`, user);

    return response.data;

  } catch (error) {
    throw error;
  }
};

