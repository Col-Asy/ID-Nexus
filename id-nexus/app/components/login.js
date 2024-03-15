import Image from "next/image";

export default function Login() {
    return(
    <div>
        <h1>My Next.js Page</h1>
        {/* Other components */}
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={handleEmailChange}
          />
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={handlePasswordChange}
          />
          <button type="submit">Sign Up</button>
        </form>
      </div>
    )
}