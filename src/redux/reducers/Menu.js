export const ActiveItem = (state = { activeItem: "upload" }, action) => {
  switch (action.type) {
    case "SET_ACTIVE_ITEM":
      return action.payload.activeItem;
    default:
      return state.activeItem;
  }
};
