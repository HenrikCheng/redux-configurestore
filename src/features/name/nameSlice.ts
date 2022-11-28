import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface NameState {
  value: string;
}

const initialState: NameState = {
  value: "joe biden",
};

export const nameSlice = createSlice({
  name: "name",
  initialState,
  reducers: {
    updateName: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
    emptyName: (state) => {
      state.value = "";
    },
  },
});

export const { updateName, emptyName } = nameSlice.actions;

export const selectName = (state: RootState) => {
  return state.name.value;
};

export default nameSlice.reducer;
