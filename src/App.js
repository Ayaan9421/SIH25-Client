import './App.css';
import { AuthProvider } from "./AuthContext";
import Dashboard from "./Dashboard";
import SignUp from "./SignUp";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Login from "./Login";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import ForgotPassword from "./ForgotPassword";
import NavBar from './NavBar';
import ChangePassword from './ChangePassword';
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
