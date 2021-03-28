import { createStore, combineReducers } from "redux";
import sidebarShowReducer from "./reducers/sidebarShow";
import userdetailsReducer from "./reducers/userDetails";

const rootReducer = combineReducers({
  sbs: sidebarShowReducer,
  ud: userdetailsReducer,
});

const store = createStore(rootReducer);
export default store;
