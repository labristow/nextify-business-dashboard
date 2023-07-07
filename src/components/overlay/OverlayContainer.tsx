import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { hideOverlay } from "@/features/overlay/overlaySlice";
import AddProduct from "../modal/AddProduct";
import UpdateProduct from "../modal/UpdateProduct";
import ViewOrder from "../modal/ViewOrder";
import ViewTransaction from "../modal/ViewTransaction";
import SearchModal from "../search/SearchModal";

function OverlayContainer() {
  const overlay = useSelector((state: any) => state.overlay);
  const dispatch = useDispatch();
  const closeOverlay = (
    e: any //React.ChangeEvent<HTMLDivElement>
  ) => {
    const isOverlayClicked = e.target.classList.contains("overlay");
    if (isOverlayClicked) {
      dispatch(hideOverlay());
    }
  };
  const modalShouldNotCloseOnOverlayClick =
    overlay.name === "search-navigation-overlay";
  const doNothing = () => null;
  return (
    <React.Fragment>
      {overlay.name && (
        <div
          onClick={modalShouldNotCloseOnOverlayClick ? doNothing : closeOverlay}
          className="overlay w-full h-screen fixed top-0 left-0 bg-[#00000090] z-40 backdrop-blur-sm"
        >
          {/* {JSON.stringify(overlay)} */}
          {overlay.name === "add-product-overlay" && <AddProduct />}
          {overlay.name === "update-product-overlay" && (
            <UpdateProduct data={overlay.data} />
          )}
          {overlay.name === "view-order-overlay" && (
            <ViewOrder data={overlay.data} />
          )}
          {overlay.name === "view-transaction-overlay" && (
            <ViewTransaction data={overlay.data} />
          )}
          {overlay.name === "search-navigation-overlay" && <SearchModal />}
        </div>
      )}
    </React.Fragment>
  );
}

export default OverlayContainer;
