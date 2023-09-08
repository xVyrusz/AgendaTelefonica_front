import { createContext, useContext, useState } from "react";
import {
  createPhoneNumberRequest,
  getPhoneNumberRequest,
  deletePhoneNumberRequest,
  getPhoneNumbersRequest,
  updatePhoneNumberRequest,
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
      const res = await getPhoneNumbersRequest();
      setPhoneNumbers(res.data);
      return;
    } catch (error) {
      console.log(error);
    }
  };

  const createPhoneNumber = async (phoneNumber) => {
    await createPhoneNumberRequest(phoneNumber);
  };

  const deletePhoneNumber = async (_id) => {
    try {
      const res = await deletePhoneNumberRequest(_id);
      if (res.status === 201)
        setPhoneNumbers(
          phoneNumbers.Response.filter((phoneNumber) => phoneNumber._id !== _id)
        );
    } catch (error) {
      console.log(error);
    }
  };

  const getPhoneNumber = async (_id) => {
    try {
      const res = await getPhoneNumberRequest(_id);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };

  const updatePhoneNumber = async (_id, phoneNumber) => {
    try {
      await updatePhoneNumberRequest(_id, phoneNumber);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <PhoneNumberContext.Provider
      value={{
        getPhoneNumbers,
        getPhoneNumber,
        deletePhoneNumber,
        updatePhoneNumber,
        phoneNumbers,
        createPhoneNumber,
      }}
    >
      {children}
    </PhoneNumberContext.Provider>
  );
}
