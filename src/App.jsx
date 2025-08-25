import './App.css';
import { AuthProvider } from "./context/AuthContext";
import Dashboard from "./Dashboard";
import SignUp from "./auth/SignUp";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Login from "./auth/Login";
import PrivateRoute from "./auth/PrivateRoute";
import PublicRoute from "./auth/PublicRoute";
import ForgotPassword from "./auth/ForgotPassword";
import NavBar from './NavBar';
import ChangePassword from './auth/ChangePassword';
import About from "./About";

function App() {
  return (
    <>
      <ToastContainer theme='dark' />
      <BrowserRouter>
        <AuthProvider>
          <NavBar />
          <Routes>
            <Route exact path="/" element={<PrivateRoute> <Dashboard /></PrivateRoute>} />
            <Route path="/signup" element={<PublicRoute><SignUp /></PublicRoute>} />
            <Route path="/login" element={<PublicRoute><Login /></PublicRoute>} />
            <Route path="/forgot-password" element={<PublicRoute><ForgotPassword /></PublicRoute>} />
            <Route path="about" element={<PrivateRoute> <About /> </PrivateRoute>} />
            <Route path="/change-password" element={<PrivateRoute> <ChangePassword /> </PrivateRoute>} />
            <Route
              path="*"
              element={
                AuthProvider.currentUser ? (
                  <Navigate to="/" replace />
                ) : (
                  <Navigate to="/login" replace />
                )
              }
            />

          </Routes>
        </AuthProvider >
      </BrowserRouter>
    </>
  );
}

export default App;
