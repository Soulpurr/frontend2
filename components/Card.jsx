import React from "react";
import { ThumbUpIcon } from "@heroicons/react/solid";
import Image from "next/image";
import Link from "next/link";
function renderHTMLAsText(html) {
  return { __html: html };
}
function Card({ result }) {
  return (
    <div className="group p-2 cursor-pointer transition-all duration-200 ease-in transform sm:hover:scale-105 hover:z-50  ">
      <div className="max-w-sm  overflow-hidden shadow-lg mx-2 my-4  bg-[#17153f] rounded-lg border border-solid sm:h-[14rem]">
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">
            {result.title}
          </div>
          <p className="text-gray-700">
            Created At:{result.created_at}
          </p>
          <p className="text-gray-700">
           Updated At:{result.updated_at} 
          </p>
        </div>
        <div className="p-6 pt-0 sm:absolute bottom-2">
          <Link
          href={`/Info/${result.objectID}`}
            class="select-none rounded-lg bg-pink-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
            data-ripple-light="true"
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Card;
