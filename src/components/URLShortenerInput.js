import React from "react";

const URLShortenerInput = ({ onChange, ...props }) => {
  return (
    <input
      type='text'
      onChange={(e) => onChange(e)}
      name='linkInput'
      id='linkInput'
      aria-label='Shorten linke here'
      placeholder='Shorten a link here...'
      {...props}
    />
  );
};

export default URLShortenerInput;
