import HomeNavbar from "@/components/navbar/HomeNavbar";
import HomeLayout from "@/layouts/homepage/HomeLayout";
import RegisterLayout from "@/layouts/register/RegisterLayout";
import React from "react";

function Register() {
  return (
    <HomeLayout>
      <RegisterLayout />
    </HomeLayout>
  );
}

export default Register;
