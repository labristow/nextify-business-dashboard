import HomeLayout from "@/layouts/homepage/HomeLayout";
import LoginLayout from "@/layouts/login/LoginLayout";
import React from "react";

function Login() {
  return (
    <HomeLayout>
      <LoginLayout />
    </HomeLayout>
  );
}

export default Login;
