import { LoginDataType } from '@/types';
import { client } from './client';

// 로그인
export const login = async (loginData: LoginDataType) => {
  const response = client.post('/auth/login', {
    email: loginData.id,
    password: loginData.password,
  });
  return response;
};
