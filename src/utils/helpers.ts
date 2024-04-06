import {IMAGE_BASE_URL} from '../constants/config';

export const getImageFullUri = (path: string) => `${IMAGE_BASE_URL}${path}`;
