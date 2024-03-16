'use client';

import Image from "next/image";
import { useRouter } from 'next/navigation';


const Signup = () => {
  const router = useRouter();
  const handleButtonClickSignin = () => {
    // Redirect to the settings page
    router.push('/components/settings');
  };

  return (
    <div className="content">
      <div>
        <h2>ID</h2>
        <h3>self-sovereign</h3>
      </div>
      <div>
        <img src="login.png" alt="LOGIN" />
        <h1>ID Nexus: Own Your Identity</h1>
        <h3>Control your personal data securely and privately</h3>
      </div>
    
      <div className="form">
        <h2>Login</h2>
        <form>
          <input type="text" placeholder="Username" required />
          <h3>Password</h3>
          <input type="password" placeholder="Password" required />
          <input type="submit" value="Login" />
        </form>
        <div className="bottom-button">
          <div className="forgot_password">
            <button>Forget Password</button>
          </div>
          <div className="signin-button">
            <button onClick={handleButtonClickSignin}>Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;