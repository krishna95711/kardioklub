import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';
import './App.css';
import ExerciseDetail from './pages/ExerciseDetail';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Excercisepage from './pages/Excercisepage';
import HeroBannerImage from './assets/images/back.jpg';

const App = () => (
  <Box
    margin-top="0px"
    width="400px"
    sx={{ width: { xl: '1488px' } }}
    m="auto"
    style={{
      backgroundImage: `url(${HeroBannerImage})`,
      backgroundSize: 'cover',
      color: '#f5f5f5',
    }}
  >
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/exercise/:id" element={<ExerciseDetail />} />
      <Route path="/Exercisepage" element={<Excercisepage />} />
    </Routes>
    <Footer />
  </Box>
);

export default App;
