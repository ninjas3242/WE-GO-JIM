import React, { useState } from 'react';
import { Box } from '@mui/material';

import Exercises from '../components/Exercises';
import SearchExercises from '../components/SearchExercises';
import HeroBanner from '../components/HeroBanner';
import HeroBannerImage from '../assets/images/banner.png';

const Home = () => {
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState('all');

  return (
    <Box sx={{ backgroundColor:'' }}>
          <img src={HeroBannerImage} alt="hero-banner" className="hero-banner-img"style={{  borderRadius: 100, overflow: 'hidden', width:'auto',height:'900px', marginTop:45,marginRight:100 }} />

      <HeroBanner />
      <SearchExercises setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart} />
      <Exercises setExercises={setExercises} exercises={exercises} bodyPart={bodyPart} />
    </Box>
  );
};

export default Home;
