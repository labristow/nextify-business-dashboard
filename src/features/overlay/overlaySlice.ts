import { createSlice } from "@reduxjs/toolkit";

interface IOverlaySlice {
  name?: string;
  data?: any[] | null;
}
const initialState: IOverlaySlice = {
  name: "",
  data: null,
};
export const overlaySlice = createSlice({
  initialState,
  name: "overlaySlice",
  reducers: {
    showOverlay: (state, action) => {
      state.name = action.payload.name;
      state.data = action.payload.data;
    },
    hideOverlay: (state) => {
      state.name = "";
    },
  },
});

export const { hideOverlay, showOverlay } = overlaySlice.actions;
export default overlaySlice.reducer;
