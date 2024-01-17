import React from 'react';

const ZoomButton = () => {
  const handleZoomMeeting = async () => {
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
