import { createContext, useContext, useState } from "react";
import {
  createPhoneNumberRequest,
  getPhoneNumberRequest,
} from "../api/phoneNumbers";

const PhoneNumberContext = createContext();

export const usePhoneNumbers = () => {
  const context = useContext(PhoneNumberContext);

  if (!context) {
    throw new Error("usePhoneNumber must be used within a PhoneNumberProvider");
  }

  return context;
};

export function PhoneNumberProvider({ children }) {
  const [phoneNumbers, setPhoneNumbers] = useState([]);

  const getPhoneNumbers = async () => {
    try {
      const res = await getPhoneNumberRequest();
      setPhoneNumbers(res.data);
      return
    } catch (error) {
      console.log(error);
    }
  };

  const createPhoneNumber = async (phoneNumber) => {
    const res = await createPhoneNumberRequest(phoneNumber);
    console.log(res);
  };

  return (
    <PhoneNumberContext.Provider
      value={{ getPhoneNumbers, phoneNumbers, createPhoneNumber }}
    >
      {children}
    </PhoneNumberContext.Provider>
  );
}
