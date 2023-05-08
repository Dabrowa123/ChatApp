export const displaySettingsReducer = (state = false, action) => {
  switch (action.type) {
    case "DISPLAY_SETTINGS":
      return action.payload;
    default:
      return state;
  }
};
