import React from 'react';

const ZoomButton = () => {
  const handleZoomMeeting = async () => {
    // Add Zoom API logic here to create a meeting
    console.log('Opening Zoom Meeting...');
  };

  return (
    <button onClick={handleZoomMeeting}>
      <img src="path/to/zoom-icon.png" alt="Zoom" />
      התקשרות ב-Zoom
    </button>
  );
};

export default ZoomButton;
