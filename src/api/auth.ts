import axios from 'axios';

export const login = async (email: string, password: string) => {
  try {
    const { data } = await axios.post('/api/auth/login', {
      email,
      password,
    });
    return { data: data.data, error: null };
  } catch (error) {
    return { 
      data: null, 
      error: error.response?.data?.error || 'Login failed' 
    };
  }
};