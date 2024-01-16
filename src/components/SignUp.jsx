import React, { useState } from "react";
import Flex from "./layout/Flex";
import Image from "./layout/Image";
import SignUpImg from "../assets/sign-up.png";
import Container from "./layout/Container";
import Input from "./Input";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { ProgressBar } from "react-loader-spinner";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";
const SignUp = () => {
  const [eye, seteye] = useState();
  const [progressBer, setProgressBer] = useState();
  const [passwordType, setPasswordTyp] = useState();
  const [input, setInput] = useState({ email: "", name: "", password: "" });
  const [error, setError] = useState({
    emailError: "Write your Email",
    nameError: "Write your name",
    passwordError: "Write your password",
  });
  const [touched, setTouched] = useState({
    email: false,
    name: false,
    password: false,
  });

  const eyeHandle = () => {
    seteye(!eye);
    setPasswordTyp(!passwordType);
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInput((oldData) => ({
      ...oldData,
      [name]: value,
    }));

    if (name === "email") {
      let emailVal =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

      if (!value.match(emailVal)) {
        setError((oldError) => ({
          ...oldError,
          emailError: "This is not a valid Email",
        }));
      } else {
        setError((oldError) => ({
          ...oldError,
          emailError: "",
        }));
      }
    }
    if (name === "name") {
      if (!value) {
        setError((oldError) => ({ ...oldError, nameError: "Write your name" }));
      } else {
        setError((oldError) => ({
          ...oldError,
          nameError: "",
        }));
      }
    }
    if (name === "password") {
      const pass =
        /^(?=.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;

      if (!value.match(pass)) {
        setError((oldError) => ({
          ...oldError,
          passwordError: "Weak password (make it stronger)",
        }));
      } else {
        setError((oldError) => ({
          ...oldError,
          passwordError: "",
        }));
      }
    }
  };
  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((oldTouched) => ({
      ...oldTouched,
      [name]: true,
    }));
  };
  const signInHandle = (e) => {
    e.preventDefault();
    let emailVal =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const pass =
      /^(?=.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;
    if (!input.email) {
      setError((oldError) => ({ ...oldError, emailError: "Write your Email" }));
    } else if (!input.email.match(emailVal)) {
      setError((oldError) => ({
        ...oldError,
        emailError: "This is not a valid Email",
      }));
    } else {
      setError((oldError) => ({
        ...oldError,
        emailError: "",
      }));
    }
    if (!input.name) {
      setError((oldError) => ({ ...oldError, nameError: "Write your name" }));
    } else {
      setError((oldError) => ({
        ...oldError,
        nameError: "",
      }));
    }

    if (!input.password) {
      setError((oldError) => ({
        ...oldError,
        passwordError: "Write your password",
      }));
    } else if (!input.password.match(pass)) {
      setError((oldError) => ({
        ...oldError,
        passwordError: "write more strong password",
      }));
    } else {
      setError((oldError) => ({
        ...oldError,
        passwordError: "",
      }));
    }
    setTouched({
      email: true,
      name: true,
      password: true,
    });

    if (!error.emailError && !error.nameError && !error.passwordError) {
      const auth = getAuth();
      setProgressBer(true);
      createUserWithEmailAndPassword(auth, input.email, input.password).then(
        (userCredential) => {
          toast.success("successfull complete account", {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          setProgressBer(false);
        }
      );
    }
  };

  return (
    <section>
      <Container>
        <Flex className="justify-between font-nunito items-center">
          <div className="ml-[150px]">
            <h1 className="text-[35px] font-bold">
              Get started with easily register
            </h1>
            <form action="">
              <Input
                type={"email"}
                labelName={"Email Address"}
                value={input.email}
                onChange={handleInput}
                name="email"
                onBlur={handleBlur}
              />
              {touched.email && error.emailError && (
                <p className="text-red-500 text-[14px]">{error.emailError}</p>
              )}
              <Input
                type={"text"}
                labelName={"Full Name"}
                value={input.name}
                onChange={handleInput}
                name="name"
                onBlur={handleBlur}
              />
              {touched.name && (
                <p className="text-red-500 text-[14px]">{error.nameError}</p>
              )}
              <div className="relative mt-[40px] inline-block">
                <label className="text-[13px] text-[#11175D] font-semibold absolute bg-[#fff] px-[20px] top-[-10px] left-[35px]">
                  Password
                </label>
                <input
                  value={input.password}
                  onChange={handleInput}
                  type={passwordType ? "text" : "password"}
                  className=" rounded-[10px] border-2 border-[#11175D] w-[360px] px-[10px] py-[10px] "
                  name="password"
                  onBlur={handleBlur}
                />

                {touched.password && error.passwordError && (
                  <p className="text-red-500 text-[14px]">
                    {error.passwordError}
                  </p>
                )}

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

              {progressBer ? (
                <ProgressBar
                  visible={true}
                  height="80"
                  width="100"
                  color="#4fa94d"
                  ariaLabel="progress-bar-loading"
                  wrapperStyle={{}}
                  wrapperClass=""
                />
              ) : (
                <button
                  onClick={signInHandle}
                  className="rounded-[80px] px-[140px] py-[15px] bg-[#5F35F5] mt-[40px] text-5 font-semibold text-[#fff]"
                >
                  Sign up
                </button>
              )}
            </form>
            <p className="ml-[50px] mt-[35px] font-normal text-[14px] text-[#03014C]">
              Already have an account ?{" "}
              <span className="text-[#EA6C00;] font-bold">
                <Link to="/Login">Sign In</Link>
              </span>
            </p>
            <ToastContainer />
          </div>
          <Image imgClassName="h-[110vh]" src={SignUpImg} />
        </Flex>
      </Container>
    </section>
  );
};

export default SignUp;
