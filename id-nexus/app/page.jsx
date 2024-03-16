"use client";

import Image from "next/image";
import Settings from "./components/settings";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

const Home = () => {
  const router = useRouter();
  const handleButtonClickSignin = () => {
    // Redirect to the settings page
    router.push("/components/signup");
  };
  const handleButtonClickLogin = () => {
    // Redirect to the settings page
    router.push("/components/signup");
  };

  return (
    <div className="flex w-screen h-screen">
      <div className="bg-[rgb(49,49,49)] justify-self-start w-1/2">
        <div className="flex flex-col justify-center items-center h-screen">
          <img src="login.png" alt="LOGIN" className="w-4/6" />{" "}
          <h1 className="text-3xl font-bold">ID Nexus: Own Your</h1>
          <h1 className="text-3xl font-bold">Identity</h1>
          <h3>Control your personal data securely and privately</h3>
        </div>
      </div>
      <div className="bg-[rgb(22,22,22)]justify-self-end w-1/2">
        <div className="flex flex-col gap-4 h-screen justify-center items-center">
          <h2 className="text-4xl self-start ml-44">Log In</h2>
          <h3>Username</h3>
          <input
            type="text"
            placeholder="Username"
            required
            className="max-w-96"
          />
          <h3>Password</h3>
          <input
            type="password"
            placeholder="Password"
            required
            className="max-w-96"
          />
          <Button onClick={handleButtonClickLogin}>Login</Button>
        </div>
      </div>
    </div>
  );
};

export default Home;