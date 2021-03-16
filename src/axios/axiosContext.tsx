import axios, { AxiosInstance } from 'axios';
import React, { createContext, ReactNode, useMemo } from 'react';

export const axiosContext = createContext<AxiosInstance | null>(null);

type AxiosProviderProps = {
  value?: AxiosInstance;
  children: ReactNode;
};

export const axiosInitialConfig = {
  baseURL: import.meta.env.SNOWPACK_PUBLIC_API_ENDPOINT,
};

export const AxiosProvider = (props: AxiosProviderProps) => {
  const { value, children } = props;

  const axiosInstance = useMemo(() => axios.create(axiosInitialConfig), []);

  return (
    <axiosContext.Provider value={value ?? axiosInstance}>
      {children}
    </axiosContext.Provider>
  );
};
