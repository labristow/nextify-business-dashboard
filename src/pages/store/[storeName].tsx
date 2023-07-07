import AmazonNavbar from "@/layouts/store/components/AmazonNavbar";
import Container from "@/layouts/store/components/Container";
import React from "react";

function Store() {
  return (
    <div className="px-32 h-screen relative">
      <AmazonNavbar />
      <Container />
    </div>
  );
}

export default Store;
