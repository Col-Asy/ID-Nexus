// Ensure you have ethers.js installed: npm install ethers

"use client";

import { useState } from "react";
import { ethers } from "ethers"; // Import ethers.js
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
} from "@/components/ui/alert-dialog";

// Initialize ethers provider and contract
const provider = new ethers.providers.JsonRpcProvider();
const contractAddress = "0xd9145CCE52D386f254917e481eB44e9943F39138";
const contract = new ethers.Contract(contractAddress, abi, provider);

const Home = () => {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleButtonClickSignup = () => {
    // Redirect to the sign-up page
    router.push("/components/signup");
  };

  const handleButtonClickLogin = async () => {
    try {
      // Call your smart contract to verify user credentials
      const isAuthenticated = await contract.authenticate(username, password);
      if (isAuthenticated) {
        // Redirect to the dashboard page
        router.push("/components/dashboard");
      } else {
        // Display an error message for invalid credentials
        alert("Invalid username or password");
      }
    } catch (error) {
      console.error("Error:", error);
      // Handle error
    }
  };

  const handleButtonClickForget = () => {
    // Show a confirmation dialog
    if (confirm("Are you sure you want to forget your password?")) {
      // Implement password reset logic
      // For example, navigate to a password reset page
      router.push("/components/reset-password");
    }
  };

  return (
    <div className="flex w-screen h-screen">
      {/* Your UI code */}
    </div>
  );
};

export default Home;
