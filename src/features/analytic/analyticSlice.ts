import { createSlice } from "@reduxjs/toolkit";
import type {PayloadAction} from "@reduxjs/toolkit";

export interface IAnalyticState {
  totalSales: null | number;
  totalRevenue: null | number;
  totalOrder: null | number;
  totalCustomer: null | number;
}
const initialState: IAnalyticState = {
  totalSales: null,
  totalRevenue: null,
  totalOrder: null,
  totalCustomer: null,
};
export const analyticSlice = createSlice({
  name: "analytic",
  initialState,
  reducers: {
    fetchAnalytics: (state, action: PayloadAction<number>) => {
      const payload = action.payload;
      const actionType = action.type;
      // make api call to get the new analytics data and set the values
      state.totalSales = 0;
      state.totalSales = 0;
      state.totalRevenue = 0;
      state.totalOrder = 0;
      state.totalCustomer = 0;
    },
  },
});
// Export each actions created for each reducer by the slice
export const { fetchAnalytics } = analyticSlice.actions;
// Export the reducer from the slide too
export default analyticSlice.reducer;
