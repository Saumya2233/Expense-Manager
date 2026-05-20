"use client";

import Image from "next/image";
import { CiWallet } from "react-icons/ci";
import { FaRegEye } from "react-icons/fa";
import { MdOutlineMail, MdLockOutline } from "react-icons/md";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { images } from "@/constant/images";
import { toast } from "react-toastify";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (email === "abc@gmail.com" && password === "123456") {
      router.push(`/dashboard?name=${email}`);
    } else {
      toast.error("Invalid email or password");
    }
  };

  return (
    <div className="auth-page">
      {/* LEFT IMAGE SECTION */}
      <div className="auth-image-panel">
        <Image
          src={images.login}
          alt="money"
          fill
          priority
          className="auth-image"
        />
      </div>

      {/* RIGHT LOGIN SECTION */}
      <div className="auth-content">
        <div className="">
          {/* LOGO */}
          <div className="auth-logo">
            <CiWallet className="auth-logo-icon" />

            <h1 className="auth-logo-title">
              Spend
              <span className="auth-accent">Wise</span>
            </h1>
          </div>

          {/* HEADING */}
          <div className="auth-heading">
            <h4 className="auth-heading-title">
              Welcome <span className="auth-accent">Back</span>
            </h4>

            <p className="auth-heading-text">
              Login to manage your expenses and track your financial goals.
            </p>
          </div>

          {/* FORM */}
          <form className="auth-form" onSubmit={handleLogin} autoComplete="off">
            {/* EMAIL */}
            <div>
              <label htmlFor="email" className="auth-label">
                Email
              </label>

              <div className="auth-field">
                <MdOutlineMail className="auth-field-icon" />

                <input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  className="auth-input"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete="off"
                />
              </div>
            </div>

            {/* PASSWORD */}
            <div>
              <label htmlFor="password" className="auth-label">
                Password
              </label>

              <div className="auth-field">
                <MdLockOutline className="auth-field-icon" />

                <input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  className="auth-password-input"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="off"
                />

                <FaRegEye className="auth-eye-icon" />
              </div>
            </div>

            {/* OPTIONS */}
            <div className="auth-options">
              <div className="auth-row">
                <input type="checkbox" className="auth-checkbox" />

                <p className="auth-muted-text">Remember me</p>
              </div>

              <button type="button" className="auth-text-button">
                Forgot password?
              </button>
            </div>

            {/* LOGIN BUTTON */}
            <button type="submit" className="auth-submit">
              Login
            </button>
          </form>

          {/* REGISTER */}
          <p className="auth-footer">
            Don&apos;t have an account?{" "}
            <span className="auth-link">Register</span>
          </p>
        </div>
      </div>
    </div>
  );
}
