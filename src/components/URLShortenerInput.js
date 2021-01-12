import React from "react";

const URLShortenerInput = ({ onChange, className, ...props }) => {
  return (
    <div className={className}>
      <label htmlFor='linkInput'>Shorten a link here...</label>
      <input
        type='text'
        onChange={(e) => onChange(e)}
        name='linkInput'
        id='linkInput'
        {...props}
      />
    </div>
  );
};

export default URLShortenerInput;
