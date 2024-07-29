import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { toast } from "react-hot-toast";
import { useForm } from "react-hook-form";
import arrowLeft from "assets/icons/arrow-left.svg";
import forgotImg from "assets/forgot-image.png";
import sms from "assets/sms.png";
import { NextPage } from "next";
import { forgotPassword } from "@/api-endpoints/auth/auth.api";
import AuthLayout from "@/layouts/Auth.layout";

type FormInputs = {
  email: string;
};

const ForgotPassword: NextPage = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>();

  const mutation = useMutation(forgotPassword, {
    onSuccess: (data) => {
      toast.success(data.data);
      router.push("/auth/check-email");
    },
    onError: (err: AxiosError<{ error: string }>) => {
      if (err && err.response && err.response.data) {
        toast.error(err.response.data.error);
      } else {
        toast.error("An error occured");
      }
    },
  });

  const onSubmit = (data: FormInputs) => {
    mutation.mutate(data.email);
  };

  return (
    <AuthLayout>
      <>
        <div
          className={`max-w-[560px] min-h-[50vh] md:p-6 bg-[#fff] md:shadow-[4px_4px_32px_rgba(0,0,0,0.1)] md:backdrop-opacity-20 rounded-[24px] mx-auto border- mt-10 md:mt-0`}
        >
          <button onClick={() => router.push("/auth/login")}>
            <Image
              src={arrowLeft}
              alt="arrow"
              className="rounded-full p-2 w-10 bg-gray-200"
            />
          </button>
          <div className="p-6 md:pX-24 md:py-6">
            <Image
              src={forgotImg}
              alt="forgotten-image"
              className="flex justify-content-center items-center mx-auto"
              width={200}
              height={150}
            />
            <h3 className="text-center font-semibold text-3xl mb-8">
              Forgot Password
            </h3>
            <p className="text-gray-700  mx-auto text-left text-m">
              Enter your email address and we’ll send you instructions on how to
              reset your password.
            </p>
            <form onSubmit={handleSubmit(onSubmit)} className="px-3 md:px-6">
              <div className="mt-3 mb-8">
                <div className="border-2 border-black-400 outline-none rounded-md mx-auto flex items-center mb-1 p-2 w-full gap-2 h-14">
                  <div className=" h-fit w-fit">
                    <Image src={sms} alt="sms" />
                  </div>
                  <input
                    id="email"
                    type="email"
                    {...register("email", { required: true })}
                    placeholder="nifemijoy@gmail.com"
                    className="outline-none w-full h-full"
                  />
                </div>
                {errors.email && (
                  <span className="text-red-600">This field is required</span>
                )}
              </div>

              <button
                type="submit"
                className=" bg-black  outline-none rounded-md mx-auto flex items-center justify-content-content mt-3 mb-3 md:mb-24  p-2 py-4 w-full"
              >
                <span className="font-normal text-center w-full text-md text-white">
                  Send
                </span>
              </button>
            </form>
          </div>
        </div>
      </>
    </AuthLayout>
  );
};

export default ForgotPassword;
