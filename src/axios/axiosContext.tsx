import axios, { AxiosInstance } from 'axios';
import React, { createContext, ReactNode, useContext, useMemo } from 'react';

const axiosContext = createContext<AxiosInstance>(axios.create());

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

export const useAxios = () => useContext(axiosContext);
