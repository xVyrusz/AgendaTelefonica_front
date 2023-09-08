import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signup, isAuthenticated, errors: registerErrors } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    if (isAuthenticated) navigate("/phoneNumbers");
  }),
    [isAuthenticated];

  const onSubmit = handleSubmit(async (values) => {
    signup(values);
  });

  return (
    <div className="container-fluid dark-bg text-light py-5 min-vh-100 d-flex align-itPems-center">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="form-container bg-success p-4 rounded">
              <h2 className="text-center">Register</h2>
              {<div className="bg-danger text-light">{registerErrors.message}</div>}
              <form onSubmit={onSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    {...register("name", { required: true })}
                  />
                  {errors.name && (
                    <p className="text-warning">Name is required</p>
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
                  <label htmlFor="password" className="form-label">
                    password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    {...register("password", { required: true })}
                    placeholder="Password"
                    autoComplete="off"
                  />
                  {errors.password && (
                    <p className="text-warning">Password is required</p>
                  )}
                </div>
                <div className="text-center">
                  <button type="submit" className="btn btn-primary">
                    Register
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

export default RegisterPage;
