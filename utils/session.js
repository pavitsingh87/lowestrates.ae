import { v4 as uuidv4 } from 'uuid';
import { SHA256 } from 'crypto-js';

// Function to generate a unique session ID
export const generateSessionId = () => {
  return uuidv4();
};

// Function to hash the session ID
export const hashSessionId = (sessionId) => {
  return SHA256(sessionId).toString();
};