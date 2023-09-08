import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { PhoneNumberProvider } from "./context/PhoneNumbersContext";

import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import PhoneNumberFormPage from "./pages/PhoneNumberFormPage";
import PhoneNumberPage from "./pages/PhoneNumberPage";

import ProtectedRoute from "./ProtectedRoute";

function App() {
  return (
    <AuthProvider>
      <PhoneNumberProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />

            <Route element={<ProtectedRoute />}>
              <Route path="/phoneNumbers" element={<PhoneNumberPage />} />
              <Route
                path="/phoneNumbers/:id"
                element={<PhoneNumberFormPage />}
              />
              <Route
                path="/add-phoneNumbers"
                element={<PhoneNumberFormPage />}
              />
            </Route>
          </Routes>
        </BrowserRouter>
      </PhoneNumberProvider>
    </AuthProvider>
  );
}

export default App;
