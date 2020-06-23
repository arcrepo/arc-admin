export const SetActiveItem = (activeItem) => {
  return {
    type: "SET_ACTIVE_ITEM",
    payload: {
      activeItem,
    },
  };
};
