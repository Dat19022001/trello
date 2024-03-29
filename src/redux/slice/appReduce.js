import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  openCreate: false,
  openCreateWork: false,
  openCreateBoard: false,
  openCreateBoardS: false,
  onUpdate: null,
  openDeleteWorkspace: false,
  refetchWorkspace: null,
  openCreateBoardSS: false,
  refetchBoard: null,
  createBoard: null,
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
    setOpenDeleteWorkspace: (states, actions) => {
      states.openDeleteWorkspace = actions.payload;
    },
    setRefetchWorkspace: (states, actions) => {
      states.refetchWorkspace = actions.payload;
    },
    setOpenCreateBoardSS: (states, actions) => {
      states.openCreateBoardSS = actions.payload;
    },
    setRefetchBoard: (states, actions) => {
      states.refetchBoard = actions.payload;
    },
    setCreateBoard: (states, actions) => {
      states.createBoard = actions.payload;
    },
  },
});

export const {
  setOpenCreate,
  setOpenCreateWork,
  setOpenCreateBoard,
  setOpenCreateBoardS,
  setOnUpdate,
  setOpenDeleteWorkspace,
  setRefetchWorkspace,
  setOpenCreateBoardSS,
  setRefetchBoard,
  setCreateBoard,
} = appReduce.actions;
export default appReduce.reducer;
