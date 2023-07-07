import ButtonForm from "@/components/button/ButtonForm";
import PasswordInput from "@/components/input/PasswordInput";
import TextInput from "@/components/input/TextInput";
import Link from "next/link";
import React, { ChangeEvent, useState } from "react";

function RegisterLayout() {
  const [isLoading, setIsLoading] = useState(false);
  const [loginPayload, setLoginPayload] = useState({
    fullName: "",
    businessName: "",
    email: "",
    password: "",
  });
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setLoginPayload({
      ...loginPayload,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  };
  return (
    <div className="w-full flex justify-center items-start py-6">
      <div className="w-[610px] min-h-[420px] px-16 py-8 bg-white hover:shadow-md duration-700 bg-opacity-60 border border-gray-100 rounded-xl">
        <h4 className="text-3xl font-medium text-primary-dark">
          Start your online store
        </h4>
        <p>Setup you store in few simple steps</p>

        <div className="flex flex-col gap-5 mt-10">
          <TextInput
            label="Fullname"
            placeholder="Enter your fullname"
            name="fullName"
            type="text"
            value={loginPayload.fullName}
            onChange={handleInputChange}
          />
          <TextInput
            label="Business name"
            placeholder="Enter your business name"
            name="businessName"
            type="text"
            value={loginPayload.businessName}
            onChange={handleInputChange}
          />
          <TextInput
            label="Email address"
            placeholder="Enter your email address"
            name="email"
            type="text"
            value={loginPayload.email}
            onChange={handleInputChange}
          />
          <PasswordInput
            label="Password"
            placeholder="Enter your password"
            name="password"
            value={loginPayload.password}
            onChange={handleInputChange}
          />

          <div className="form-base">
            <Link href={"/forget-password"}>
              <span className="font-medium text-sm text-primary">
                Forgot password?
              </span>
            </Link>

            <div className="w-full flex items-center justify-between mt-5">
              <p className="text-gray-500 text-sm">
                Already a user?
                <Link href={"/login"}>
                  <span className="font-medium mx-1 text-sm text-primary">
                    Sign in
                  </span>
                </Link>
              </p>

              <ButtonForm
                onClick={handleSubmit}
                isLoading={isLoading}
                text="Register"
                bgColor="#5F30E2"
                className="w-[120px] h-14 rounded-xl flex gap-2 items-center"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterLayout;
