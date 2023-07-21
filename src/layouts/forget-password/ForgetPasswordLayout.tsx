import ButtonForm from "@/components/button/ButtonForm";
import ForgetPwdImage from "@/assets/images/forget-pwd-hero.avif";
import TextInput from "@/components/input/TextInput";
import Link from "next/link";
import React, { ChangeEvent, useState } from "react";
import OnboardingLayout from "../onboarding/OnboardingLayout";

function ForgetPasswordLayout() {
  const [isLoading, setIsLoading] = useState(false);
  const [forgetPwdPayload, setForgetPwdPayload] = useState({
    email: "",
    password: "",
  });
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setForgetPwdPayload({
      ...forgetPwdPayload,
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
    <OnboardingLayout backgroundImage={ForgetPwdImage}>
      <React.Fragment>
        <h4 className="text-3xl font-semibold text-primary-dark">
          Forget your password
        </h4>
        <p>Retrieve your password in few simple steps</p>

        <div className="flex flex-col gap-5 mt-10">
          <TextInput
            label="Email address"
            placeholder="Enter your email address"
            name="email"
            type="text"
            value={forgetPwdPayload.email}
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
      </React.Fragment>
    </OnboardingLayout>
  );
}

export default ForgetPasswordLayout;
