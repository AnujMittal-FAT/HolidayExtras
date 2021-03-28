import { createStore } from "redux";
import * as actionTypes from "../actions";
//import rootReducer from "./Reducers/index";

const initialState = {
  userDetails: {
    givenName: "Zoe",
  },
};

const reducer = (state = initialState, { type, ...rest }) => {
  switch (type) {
    // case actionTypes.SETUSERDETAILS:
    //   return { ...state, ...rest };
    default:
      return state;
  }
};

//const store = createStore(reducer);
export default reducer;
