import { combineReducers } from "@reduxjs/toolkit";
import eventsSlice from "./eventsSlice";

export default combineReducers({
  events: eventsSlice
});