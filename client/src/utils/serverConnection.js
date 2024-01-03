import axios from 'axios';

const handleServerError = (error) => {
  console.error('Server error:', error);
  return { success: false, error };
};

export const axiosRequest = async (config) => {
  try {
    const response = await axios(config);
    console.log('Data from server:', response.data);
    // localStorage.setItem('userToken', response.data.token);

    return { success: true, result: response.data };
  } catch (error) {
    return handleServerError(error);
  }
};
