import React from 'react';
import ReactPlayer from 'react-player';
import Video from '../assets/vid/workout.mp4';
import '../components/welcome.css'; 
import { Link } from 'react-router-dom';

const Welcome = () => {
  return (
    <>
      <div className="background-video">
        <ReactPlayer
          url={Video}
          playing
          loop
          muted
          width="100%"
          height="100%"
        />
      </div>
      <div className="video-overlay">
        <h1>Welcome to Your Workout Journey</h1>
        <p>Discover a new way to fitness with our personalized workout plans.</p>
        <Link to="/Home"> {}
          <button style={{ backgroundColor: 'black', color: 'white', border: "2px", borderBottomStyle: "solid" }}>Start Your Journey</button>
        </Link>
      </div>
    </>
  );
};

export default Welcome;
