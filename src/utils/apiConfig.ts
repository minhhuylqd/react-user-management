export const getApiUrl = (): string => {
  const url = import.meta.env.VITE_API_URL;
  if (!url) {
    throw new Error('Missing API URL in environment variable');
  }
  return url;
};
