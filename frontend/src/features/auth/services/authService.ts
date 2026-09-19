import api from '../../../api/axios';
import type { LoginResponse } from '../types';

export const login = async (credentials: any): Promise<LoginResponse> => {
  return api.post('/auth/login', credentials);
};
