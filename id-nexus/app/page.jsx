"use client";

import Image from "next/image";
import Settings from "./components/settings";
import { useRouter } from "next/navigation";
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
} from "@/components/ui/alert-dialog"

const Home = () => {
  const router = useRouter();
  const handleButtonClickSignup = () => {
    // Redirect to the settings page
    router.push("/components/signup");
  };
  const handleButtonClickLogin = () => {
    // Redirect to the settings page
    router.push("/components/dashboard");
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
          <Button onClick={handleButtonClickLogin} className="min-w-96" variant="secondary">Login</Button>
          <div className="sub-buttons">
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button className="min-w-40 me-6 bg-[rgba(27,26,26,0.54)]">Forget</Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle className="text-black">Are you absolutely sure?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This action cannot be undone. This will permanently delete your account and remove your data from our servers.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction>Continue</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
            <Button onClick={handleButtonClickSignup} className="min-w-40 ms-6 bg-[rgba(27,26,26,0.54)]">Sign Up</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;