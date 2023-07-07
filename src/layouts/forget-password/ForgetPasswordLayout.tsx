import ButtonForm from "@/components/button/ButtonForm";
import PasswordInput from "@/components/input/PasswordInput";
import TextInput from "@/components/input/TextInput";
import Link from "next/link";
import React, { ChangeEvent, useState } from "react";

function ForgetPasswordLayout() {
  const [isLoading, setIsLoading] = useState(false);
  const [loginPayload, setLoginPayload] = useState({
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
    <div className="w-full flex justify-center items-center pt-28">
      <div className="w-[610px] h-[340px] px-16 py-8 bg-white hover:shadow-md duration-700 bg-opacity-60 border border-gray-100 rounded-xl">
        <h4 className="text-3xl font-medium text-primary-dark">
          Forgot your password?
        </h4>
        <p className="text-gray-400 text-xl">Reset the password here</p>

        <div className="flex flex-col gap-5 mt-10">
          <TextInput
            label="Email address"
            placeholder="Enter your email address"
            name="email"
            type="text"
            value={loginPayload.email}
            onChange={handleInputChange}
          />

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
              text="Retrieve password"
              bgColor="#5F30E2"
              className="w-[180px] h-14 rounded-xl flex gap-2 items-center"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgetPasswordLayout;
