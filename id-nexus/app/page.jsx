'use client';

import Image from "next/image";
import Settings from "./components/settings";
import { useRouter } from 'next/navigation';
import { Button } from "@/components/ui/button"


const Home = () => {
  const router = useRouter();
  const handleButtonClickSignin = () => {
    // Redirect to the settings page
    router.push('/components/signup');
  };
  const handleButtonClickLogin = () => {
    // Redirect to the settings page
    router.push('/components/signup');
  };

  return (
    <div className="content">      
      <div className="card flex p-6 relative">
        <div className="top-right-title absolute w-full top-0 right-0">
            <h2>ID</h2>
            <h3>self-sovereign</h3>
        </div>

        <div className="img-box flex flex-col items-center relative w-1/2">
          <img src="login.png" alt="LOGIN" className="w-4/6" />
          <h1>ID Nexus: Own Your Identity</h1>
          <h3>Control your personal data securely and privately</h3>
        </div>
        
        <div className="form-content relative w-1/2">
          <div className="form flex flex-col justify-center align-middle items-center h-full w-full">
            <h2>Log In</h2>
            <form className="w-full">
              <h3>Username</h3>
              <input type="text" placeholder="Username" required />
              <h3>Password</h3>
              <input type="password" placeholder="Password" required />
              <Button onClick={handleButtonClickLogin}>Login</Button>
            </form>
            <div className="bottom-button">
              <div className="forgot_password">
                <button variant="secondary">Forget Password</button>
              </div>
              <div className="signin-button">
                <Button variant="secondary" onClick={handleButtonClickSignin}>Sign Up</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;