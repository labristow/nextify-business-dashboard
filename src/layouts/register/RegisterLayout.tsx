import ButtonForm from "@/components/button/ButtonForm";
import PasswordInput from "@/components/input/PasswordInput";
import HeroImg1 from "@/assets/images/register-bg-image.jpg";
import Link from "next/link";
import React, { ChangeEvent, useState } from "react";
import TextInput from "@/components/input/TextInput";
import { toast } from "react-hot-toast";
import { useRouter } from "next/router";
import OnboardingLayout from "../onboarding/OnboardingLayout";
import OTPInput from "@/components/input/OTPInput";

function RegisterLayout() {
  const { push: navigateTo, asPath } = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [otpPayload, setOtpPayload] = useState("");
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
    if (!loginPayload.businessName) {
      toast.error("Business name is required");
    } else if (!loginPayload.email) {
      toast.error("Email address is required");
    } else if (!loginPayload.fullName) {
      toast.error("Fullname is required");
    } else if (!loginPayload.password) {
      toast.error("Password is required");
    } else {
      setIsLoading(true);

      setTimeout(() => {
        setIsLoading(false);
        toast.success("Registration successful");
        navigateTo("/register#confirm-email");
      }, 3000);
    }
  };

  const handleOTPSubmit = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      // alert(otpPayload);
      toast.success("Email successfully verified");
      navigateTo("/login");
    }, 3000);
  };

  const handleOtpChange = (value: string) => setOtpPayload(value);

  return (
    <OnboardingLayout>
      {asPath.includes("confirm-email") ? (
        <React.Fragment>
          <h4 className="text-3xl font-semibold text-primary-dark">
            Confirm your email
          </h4>
          <p>
            OTP has been sent to your email, enter it to confirm your email.
          </p>

          <div className="flex flex-col gap-5 mt-10">
            <OTPInput length={6} handleOtpChange={handleOtpChange} />

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
                  onClick={handleOTPSubmit}
                  isLoading={isLoading}
                  disabled={isLoading}
                  text="Confirm OTP"
                  bgColor="#5F30E2"
                  className="w-[145px] h-14 rounded-xl flex gap-2 items-center"
                />
              </div>
            </div>
          </div>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <h4 className="text-3xl font-semibold text-primary-dark">
            Get started
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
                  className="w-[130px] h-14 rounded-xl flex gap-2 items-center"
                />
              </div>
            </div>
          </div>
        </React.Fragment>
      )}
    </OnboardingLayout>
  );
}

export default RegisterLayout;
