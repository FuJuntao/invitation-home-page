import axios, { AxiosInstance } from 'axios';
import React, { createContext, ReactNode, useContext, useMemo } from 'react';

const axiosContext = createContext<AxiosInstance | null>(null);

type AxiosProviderProps = {
  children: ReactNode;
};

export const AxiosProvider = (props: AxiosProviderProps) => {
  const { children } = props;

  const axiosInstance = useMemo(
    () =>
      axios.create({
        baseURL: import.meta.env.SNOWPACK_PUBLIC_API_ENDPOINT,
      }),
    [],
  );

  return (
    <axiosContext.Provider value={axiosInstance}>
      {children}
    </axiosContext.Provider>
  );
};

export const useAxios = () => {
  const axiosInstance = useContext(axiosContext);
  if (!axiosInstance) throw new Error('No axios instance found');
  return axiosInstance;
};
