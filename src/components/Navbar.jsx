import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Navbar() {
  const { isAuthenticated, logout } = useAuth();
  return (
    <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
      <div className="container-fluid">
        <Link to="/">
          <h1 className="navbar-brand">Phone Book</h1>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarColor02"
          aria-controls="navbarColor02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarColor02">
          <ul className="navbar-nav ms-auto justify-content-end">
            {isAuthenticated ? (
              <>
                <li className="nav-item btn btn-primary px-2">
                  <Link to={"/phoneNumbers"} className="px-2 text-light">
                    Phone Numbers
                  </Link>
                </li>
                <li className="nav-item btn btn-primary px-2">
                  <Link to={"/add-phoneNumbers"} className="px-2 text-light">
                    Add Phone Number
                  </Link>
                </li>
                <li className="nav-item px-2">
                  <Link
                    to={"/"}
                    onClick={() => {
                      logout();
                    }}
                    className="px-2 btn btn-primary"
                  >
                    Logout
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item px-2">
                  <Link to={"/login"} className="px-2 btn btn-primary">
                    Login
                  </Link>
                </li>
                <li className="nav-item px-2">
                  <Link to={"/register"} className="px-2 btn btn-primary">
                    Register
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
