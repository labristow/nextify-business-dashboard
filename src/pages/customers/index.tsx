import CustomerContainer from "@/layouts/customers/CustomerContainer";
import CustomerHeader from "@/layouts/customers/CustomerHeader";
import React, { useEffect, useState } from "react";
import customersData from "@/mock/customers.json";

function Index() {
  const [customers, setCustomers] = useState(customersData);
  const [customersBackup, setCustomersBackup] = useState(customersData);
  const [sortKey, setSortKey] = useState<string>("dateJoined");
  const [showSearchResult, setShowSearchResult] = useState(false);

  useEffect(() => {
    if (sortKey === "frequency") {
      const sortedCustomer = [...customers].sort(
        (a, b) => b.frequency - a.frequency
      );
      const sortedCustomerBackup = [...customersBackup].sort(
        (a, b) => b.frequency - a.frequency
      );
      setCustomers(sortedCustomer);
      setCustomersBackup(sortedCustomerBackup);
    } else if (sortKey === "dateJoined") {
      const sortedCustomer = [...customers].sort((a, b) => b.id - a.id);
      const sortedCustomerBackup = [...customersBackup].sort(
        (a, b) => b.id - a.id
      );
      setCustomers(sortedCustomer);
      setCustomersBackup(sortedCustomerBackup);
    }
  }, [sortKey]);

  const handleSortKeyChange = (key: string) => {
    setSortKey(key);
  };

  const handleSearchData = (value: string) => {
    if (value.length >= 3) {
      const filteredResult = [...customersBackup].filter(
        (customer) =>
          customer.email.includes(value) ||
          customer.name.includes(value) ||
          customer.phoneNumber.includes(value)
      );
      setCustomers(filteredResult);
      setShowSearchResult(true);
    } else {
      setCustomers(customersBackup);
      setShowSearchResult(false);
    }
  };
  return (
    <div className="w-full slide-up px-6 md:px-0">
      <div className="header py-8">
        <h3 className="text-3xl uppercase font-bold">My Customers</h3>
        <p className="text-sm">
          View all my customers records and details here.
        </p>
      </div>
      <CustomerHeader
        showSearchResult={showSearchResult}
        filteredResultCount={customers.length}
        sortKey={sortKey}
        handleSortKeyChange={handleSortKeyChange}
        handleSearchData={handleSearchData}
      />
      <CustomerContainer customers={customers} />
    </div>
  );
}

export default Index;
