import { 
  createSlice, 
  PayloadAction 
} from "@reduxjs/toolkit";

interface EventsState {
  isLoading: boolean,
}  

const initialState: EventsState = {
  isLoading: false,
}

export const eventsSlice = createSlice({
  name: "events",
  initialState,
  reducers: {
    setIsLoading: (state, action: PayloadAction<boolean>) => {
        state.isLoading = action.payload
    },
  },
});

export const {
  setIsLoading,
} = eventsSlice.actions;

export default eventsSlice.reducer;