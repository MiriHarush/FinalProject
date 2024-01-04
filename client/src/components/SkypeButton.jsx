import React from 'react';

const SkypeButton = ({ username }) => {
  const handleSkypeCall = () => {
    const skypeLink = `skype:${username}?call`;
    window.open(skypeLink);
  };

  return (
    <button onClick={handleSkypeCall}>
      <img src="path/to/skype-icon.png" alt="Skype" />
      התקשרות ב-Skype
    </button>
  );
};

export default SkypeButton;
