import HomeNavbar from "@/components/navbar/HomeNavbar";
import RegisterLayout from "@/layouts/register/RegisterLayout";
import React from "react";

function Login() {
  return (
    <div className="w-full h-screen overflow-y-auto">
      <HomeNavbar />
      <RegisterLayout />
    </div>
  );
}

export default Login;
