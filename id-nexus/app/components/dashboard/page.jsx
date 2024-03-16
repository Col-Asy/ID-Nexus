"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";


const Dashboard = () => {
    return (
        <div className="flex w-screen h-screen">
          <div className="bg-[rgb(22,22,22)]justify-self-end w-2/3">
            <div className="flex flex-col gap-12 h-screen justify-center items-center">
              <h2 className="text-4xl self-start ml-44">Details</h2>
              <div className="flex">
                <h3>Username :</h3>
                <p className="ps-2">Username</p>
              </div>
              <div className="flex">
                <h3>Number :</h3>
                <p className="ps-2">Number</p>
              </div>
              <div className="flex">
                <h3>Email :</h3>
                <p className="ps-2">Email</p>
              </div>
              <div className="flex">
                <h3>Address :</h3>
                <p className="ps-2">Address</p>
              </div>
              <div className="flex">
                <h3>Aadhar :</h3>
                <p className="ps-2">Aadhar</p>
              </div>
              <div className="flex">
                <h3>Pan :</h3>
                <p className="ps-2">Pan</p>
              </div>
              <Button className="min-w-96" variant="secondary">Change</Button>
            </div>
          </div>
          <div className="bg-[rgb(49,49,49)] justify-self-start w-1/3">
            <div className="flex flex-col justify-center items-center h-screen">
              <img src="../dashboard.png" alt="USER" className="w-4/6" />{" "}
              <h1 className="text-3xl font-bold">ID Nexus: Own Your</h1>
              <h1 className="text-3xl font-bold">Identity</h1>
              <h3>Control your personal data securely and privately</h3>
            </div>
          </div>
        </div>
    );
};

export default Dashboard;