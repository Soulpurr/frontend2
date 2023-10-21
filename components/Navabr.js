"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import LoadingBar from "react-top-loading-bar";

function Navbar() {
  const [progress, setProgress] = useState(0)
  const [query, setquery] = useState(null);

  const router = useRouter();

  return (
    <div className="flex justify-between items-center  px-6 py-4">
      <LoadingBar
        color='#f11946'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <div className="relative flex items-center ">
        <input
          type="text"
          placeholder="Search Here"
          className="rounded-2xl pl-14 pr-4 py-2 outline-none w-72 bg-[#211A75]"
          onChange={(e) => {
            setquery(e.target.value);
          }}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-gray-500 absolute left-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
          viewBox="0 0 28 28"
          fill="currentColor"
          onClick={() => {
            setProgress(40)
            router.push(`/${query}`);
            setProgress(100)
          }}
        >
          <g clipPath="url(#clip0)">
            <path
              d="M15.7544 24.4961C8.99144 24.4961 3.50889 19.0136 3.50889 12.2505C3.50889 5.48744 8.99138 0.00500488 15.7544 0.00500488C22.5175 0.00500488 28 5.4875 28 12.2506C28 19.0136 22.5175 24.4961 15.7544 24.4961ZM15.7544 3.50375C10.9237 3.50375 7.00763 7.41981 7.00763 12.2506C7.00763 17.0813 10.9237 20.9974 15.7544 20.9974C20.5852 20.9974 24.5013 17.0813 24.5013 12.2506C24.5013 7.41981 20.5851 3.50375 15.7544 3.50375Z"
              fill="#7879F1"
            />
            <path
              d="M1.75951 27.9948C1.29451 27.9975 0.847592 27.815 0.51747 27.4875C-0.168521 26.8071 -0.173043 25.6995 0.50734 25.0135C0.510717 25.0102 0.514093 25.0068 0.51747 25.0034L7.09507 18.4258C7.80518 17.7398 8.93694 17.7594 9.62293 18.4695C10.3089 19.1797 10.2893 20.3114 9.57922 20.9974L3.00156 27.4875C2.67143 27.815 2.22452 27.9975 1.75951 27.9948Z"
              fill="#7879F1"
            />
          </g>
          <defs>
            <clipPath id="clip0">
              <rect width="28" height="28" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
      <Link href={"/"} className="">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
          />
        </svg>
      </Link>
    </div>
  );
}

export default Navbar;
