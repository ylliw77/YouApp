"use client";

import { NextResponse } from "next/server";
import createUser from "../api/register/route";
import createUserProfile from "../api/createProfile/route";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
export default function RegisterPage(e) {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const {name, value} = e.target
    setUser({...user, [name] : value} )
  }
  const navigate = useRouter()

  const handleClick = () => {
    navigate.push('/profile')
  }

  return (
    <>
      <div className="flex h-screen flex-col justify-center align-middle px-6 py-12 bg-gradient-to-br from-[#1C3C41] to-[#0C1A20]">
        <h2 className="text-3xl font-medium tracking-tight text-white pl-3">
          Register
        </h2>

        <div className="mt-3">
          <form className="space-y-3" action={createUser(user)}>
            <div>
              <div className="mt-2 bg-[#253D43] rounded-lg">
                <input
                 onChange={handleChange}
                  name="email"
                  type="email"
                  placeholder="Enter Email"
                  required=""
                  className="block w-full rounded-md border-0 py-2 text-white shadow-sm bg-[#253D43] placeholder:text-xs px-2"
                />
              </div>
            </div>
            <div>
              <div className="mt-2 bg-[#253D43] rounded-lg">
                <input
                
                  onChange={handleChange}
                  name="username"
                  type="text"
                  placeholder="Enter Username"
                  required=""
                  className="block w-full rounded-md border-0 py-2 text-white shadow-sm bg-[#253D43] placeholder:text-xs px-2"
                />
              </div>
            </div>

            <div>
              <div className="mt-2 rounded-lg bg-[#253D43]">
                <input
                  id="password"
                  onChange={handleChange}
                  name="password"
                  type="password"
                  placeholder="Enter Password"
                  required=""
                  className="block w-full rounded-md border-0 py-2 text-white shadow-sm bg-[#253D43] placeholder:text-xs px-2"
                />
                <span className="absolute inset-y-0 end-0 grid place-content-center px-7">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4 text-[#FDE0BB]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                </span>
              </div>
            </div>
            <div>
              <div className="mt-2 rounded-lg bg-[#253D43]">
                <input
                  id="password"
                
                  name="password"
                  type="password"
                  placeholder="Enter Password"
                  required=""
                  className="block w-full rounded-md border-0 py-2 text-white shadow-sm bg-[#253D43] placeholder:text-xs px-2"
                />
                <span className="absolute top-[450px] end-0 grid place-content-center px-7">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4 text-[#FDE0BB]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                </span>
              </div>
            </div>
            <div>
              <button
                type="submit"
                onClick={handleClick}
                className="flex w-full justify-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 px-3 py-1.5 text-md font-semibold leading-6 text-white shadow-[0_15px_50px_rgba(8,_112,_184,_0.7)]"
              >
                Register
              </button>
            </div>
          </form>
          <p className="mt-10 text-center text-xs text-white">
            Have an account?
            <a href="/" className="font-medium underline text-[#FDE0BB]">
              Login here
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
