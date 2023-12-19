import { createSlice } from "@reduxjs/toolkit";
import userService from "../services/userService";

const usersReducer = createSlice({
  name: "users",
  initialState: [],
  reducers: {
    setUsers(state, action) {
      return action.payload;
    },
  },
});

export const { setUsers } = usersReducer.actions;

export const initializeUsers = () => {
  return async (dispatch) => {
    const users = await userService.getUsers();
    dispatch(setUsers(users));
  };
};

export default usersReducer.reducer;
