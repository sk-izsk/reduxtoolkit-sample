import { Dispatch } from "@reduxjs/toolkit";
import { fetchUsers } from "../api";
import { RootState } from "./store";
import { addUser } from "./userSlice";

const getUsers = () => {
  return async (dispatch: Dispatch, getState: RootState) => {
    try {
      const response = await fetchUsers();
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
