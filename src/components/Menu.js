import React from "react";

const Menu = ({ children, ...props }) => {
  return <ul {...props}>{children}</ul>;
};

export default Menu;
