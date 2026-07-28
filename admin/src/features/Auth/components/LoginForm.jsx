import React, { useState } from "react";
import { motion } from "framer-motion";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRemember, setIsRemember] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      console.log({
        email,
        password,
        isRemember,
      });
      setIsLoading(false);
    }, 1500);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="card shadow-lg rounded-3xl w-full max-w-md p-8 fade-in relative z-10"
    >
      <div className="text-center mb-8">
        <motion.h2
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.4 }}
          className="text-4xl font-bold text-theme"
        >
          Welcome Back
        </motion.h2>

        <p className="text-secondary mt-2">
          Sign in to continue managing your restaurant.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block text-primary font-medium mb-2">
            Email Address
          </label>

          <input
            type="email"
            className="input"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="block text-primary font-medium mb-2">
            Password
          </label>

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              className="input pr-12"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <button
              type="button"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-secondary hover:text-primary"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
        </div>

        <div className="flex items-center justify-between text-sm">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={isRemember}
              onChange={(e) => setIsRemember(e.target.checked)}
              className="w-4 h-4 accent-primary"
            />

            <span className="text-secondary">
              Remember me
            </span>
          </label>

          <button
            type="button"
            className="text-theme hover:underline font-medium"
          >
            Forgot Password?
          </button>
        </div>

        <motion.button
          type="submit"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="btn-primary w-full font-semibold relative"
          disabled={isLoading}
        >
          {isLoading ? (
            <span className="flex items-center justify-center gap-2">
              <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Signing in...
            </span>
          ) : (
            "Sign In"
          )}
        </motion.button>
      </form>

      <div className="mt-6 text-center">
        <p className="text-secondary text-sm">
          Don't have an account?{" "}
          <button
            type="button"
            className="text-theme font-semibold hover:underline"
          >
            Create one
          </button>
        </p>
      </div>
    </motion.div>
  );
};

export default LoginForm;