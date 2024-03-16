'use client';

import Image from "next/image";
import Settings from "./components/settings";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";


const Signup = () => {
  const router = useRouter();
  const handleButtonClickSignup = () => {
    // Redirect to the settings page
    router.push('/components/settings');
  };

  return (
    <div className="flex w-screen h-screen">
      <div className="bg-[rgb(49,49,49)] justify-self-start w-1/4">
        <div className="flex flex-col justify-center items-center h-screen">
          <img src="signUpImage.webp" alt="SIGNUP" className="w-4/6" />{" "}
          <h1 className="text-3xl font-bold">ID Nexus: Own Your</h1>
          <h1 className="text-3xl font-bold">Identity</h1>
          <h3>Control your personal data securely and privately</h3>
        </div>
      </div>
      <div className="bg-[rgb(22,22,22)]justify-self-end w-3/4">
        <div className="flex flex-col gap-0 h-screen justify-center items-center">
          <h2 className="text-4xl self-start ml-44">Sign Up</h2>
          <h3>Full Name</h3>
          <input
            type="text"
            placeholder="Full Name"
            required
            className="max-w-96"
          />
          <h3>Address</h3>
          <input
            type="text"
            placeholder="Address"
            required
            className="max-w-96"
          />
          <h3>Phone Number</h3>
          <input
            type="text"
            placeholder="Phone Number"
            required
            className="max-w-96"
          />
          <h3>Aadhar Number</h3>
          <input
            type="text"
            placeholder="Aadhar Number"
            required
            className="max-w-96"
          />
          <h3>Pan Number</h3>
          <input
            type="text"
            placeholder="Pan Number"
            required
            className="max-w-96"
          />
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
          <h3>Confirm Password</h3>
          <input
            type="password"
            placeholder="Confirm Password"
            required
            className="max-w-96"
          />
          <Button onClick={handleButtonClickSignup}>Sign Up</Button>
        </div>
      </div>
    </div>
  );
};

export default Signup;