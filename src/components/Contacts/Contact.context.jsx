import { createContext, useContext } from 'react';

const ContactsContext = createContext({});

export function useContactsContext() {
  const data = useContext(ContactsContext);
  return data;
}

export default function ContactProvider({ children, value }) {
  return (
    <ContactsContext.Provider value={value}>
      {children}
    </ContactsContext.Provider>
  );
}
