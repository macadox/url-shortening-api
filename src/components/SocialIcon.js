import React from "react";

const SocialIcon = ({ icon }) => {
  return (
    <a href={icon.link} className='social'>
      <img src={icon.logo} className='social__icon' alt={icon.title} />
    </a>
  );
};

export default SocialIcon;
