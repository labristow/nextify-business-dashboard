import HomeNavbar from "@/components/navbar/HomeNavbar";
import ForgetPasswordLayout from "@/layouts/forget-password/ForgetPasswordLayout";
import React from "react";

function Login() {
  return (
    <div className="w-full h-screen overflow-y-auto">
      <HomeNavbar />
      <ForgetPasswordLayout />
    </div>
  );
}

export default Login;
