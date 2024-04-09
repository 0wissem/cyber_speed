import {IMAGE_BASE_URL} from '../constants/config';
import {Method, Options} from '../types/api';

export const getImageFullUri = (path: string) => `${IMAGE_BASE_URL}${path}`;

export const getOptions = (
  accessToken: string | null | undefined,
  method: Method,
): Options => {
  return {
    method: method,
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
  };
};
