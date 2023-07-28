import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  openCreate: false,
  openCreateWork: false,
  openCreateBoard: false,
  openCreateBoardS: false,
  onUpdate: null,
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
    setOpenCreateBoardS: (states, actions) => {
      states.openCreateBoardS = actions.payload;
    },
    setOnUpdate: (states, actions) => {
      states.onUpdate = actions.payload;
    },
  },
});

export const {
  setOpenCreate,
  setOpenCreateWork,
  setOpenCreateBoard,
  setOpenCreateBoardS,
  setOnUpdate,
} = appReduce.actions;
export default appReduce.reducer;
