import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  openCreate: false,
  openCreateWork: false,
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
  },
});

export const { setOpenCreate, setOpenCreateWork } = appReduce.actions;
export default appReduce.reducer;
