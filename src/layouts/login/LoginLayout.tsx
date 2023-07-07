import ButtonForm from "@/components/button/ButtonForm";
import PasswordInput from "@/components/input/PasswordInput";
import TextInput from "@/components/input/TextInput";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { ChangeEvent, useState } from "react";
import { toast } from "react-hot-toast";

function LoginLayout() {
  const router = useRouter();
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
      toast.success("Login successfully");
      setIsLoading(false);
      router.push("/home");
    }, 3000);
  };
  return (
    <div className="w-full flex justify-center items-center pt-20">
      <div className="w-[610px] h-[420px] px-16 py-8 bg-white hover:shadow-md duration-700 bg-opacity-60 border border-gray-100 rounded-xl">
        <h4 className="text-3xl font-medium text-primary-dark">
          Welcome, back
        </h4>
        <p className="text-gray-400 text-xl">Sign in to continue</p>

        <div className="flex flex-col gap-5 mt-10">
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
              <p className="text-gray-400 text-sm">
                New user?{" "}
                <Link href={"/register"}>
                  <span className="font-medium text-sm text-primary">
                    Create account
                  </span>
                </Link>
              </p>

              <ButtonForm
                onClick={handleSubmit}
                isLoading={isLoading}
                text="Sign in"
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

export default LoginLayout;
