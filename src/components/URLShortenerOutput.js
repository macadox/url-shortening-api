import React from "react";

const URLShortenerOutput = ({ children, ...props }, ref) => {
  return (
    <div {...props} ref={ref}>
      {children}
    </div>
  );
};

const forwardedRef = React.forwardRef(URLShortenerOutput);

export default forwardedRef;
