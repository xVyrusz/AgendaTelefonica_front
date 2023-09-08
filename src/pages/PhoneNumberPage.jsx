import { useEffect } from "react";
import { usePhoneNumbers } from "../context/PhoneNumbersContext";

function PhoneNumberPage() {
  const { getPhoneNumbers, phoneNumbers } = usePhoneNumbers();
  useEffect(() => {
    getPhoneNumbers();
  }, []);

  const listPhoneNumbers = phoneNumbers.Response;
  console.log(listPhoneNumbers);
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      {listPhoneNumbers ? (
        <div className="row mx-auto w-75">
          {listPhoneNumbers.map((dataItem) => (
            <div
              key={dataItem._id}
              className="col-lg-3 col-md-6 col-sm-12 mb-4"
            >
              <div className="card bg-success text-white">
                <div className="card-body p-3">
                  <h5 className="card-title">{dataItem.name}</h5>
                  <p className="card-text border-bottom mb-2">
                    Email: {dataItem.email}
                  </p>
                  <p className="card-text border-bottom mb-2">
                    Phone Number: {dataItem.phoneNumber}
                  </p>
                  <p className="card-text border-bottom mb-2">
                    Address: {dataItem.address}
                  </p>
                  <p className="card-text">Group: {dataItem.group}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div>No Phone Numbers Registered</div>
      )}
    </div>
  );
}

export default PhoneNumberPage;
