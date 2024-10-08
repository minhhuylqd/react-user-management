import axios from 'axios';

const baseURL = 'https://jsonplaceholder.typicode.com/users';

export const fetchUsers = async () => {
  try {
    const response = await axios.get(baseURL);
    return response.data;
  } catch (error) {
    console.error('Error fetching users: ', error);
    return [];
  }
};
