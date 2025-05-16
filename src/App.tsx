import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from './components/ui/toaster';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import Dashboard from './pages/Dashboard';
import CandidateProfilePage from './pages/CandidateProfilePage';
import ComparePage from './pages/ComparePage';
import JobUploadPage from './pages/JobUploadPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route 
            path="/dashboard" 
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/candidate/:id" 
            element={
              <ProtectedRoute>
                <CandidateProfilePage />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/compare" 
            element={
              <ProtectedRoute>
                <ComparePage />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/job-upload" 
            element={
              <ProtectedRoute>
                <JobUploadPage />
              </ProtectedRoute>
            } 
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Toaster />
      </Router>
    </AuthProvider>
  );
}

export default App;