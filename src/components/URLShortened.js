import React from "react";

const URLShortened = ({link, ...props}) => {
  return <input readOnly {...props} value={link}/>;
};

export default URLShortened;
