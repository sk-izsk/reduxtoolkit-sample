import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../api";

let initialState: User[] = [];

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state: User[], action: PayloadAction<User[]>) => {
      state = action.payload;
      return state;
    },
  },
});

export const { addUser } = userSlice.actions;

export default userSlice.reducer;
