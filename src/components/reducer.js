export const reducer = (state, action) => {
  if (action.type === "SHORTEN_LINK") {
    if (action.payload.length > 0)
      localStorage.setItem("shortenedURLs", JSON.stringify(action.payload));

    return { ...state, shortenedURLs: action.payload };
  }

  if (action.type === "SET_COPY_INDEX") {
    return { ...state, copiedLinkIndex: action.payload };
  }

  if (action.type === "TOGGLE_MENU") {
    return { ...state, menuOpen: action.payload };
  }
};
