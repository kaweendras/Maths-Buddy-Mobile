import {createContext} from 'react';

export const scoreContext = createContext({ storedScore: {}, setStoredScore: () => {} });
// export const CredentialsContext = createContext({ storedCredentials: {}, setStoredCredentials: () => {} });