import { createContext, useContext } from "react";

const PhoneNumberContext = createContext();

export const usePhoneNumber = () => {
  const context = useContext(PhoneNumberContext);

  if (!context) {
    throw new Error("usePhoneNumber must be used within a PhoneNumberProvider");
  }
};

export function PhoneNumberProvider({ children }) {
  return (
    <PhoneNumberProvider.Provider value={{}}>
      {children}
    </PhoneNumberProvider.Provider>
  );
}
