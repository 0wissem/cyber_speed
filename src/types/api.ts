export type Method = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH' | 'HEAD';
export type Options = {
  method: string;
  headers?: {[key: string]: string};
  body?: string | FormData;
};
