import HomeNavbar from "@/components/navbar/HomeNavbar";
import ForgetPasswordLayout from "@/layouts/forget-password/ForgetPasswordLayout";
import HomeLayout from "@/layouts/homepage/HomeLayout";
import React from "react";

function Login() {
  return (
    <HomeLayout>
      <ForgetPasswordLayout />
    </HomeLayout>
  );
}

export default Login;
