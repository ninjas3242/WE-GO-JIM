import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';
import './App.css';
import ExerciseDetail from './pages/ExerciseDetail';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Welcome from './components/Welcome';
import Plan from './components/Plan';
import LogIn from './pages/Login/Login';
import Register from './pages/Login/Register';

const App = () => (
  <Box width="400px" sx={{ backgroundColor: '#f0f0f0 ', width: { xl: '1488px' } }} m="auto">
    <Navbar />
    <Routes>
      <Route path="/" element={<LogIn />} /> {/* Change to Login page by default */}
      <Route path="/register" element={<Register />} /> {/* Route to Register page */}
      <Route path="/home" element={<Home />} />
      <Route path="/plan" element={<Plan />} />
      <Route path="/exercise/:id" element={<ExerciseDetail />} />
    </Routes>
    <Footer />
  </Box>
);

export default App;
