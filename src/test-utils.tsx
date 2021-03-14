import { ChakraProvider } from '@chakra-ui/react';
import { render, RenderOptions } from '@testing-library/react';
import type { FC, ReactElement } from 'react';
import React from 'react';
import { AxiosProvider } from './axios';
import theme from './theme';

const AppProviders: FC = ({ children }) => (
  <ChakraProvider theme={theme}>
    <AxiosProvider>{children}</AxiosProvider>
  </ChakraProvider>
);

const renderWrappedWithProviders = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'queries'>,
) => render(ui, { wrapper: AppProviders, ...options });

export { AppProviders, renderWrappedWithProviders };
