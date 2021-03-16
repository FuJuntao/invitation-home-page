import { renderHook } from '@testing-library/react-hooks';
import axios from 'axios';
import { AppProviders } from '../test-utils';
import { useAxios } from './useAxios';

describe('useAxios', () => {
  it('should throw if there is no axios instance provided', () => {
    const { result } = renderHook(() => useAxios());
    expect(result.error).not.toBeNull();
  });

  it('should return an axios instance', () => {
    const { result } = renderHook(() => useAxios(), { wrapper: AppProviders });
    expect(result.current).toHaveProperty('request');
  });
});
1;
