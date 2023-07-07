import React, { useState, useEffect } from "react";
import {
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  MenuItem,
  Menu,
} from "@mui/material";
import { Pagination } from "@mui/material";
import { showOverlay } from "../../features/overlay/overlaySlice";
import { useDispatch } from "react-redux";
import { OrderDetails } from "@/pages/orders";
import { currencyConverter } from "@/utils/currenyConverter";

const OrderTable: React.FC<{
  orders: OrderDetails[];
  navigationResetRef: any;
}> = ({ orders, navigationResetRef }) => {
  const dispatch = useDispatch();
  // const [orders, setOrders] = useState<Order[]>([]);
  const [page, setPage] = useState<number>(1);
  const [rowsPerPage, setRowsPerPage] = useState<number>(10);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedOrder, setSelectedOrder] = useState<OrderDetails | null>(null);

  // // Generate random orders with different statuses
  // useEffect(() => {
  //   const statuses = ["pending", "successful", "cancelled", "failed"];
  //   const generateRandomOrders = (): Order[] => {
  //     // Generate 30 random orders with different statuses
  //     const randomOrders: Order[] = [];
  //     for (let i = 1; i <= 30; i++) {
  //       const randomStatus =
  //         statuses[Math.floor(Math.random() * statuses.length)];
  //       const order: Order = {
  //         id: i,
  //         customerName: `Customer ${i}`,
  //         orderDate: "2023-05-22",
  //         orderTotal: Math.floor(Math.random() * 1000),
  //         status: randomStatus,
  //       };
  //       randomOrders.push(order);
  //     }
  //     return randomOrders;
  //   };
  //   console.log(generateRandomOrders())
  //   setOrders(generateRandomOrders());
  // }, []);

  useEffect(() => {
    if (page) {
      navigationResetRef.current = setPage;
    }
  }, []);

  const viewOrderHandler = (order: OrderDetails) => {
    setSelectedOrder(order);
    dispatch(
      showOverlay({
        name: "view-order-overlay",
        data: order,
      })
    );
  };

  const handleMenuClose = (e: React.MouseEvent<HTMLDivElement>) => {
    const element = e.target as HTMLElement;
    if (element.classList.contains("overlay")) {
      setAnchorEl(null);
      setSelectedOrder(null);
    }
  };

  const handleChangePage = (
    event: React.ChangeEvent<unknown>,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(1);
  };

  // Calculate the total number of pages
  const totalPages = Math.ceil(orders.length / rowsPerPage);

  // Calculate the current page's orders based on rowsPerPage and page
  const startIndex = (page - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const currentOrders = orders.slice(startIndex, endIndex);

  const getStatusStyle = (status: string): React.CSSProperties => {
    switch (status) {
      case "pending":
        return { backgroundColor: "#FDEFC7", color: "#F59E0B" };
      case "processing":
        return { backgroundColor: "#BFDBFE", color: "#3B82F6" };
      case "successful":
        return { backgroundColor: "#DDF1EF", color: "#1D9D90" };
      case "cancelled":
        return { backgroundColor: "#EEEEEE", color: "#333333" };
      case "failed":
        return { backgroundColor: "#FEE2E2", color: "#EF4444" };
      default:
        return {};
    }
  };

  const getTotalOrderAmount = (products: any[]) => {
    const total = products.reduce(
      (total, product) => total + product.price * product.quantity,
      0
    );

    return currencyConverter(total);
  };

  return (
    <div>
      {/* {selectedOrder && <Overlay data={selectedOrder} handleMenuClose={handleMenuClose} />} */}
      <TableContainer sx={{ maxHeight: 380 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell>Order ID</TableCell>
              <TableCell>Customer Name</TableCell>
              <TableCell>Order Date</TableCell>
              <TableCell>Order Total</TableCell>
              <TableCell>Status</TableCell>
              <TableCell className="w-[180px]">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {currentOrders.map((order) => (
              <TableRow key={order.id} className="hover:bg-gray-50 h-20">
                <TableCell>{order.id}</TableCell>
                <TableCell>{order.customer.name}</TableCell>
                <TableCell>{order.orderDate}</TableCell>
                <TableCell>{getTotalOrderAmount(order.products)}</TableCell>
                <TableCell>
                  <span
                    title={order.status}
                    className="py-3 px-5 rounded-full text-sm font-medium capitalize cursor-pointer"
                    style={getStatusStyle(order.status)}
                  >
                    {order.status}
                  </span>
                </TableCell>
                <TableCell>
                  <button
                    className="w-[80px]"
                    onClick={() => viewOrderHandler(order)}
                  >
                    View Details
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Pagination
        className="w-full flex items-center justify-end bg-white h-16"
        // rowsPerPageOptions={[10, 25, 100]}
        // rowsPerPage={rowsPerPage}
        // onRowsPerPageChange={handleChangeRowsPerPage}
        // component="div"
        count={totalPages}
        page={page}
        onChange={handleChangePage}
        showFirstButton
        showLastButton
      />
    </div>
  );
};

export default OrderTable;
