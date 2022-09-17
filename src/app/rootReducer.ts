import { combineReducers } from "@reduxjs/toolkit";
import eventsSlice from "../features/events/eventsSlice";

export default combineReducers({
  events: eventsSlice
});