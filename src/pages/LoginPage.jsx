import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { signin, isAuthenticated, errors: registerErrors } = useAuth();

  const navigate = useNavigate();
  useEffect(() => {
    if (isAuthenticated) navigate("/phoneNumbers");
  }),
    [isAuthenticated];

  const onSubmit = handleSubmit(async (values) => {
    signin(values);
  });

  return (
    <div className="container-fluid dark-bg text-light py-5 min-vh-100 d-flex align-itPems-center">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="form-container bg-success p-4 rounded">
              <h2 className="text-center">Login</h2>
              {
                <div className="bg-danger text-light">
                  {registerErrors.message}
                </div>
              }
              <form onSubmit={onSubmit}>
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
                    Password
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
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
          <p className="row justify-content-center">
            Don't have an account? <Link to="/register" className="row justify-content-center">Sign up</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
