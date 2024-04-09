import {IMAGE_BASE_URL} from '../constants/config';
import { STRINGS } from '../constants/strings';
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

export const handleErrorMessage = (
  _error: {message: string} | string,
): string => {
  if (typeof _error === 'string') {
    return _error;
  }
  return typeof _error?.message === 'string'
    ? _error?.message
    : STRINGS.UNKNOWN_ERROR;
};
