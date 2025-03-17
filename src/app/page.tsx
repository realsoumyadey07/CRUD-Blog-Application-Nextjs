"use client";
import Image from "next/image";
import BackgroundImage from "../../public/assets/onboarding-page.jpg";
import { BackgroundLines } from "@/components/ui/background-lines";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const loginSchema = yup
  .object({
    email: yup.string().email("Invalid email!").required("Email is required!"),
    password: yup
      .string()
      .required("Password is required!")
      .min(6, "Password must be at least 6 characters")
      .matches(/[a-z]/, "Password must contain at least one lowercase letter")
      .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
      .matches(/[0-9]/, "Password must contain at least one numeric digit")
      .matches(
        /[!@#$%^&*(),.?":{}|<>]/,
        "Password must contain at least one special character"
      ),
  })
  .required();

const registrationSchema = yup
  .object({
    name: yup
      .string()
      .required("Name is required!")
      .min(4, "Name must be at least 4 characters"),
    email: yup.string().email("Invalid email!").required("Email is required!"),
    password: yup
      .string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required")
      .matches(/[a-z]/, "Password must contain at least one lowercase letter")
      .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
      .matches(/[0-9]/, "Password must contain at least one numeric digit")
      .matches(
        /[!@#$%^&*(),.?":{}|<>]/,
        "Password must contain at least one special character"
      ),
  })
  .required();

export default function Home() {
  const [screen, setScreen] = useState<"Home" | "Login" | "Registration">(
    "Home"
  );
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<{
    name?: string;
    email: string;
    password: string;
  }>({
    resolver: yupResolver(screen === "Login"? loginSchema: registrationSchema),
  });
  
  const handleLogin = ()=> {
    console.log("login button clicked!");
    
  }
  const handleRegister = ()=> {
    console.log("registration button clicked!");
    
  }
  return (
    <div className="flex h-screen">
      <section className="w-full lg:w-1/2 flex items-center justify-center">
        <BackgroundLines className="flex items-center justify-center w-full h-full flex-col px-4">
          {screen === "Home" && (
            <>
              <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
                Explore new World of Blogging!
              </h2>
              <p className="max-w-xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center">
                A full-stack blogging application built with Next.js, featuring
                seamless content management, user authentication, and dynamic
                rendering.
              </p>
              <div className="mt-4 z-50">
                <Button onClick={() => setScreen("Login")}>Get Started!</Button>
              </div>
            </>
          )}
          {screen === "Login" && (
            <>
              <div className="z-50 w-full max-w-md mx-auto p-6 bg-white dark:bg-neutral-900 shadow-lg rounded-xl">
                <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white">
                  Login
                </h3>
                <form className="mt-4 flex flex-col space-y-4" onSubmit={handleSubmit(handleLogin)}>
                  <div className="flex flex-col space-y-2">
                    <Label htmlFor="email" className="text-lg font-semibold">
                      Email
                    </Label>
                    <Input
                      type="email"
                      id="email"
                      placeholder="Enter your email"
                      className="w-full p-4 text-lg border rounded-sm dark:bg-neutral-800 dark:text-white"
                      defaultValue=""
                      {...register("email")}
                    />
                    {errors?.email?.message && (
                      <span className="text-sm text-red-500">
                        {errors?.email?.message}
                      </span>
                    )}
                  </div>

                  <div className="flex flex-col space-y-2">
                    <Label htmlFor="password" className="text-lg font-semibold">
                      Password
                    </Label>
                    <Input
                      type="password"
                      id="password"
                      placeholder="Enter your password"
                      className="w-full p-4 text-lg border rounded-sm dark:bg-neutral-800 dark:text-white"
                      defaultValue=""
                      {...register("password")}
                    />
                    {errors?.password?.message && (
                      <span className="text-sm text-red-500">
                        {errors?.password?.message}
                      </span>
                    )}
                  </div>

                  <Button className="w-full mt-4 p-4 text-lg" type="submit">Login</Button>
                </form>

                <p className="text-center text-sm text-gray-600 dark:text-gray-400 mt-4">
                  Don't have an account?{" "}
                  <button
                    onClick={() => setScreen("Registration")}
                    className="text-blue-500 hover:underline"
                  >
                    Register
                  </button>
                </p>
              </div>
            </>
          )}
          {screen === "Registration" && (
            <>
              <div className="z-50 w-full max-w-md mx-auto p-6 bg-white dark:bg-neutral-900 shadow-lg rounded-xl">
                <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white">
                  Registration
                </h3>
                <form className="mt-4 flex flex-col space-y-4" onSubmit={handleSubmit(handleRegister)}>
                  <div className="flex flex-col space-y-2">
                    <Label htmlFor="email" className="text-lg font-semibold">
                      Name
                    </Label>
                    <Input
                      type="text"
                      id="name"
                      placeholder="Enter your name"
                      className="w-full p-4 text-lg border rounded-sm dark:bg-neutral-800 dark:text-white"
                      {...register("name")}
                      defaultValue=""
                    />
                    {errors?.name?.message && (
                      <span className="text-sm text-red-500">
                        {errors?.name?.message}
                      </span>
                    )}
                  </div>
                  <div className="flex flex-col space-y-2">
                    <Label htmlFor="email" className="text-lg font-semibold">
                      Email
                    </Label>
                    <Input
                      type="email"
                      id="email"
                      placeholder="Enter your email"
                      className="w-full p-4 text-lg border rounded-sm dark:bg-neutral-800 dark:text-white"
                      defaultValue=""
                      {...register("email")}
                    />
                    {errors?.email?.message && (
                      <span className="text-sm text-red-500">
                        {errors?.email?.message}
                      </span>
                    )}
                  </div>

                  <div className="flex flex-col space-y-2">
                    <Label htmlFor="password" className="text-lg font-semibold">
                      Password
                    </Label>
                    <Input
                      type="password"
                      id="password"
                      placeholder="Enter your password"
                      className="w-full p-4 text-lg border rounded-sm dark:bg-neutral-800 dark:text-white"
                      defaultValue=""
                      {...register("password")}
                    />
                    {errors?.password?.message && (
                      <span className="text-sm text-red-500">
                        {errors?.password?.message}
                      </span>
                    )}
                  </div>

                  <Button className="w-full mt-4 p-4 text-lg" type="submit">Register</Button>
                </form>

                <p className="text-center text-sm text-gray-600 dark:text-gray-400 mt-4">
                  Already have an account?{" "}
                  <button
                    onClick={() => setScreen("Login")}
                    className="text-blue-500 hover:underline"
                  >
                    Login
                  </button>
                </p>
              </div>
            </>
          )}
        </BackgroundLines>
      </section>
      <section className="hidden lg:flex w-1/2 h-full">
        <Image
          src={BackgroundImage}
          alt="Onboarding image"
          className="object-cover w-full h-full"
        />
      </section>
    </div>
  );
}
