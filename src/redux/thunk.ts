import { Dispatch } from "@reduxjs/toolkit";
import { fetchUsers } from "../api";
import { RootState } from "./store";
import { addUser } from "./userSlice";

const getUsers = (userId?: string) => {
  return async (dispatch: Dispatch, getState: RootState) => {
    try {
      const response = await fetchUsers(userId);
      if (response?.status === 200) {
        dispatch(addUser(response.data));
      }
    } catch (err) {
      console.warn(err);
    }
  };
};

const Actions = {
  getUsers,
};

export { Actions };
