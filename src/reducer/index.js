import { combineReducers } from "redux";

import CalendarioReducer from "./CalendarioReducer";

export default combineReducers({
  data: CalendarioReducer,
});
