"use client";

import { useRouter } from "next/navigation";
import React, { useState, ChangeEvent } from "react";

const Registration = () => {
  const router = useRouter();

  const defaultUserInfo = {
    username: "",
    email: "",
    password: "",
  };

  const [userInfo, setUserInfo] = useState(defaultUserInfo);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const name = e.target.name;

    setUserInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/userInfo", {
        method: "POST",
        body: JSON.stringify({ userInfo }),
        headers: {
          "content-type": "application/json",
        },
      });

      if (!res.ok) {
        throw new Error("Failed to add User Data.");
      }

      setUserInfo(defaultUserInfo);
      router.push("/pages/users");
      router.refresh();
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register now!</h1>
            <p className="py-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
              quasi dolor placeat reiciendis illo! Esse nemo aspernatur
              inventore! Illum quaerat autem molestiae soluta numquam ex,
              explicabo assumenda incidunt rem quas?
            </p>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body" onSubmit={handleSubmit}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Username</span>
                </label>
                <input
                  type="text"
                  name="username"
                  placeholder="username"
                  className="input input-bordered"
                  value={userInfo.username}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  value={userInfo.email}
                  onChange={handleChange}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  value={userInfo.password}
                  onChange={handleChange}
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Already Have an account?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Registration;
