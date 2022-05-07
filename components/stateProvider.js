import { createContext } from 'react';

// Credential context
export const scoreContext = createContext({ storedScore: {}, setStoredScore: () => {} });
// export const CredentialsContext = createContext({ storedCredentials: {}, setStoredCredentials: () => {} });