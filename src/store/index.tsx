import { configureStore } from "@reduxjs/toolkit";
import analyticReducer from "@/features/analytic/analyticSlice";
import overlayReducer from "@/features/overlay/overlaySlice";

export const store = configureStore({
  reducer: {
    analytics: analyticReducer,
    overlay: overlayReducer,
  },
});
