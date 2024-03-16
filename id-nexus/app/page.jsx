// pages/index.jsx

// use client directive is added to make the component a Client Component
"use client";

import Image from "next/image";
import { useState } from "react";
import dynamic from "next/dynamic"; // Import dynamic from next/dynamic
import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

// Update the contract address here
const contractAddress = "0xd9145CCE52D386f254917e481eB44e9943F39138";

// Dynamic import of useRouter to ensure it's only used on the client-side
const useRouter = dynamic(() => import("next/router"));

export default function Home() {
  const router = useRouter(); // using useRouter as suggested
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleButtonClickSignup = () => {
    // Redirect to the signup page
    router.push("/components/signup");
  };

  const handleButtonClickLogin = async () => {
    // Connect to MetaMask or any other wallet here

    // Assuming some authentication logic here
    if (username && password) {
      try {
        // Perform authentication logic here (e.g., calling a smart contract)
        // Once authenticated, redirect to dashboard
        router.push("/components/dashboard");
      } catch (error) {
        console.error("Authentication error:", error);
        // Handle authentication error
      }
    } else {
      // Handle empty username or password
      console.error("Username or password is empty");
    }
  };

  return (
    <div className="flex w-screen h-screen">
      <div className="bg-[rgb(49,49,49)] justify-self-start w-1/2">
        <div className="flex flex-col justify-center items-center h-screen">
          <Image src="/login.png" alt="LOGIN" width={300} height={300} />
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
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <h3>Password</h3>
          <input
            type="password"
            placeholder="Password"
            required
            className="max-w-96"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            onClick={handleButtonClickLogin}
            className="min-w-96"
            variant="secondary"
          >
            Login
          </Button>
          <div className="sub-buttons">
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button className="min-w-40 me-6 bg-[rgba(27,26,26,0.54)]">
                  Forget
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle className="text-black">
                    Are you absolutely sure?
                  </AlertDialogTitle>
                  <AlertDialogDescription>
                    This action cannot be undone. This will permanently delete
                    your account and remove your data from our servers.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction>Continue</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
            <Button
              onClick={handleButtonClickSignup}
              className="min-w-40 ms-6 bg-[rgba(27,26,26,0.54)]"
            >
              Sign Up
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
