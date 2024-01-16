import React from "react";
import Input from "./Input";
import { useState } from "react";
import Flex from "./layout/Flex";
import Container from "./layout/Container";
import Image from "./layout/Image";
import GoogleIcon from "../assets/google-icon.png";
import { Link } from "react-router-dom";

import { FaEyeSlash, FaEye } from "react-icons/fa";
import SignInImg from "../assets/sign-in.png";

const SignIn = () => {
  const [eye, seteye] = useState();
  const [passwordType, setPasswordTyp] = useState();
  const eyeHandle = () => {
    seteye(!eye);
    setPasswordTyp(!passwordType);
  };

  return (
    <section>
      <Container>
        <Flex className="justify-between font-nunito items-center">
          <div className="ml-[150px]">
            <h1 className="text-[35px] font-bold">Login to your account! </h1>
            <div className="border-2 border-[#c6c5d7] inline-block rounded-[10px] mt-[30px]">
              <Flex className="items-center px-[45px] gap-[10px]">
                <Image className=" py-[22px]" src={GoogleIcon} />
                <p className="font-semibold text-[#03014C]">
                  Login with Google
                </p>
              </Flex>
            </div>
            <form action="">
              <Input
                type={"email"}
                labelName={"Email Address"}
                // name="email"
              />

              <div className="relative mt-[40px] inline-block">
                <label className="text-[13px] text-[#11175D] font-semibold absolute bg-[#fff] px-[20px] top-[-10px] left-[35px]">
                  Password
                </label>
                <input
                  type={passwordType ? "text" : "password"}
                  className=" rounded-[10px] border-2 border-[#11175D] w-[360px] px-[10px] py-[10px] "
                  name="password"
                />

                <div
                  onClick={eyeHandle}
                  className="absolute top-[0px] cursor-pointer size-[20px] right-[7.5px]"
                >
                  {eye ? (
                    <FaEye className="absolute top-[15px] cursor-pointer size-[20px] right-[10px]" />
                  ) : (
                    <FaEyeSlash className="absolute top-[15px] cursor-pointer size-[20px] right-[10px]" />
                  )}
                </div>
              </div>
            </form>
            <button className="rounded-[80px] px-[140px] py-[15px] bg-[#5F35F5] mt-[40px] text-5 font-semibold text-[#fff]">
              Sign In
            </button>
            <Link
              to="/signup"
              className="cursor-pointer block ml-[50px] mt-[35px] font-normal text-[14px] text-[#03014C]"
            >
              Don’t have an account ?
              <span className="text-[#EA6C00;] font-bold">Sign Up</span>
            </Link>
          </div>
          <Image imgClassName="h-[110vh]" src={SignInImg} />
        </Flex>
      </Container>
    </section>
  );
};

export default SignIn;
