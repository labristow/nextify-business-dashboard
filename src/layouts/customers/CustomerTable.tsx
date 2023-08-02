import React, { useState, useEffect } from "react";
import {
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import { Pagination } from "@mui/material";
import { useDispatch } from "react-redux";
import { ICustomer } from "./CustomerContainer";
import { SVGS } from "@/assets/SVGS";
import Link from "next/link";

interface CustomerDetails {
  id: number;
  email: string;
  phoneNumber: string;
  name: string;
  joinedDate: string;
  frequency: number;
}

const CustomerTable: React.FC<{
  customers?: ICustomer[];
  //   navigationResetRef: any;
}> = ({ customers }) => {
  const dispatch = useDispatch();
  const [page, setPage] = useState<number>(1);
  const [rowsPerPage, setRowsPerPage] = useState<number>(10);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedCustomer, setSelectedCustomer] =
    useState<CustomerDetails | null>(null);

  useEffect(() => {
    if (page) {
      //   navigationResetRef.current = setPage;
    }
  }, []);

  const handleChangePage = (
    event: React.ChangeEvent<unknown>,
    newPage: number
  ) => {
    setPage(newPage);
  };

  let totalPages;
  let currentCustomers;

  if (customers) {
    // Calculate the total number of pages
    totalPages = Math.ceil(customers.length / rowsPerPage);

    // Calculate the current page's orders based on rowsPerPage and page
    const startIndex = (page - 1) * rowsPerPage;
    const endIndex = startIndex + rowsPerPage;
    currentCustomers = customers.slice(startIndex, endIndex);
  }

  return (
    <div>
      <TableContainer sx={{ maxHeight: 380 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell>Customer ID</TableCell>
              <TableCell>Email Address</TableCell>
              <TableCell>Mobile Number</TableCell>
              <TableCell>Customer Name</TableCell>
              <TableCell>Joined Date</TableCell>
              <TableCell className="w-[150px]">Order Frequency</TableCell>
              <TableCell className="w-[150px]">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {currentCustomers?.map((customer) => (
              <TableRow key={customer.id} className="hover:bg-gray-50 h-20">
                <TableCell>{customer.id}</TableCell>
                <TableCell>{customer.email}</TableCell>
                <TableCell>{customer.phoneNumber}</TableCell>
                <TableCell>{customer.name}</TableCell>
                <TableCell>{customer.joinedDate}</TableCell>
                <TableCell>{customer.frequency}</TableCell>
                <TableCell className="w-[150px]">
                  <Link
                    href={`/orders?customer_id=${customer.id}`}
                    className="text-gray-700 font-medium flex items-center gap-x-1"
                  >
                    <SVGS.OutLinkIcon />
                    View Orders
                  </Link>
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

export default CustomerTable;
