import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchAnalytics } from "@/features/analytic/analyticSlice";

function Analytics() {
  const analytics = useSelector((state: any) => state.analytics);
  const dispatch = useDispatch();
  return (
    <div>
      <div>Analytics{JSON.stringify(analytics)}</div>
      <button onClick={() => dispatch(fetchAnalytics(0))}>click</button>
    </div>
  );
}

export default Analytics;
