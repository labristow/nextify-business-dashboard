import HomeNavbar from "@/components/navbar/HomeNavbar";
import LoginLayout from "@/layouts/login/LoginLayout";
import React from "react";

function Login() {
  return (
    <div className="w-full h-screen overflow-y-auto">
      <HomeNavbar />
      <LoginLayout />
    </div>
  );
}

export default Login;
