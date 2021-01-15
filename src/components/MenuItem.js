import React from "react";

const NavItem = ({ children, ...props }) => {
  return <li {...props}>{children}</li>;
};

export default NavItem;
