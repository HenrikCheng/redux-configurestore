import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface NameState {
  name: string;
  yearsOfService: number;
}

const initialState: NameState = {
  name: "joe biden",
  yearsOfService: 0,
};

export const userProfileSlice = createSlice({
  name: "name",
  initialState,
  reducers: {
    updateName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    emptyName: (state) => {
      state.name = "";
    },
    updateYears: (state, action: PayloadAction<number>) => {
      state.yearsOfService = action.payload;
    },
  },
});

export const { updateName, emptyName, updateYears } = userProfileSlice.actions;

export const selectUser = (state: RootState) => {
  return state.userProfile;
};

export default userProfileSlice.reducer;
