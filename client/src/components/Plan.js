import React, { useState } from 'react';

const Plan = () => {
  const [planName, setPlanName] = useState('');

  const handleSavePlan = () => {
    // Implement logic to send a request to save the workout plan
  };

  return (
    <div>
      <h2>Create Workout Plan</h2>
      <label htmlFor="planName">Plan Name:</label>
      <input
        type="text"
        id="planName"
        value={planName}
        onChange={(e) => setPlanName(e.target.value)}
      />
      <button onClick={handleSavePlan}>Save Plan</button>
    </div>
  );
};

export default Plan;
