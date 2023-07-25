import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  openCreate: false,
  openCreateWork: false,
  openCreateBoard: false,
};

const appReduce = createSlice({
  name: "app",
  initialState,
  reducers: {
    setOpenCreate: (states, actions) => {
      states.openCreate = actions.payload;
    },
    setOpenCreateWork: (states, actions) => {
      states.openCreateWork = actions.payload;
    },
    setOpenCreateBoard: (states, actions) => {
      states.openCreateBoard = actions.payload;
    },
  },
});

export const { setOpenCreate, setOpenCreateWork, setOpenCreateBoard } =
  appReduce.actions;
export default appReduce.reducer;
