import React from "react";

const URLCopyButton = ({ isCopied, onClick, index, ...props }) => {
  return (
    <button {...props} onClick={() => onClick(index)}>
      {isCopied ? "Copied!" : "Copy"}
    </button>
  );
};

export default URLCopyButton;
