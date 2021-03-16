import { useContext } from 'react';
import { axiosContext } from './axiosContext';

export const useAxios = () => {
  const axiosInstance = useContext(axiosContext);
  if (!axiosInstance) throw new Error('No axios instance found');
  return axiosInstance;
};
