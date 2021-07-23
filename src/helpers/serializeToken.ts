export const serializeToken = (token: string | null): string => {
  return JSON.stringify(token).split('"').join('');
};
