import './App.css';
import { Routes, Route } from 'react-router-dom'
import HomePage from 'pages/HomePage';
import LoginPage from 'pages/LoginPage';
import RegPage from 'pages/RegPage';
import NotfoundPage from 'pages/NotfoundPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegPage />} />
      <Route path="*" element={<NotfoundPage />} />
    </Routes>
  );
}

export default App;
