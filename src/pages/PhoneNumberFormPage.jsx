import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { usePhoneNumbers } from "../context/PhoneNumbersContext";

function PhoneNumberFormPage() {
  const [selectedGroup, setSelectedGroup] = useState("");
  const { createPhoneNumber, getPhoneNumber, updatePhoneNumber } =
    usePhoneNumbers();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    async function loadPhoneNumber() {
      if (params.id) {
        const phoneNumber = await getPhoneNumber(params.id);
        setValue("email", phoneNumber.Response.email);
        setValue("name", phoneNumber.Response.name);
        setValue("address", phoneNumber.Response.address);
        setValue("group", phoneNumber.Response.group);
        setValue("phoneNumber", phoneNumber.Response.phoneNumber);
      }
    }
    loadPhoneNumber();
  });

  const onSubmit = handleSubmit(async (values) => {
    if (params.id) {
      updatePhoneNumber(params.id, values);
    } else {
      createPhoneNumber(values);
    }
    navigate("/phoneNumbers");
  });

  return (
    <div className="container-fluid dark-bg text-light py-5 min-vh-100 d-flex align-items-center">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="form-container bg-success p-4 rounded">
              <h2 className="text-center">Add Phone Number</h2>
              <form onSubmit={onSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    {...register("name", { required: true })}
                    placeholder="Full Name"
                    autoFocus
                  />
                  {errors.name && (
                    <p className="text-warning">Name is required</p>
                  )}
                </div>
                <div className="mb-3">
                  <label htmlFor="phoneNumber" className="form-label">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    {...register("phoneNumber", { required: true })}
                    placeholder="+523333333333"
                  />
                  {errors.phoneNumber && (
                    <p className="text-warning">Phone Number is required</p>
                  )}
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    {...register("email", { required: true })}
                    placeholder="name@example.com"
                  />
                  {errors.email && (
                    <p className="text-warning">Email is required</p>
                  )}
                </div>
                <div className="mb-3">
                  <label htmlFor="address" className="form-label">
                    Address
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    {...register("address", { required: true })}
                    placeholder="Address"
                  />
                  {errors.address && (
                    <p className="text-warning">Address is required</p>
                  )}
                </div>
                <div className="mb-3">
                  <label htmlFor="group" className="form-label">
                    Group
                  </label>
                  <select
                    className="form-control"
                    {...register("group", { required: true })}
                    value={selectedGroup}
                    onChange={(e) => setSelectedGroup(e.target.value)}
                  >
                    <option value="">Select a group</option>
                    <option value="Family">Family</option>
                    <option value="Work">Work</option>
                    <option value="Services">Services</option>
                  </select>
                  {errors.group && (
                    <p className="text-warning">Group is required</p>
                  )}
                </div>
                <div className="text-center">
                  <button type="submit" className="btn btn-primary">
                    Add Phone Number
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PhoneNumberFormPage;
