import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, AppThunk } from "../../app/store";

export interface NameState {
  name: string;
}

const initialState: NameState = {
  name: "joe biden",
};

export const selectName = (state: RootState) => state.name.name;

export const nameSlice = createSlice({
  name: "name",
  initialState,
  reducers: {
    updateName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
  },
});

export default nameSlice.reducer;
