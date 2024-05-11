import React, { useState, useEffect } from 'react';

const WelcomeOverlay = () => {
  // State to manage the visibility of the overlay
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if the overlay was already accepted
    const overlayAccepted = sessionStorage.getItem('overlayAccepted');
    if (!overlayAccepted) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    // Set the session variable
    sessionStorage.setItem('overlayAccepted', 'true');
    // Hide the overlay
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0,0,0,0.75)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000,
    }}>
      <div style={{
        padding: '20px',
        background: 'black',
        borderRadius: '5px',
        maxWidth: '500px',
        textAlign: 'center',
      }}>
        <h1>Welcome To Rentaly</h1>
        <p>This site is a demo site featuring a headless stack. Wordpress on the backend, and Faust JS on the front end.</p>
        <p>This is NOT a real working live site (no we aren't renting ferrari's 🏎️.) </p>
        <p>We wrote about our experience building this website HERE. and you can find the code open sourced on github.com</p>
        <button onClick={handleAccept} style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}>Accept</button>
      </div>
    </div>
  );
}

export default WelcomeOverlay;
