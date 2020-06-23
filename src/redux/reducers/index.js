import { combineReducers } from "redux";

// Reducers
import { ActiveItem } from "./Menu";

const RootReducer = combineReducers({
  activeItem: ActiveItem,
});

export default RootReducer;
