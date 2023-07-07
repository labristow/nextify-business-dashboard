import SignInOptions from "@/components/sign-in-options/SignInOptions";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import logo from "@/assets/svgs/logo2.svg";
import EmailInput2 from "@/components/inputs/EmailInput2";
import PasswordInput2 from "@/components/inputs/PasswordInput2";
import Button from "@/components/button/Button";

function Index() {
  const [loginPayload, setLoginPayload] = useState({
    emailAddress: "",
    password: "",
  });
  const loginInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginPayload({
      ...loginPayload,
      [name]: value,
    });
  };
  return (
    <div className="w-full h-screen bg-dark">
      <nav className="w-full h-20 flex items-center px-10">
        <Link href="/">
          <p className="font-bold text-xl">
            <Image src={logo} width={100} height={40} alt="logo" />
          </p>
        </Link>
      </nav>
      <div className="w-[423px] h-auto flex flex-col items-center mx-auto">
        <nav className="px-10 pt-5">
          <h2 className="title text-3xl font-bold text-white">
            Sign up on Colabb
          </h2>
        </nav>
        <div className="w-full px-5 w-[390px] mt-10">
          <form action="" method="POST" autoComplete="off">
            <div className="py-0.5">
              <EmailInput2
                name="emailAddress"
                label="Email address"
                value={loginPayload.emailAddress}
                placeholder="Enter your email address"
                bg="black"
                onChange={loginInputChange}
              />
            </div>
            <div className="py-0.5">
              <PasswordInput2
                name="password"
                label="Password"
                value={loginPayload.password}
                placeholder="Enter your password"
                bg="black"
                onChange={loginInputChange}
              />
            </div>
            <div className="pt-5 pb-3">
              <Button
                text="Create an account"
                className="!text-[17px] font-medium bg-white !text-dark"
              />
            </div>
            <p className="text-gray-500 text-sm text-center py-2">
              Already have an account?{" "}
              <Link href={"/"}>
                <span className="text-white font-medium">Log in</span>
              </Link>
            </p>
            <div className="social-media-btns py-4">
              <SignInOptions />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Index;
