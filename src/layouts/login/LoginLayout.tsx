import ButtonForm from "@/components/button/ButtonForm";
import PasswordInput from "@/components/input/PasswordInput";
import TextInput from "@/components/input/TextInput";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { ChangeEvent, useState } from "react";
import { toast } from "react-hot-toast";
import HeroImg2 from "@/assets/images/login-hero-hero.png";
import OnboardingLayout from "../onboarding/OnboardingLayout";
import userData from "../../mock/merchant.json";

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
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!loginPayload.email) {
      toast.error("Email address is required");
    } else if (!loginPayload.password) {
      toast.error("Password is required");
    } else if (!emailRegex.test(loginPayload.email)) {
      toast.error("Invalid email address");
    } else {
      setIsLoading(true);
      setTimeout(() => {
        window.sessionStorage.setItem("userData", JSON.stringify(userData));
        toast.success("Login successfully");
        setIsLoading(false);
        router.push("/home");
      }, 3000);
    }
  };

  return (
    <OnboardingLayout backgroundImage={HeroImg2}>
      <React.Fragment>
        <h4 className="text-3xl font-semibold text-primary-dark">
          Welcome, back
        </h4>
        <p>Sign in to continue</p>

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
      </React.Fragment>
    </OnboardingLayout>
  );
}

export default LoginLayout;
