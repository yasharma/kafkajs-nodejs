import { customAlphabet } from 'nanoid/non-secure';

const alphaNumericCharacters = '0123456789abcdefghijklmnopqrstuvwxyz';
export const uniqueId = (length = 10) => customAlphabet(alphaNumericCharacters, length);

export const getJobId = (jobId: string, today = new Date()) => {
  const dd = String(today.getDate()).padStart(2, '0');
  const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  const yyyy = today.getFullYear();

  return `${yyyy}-${mm}-${dd}:${jobId}:${new Date().getTime()}`;
};
