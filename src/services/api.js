import axios from 'axios';

const API_BASE_URL = 'https://tu-backend.com/api';

export const login = async (credentials) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/login`, credentials);
    return response.data;
  } catch (error) {
    throw error.response?.data || error;
  }
};

// Puedes agregar más funciones de API aquí