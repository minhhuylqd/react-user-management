import axios from 'axios';

import { getApiUrl } from '@/utils/apiConfig';

export const fetchUsers = async () => {
  try {
    const response = await axios.get(getApiUrl());
    return response.data;
  } catch (error) {
    console.error('Error fetching users: ', error);
    return [];
  }
};
