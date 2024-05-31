import api from "@/utils/axios";

export const setApiHeaders = (jwt: string): void => {
  api.defaults.headers.common['Content-Type'] = 'application/json';
  api.defaults.headers.common.accept = 'application/json';
  api.defaults.headers.common['Authorization'] = `Bearer ${jwt}`;
};