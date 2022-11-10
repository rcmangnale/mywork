import React from "react";

export default function Began() {
  return (
    <>
      <div className="py-12 mx-auto ">
        <div className="h-[385px] py-12 bg-white lg:w-[1125px]">
          <div className="grid grid-cols-2">
            <div className="grid grid-rows-2">
              <div className="text-3xl font-extrabold w-[550px] text-gray-800">
                <p className="pr-12">Let’s Begin Here: Approaching</p>
                <p> Craft in Fiction Through Character</p>
              </div>
              <div className="flex justify-start gap-4 px-5 py-6 ">
                <button className="flex items-center content-center justify-start px-2 py-1 text-sm font-bold bg-white border align-center rounded-3xl">
                <img
                    className="block w-6 h-6"
                    src="https://png.pngtree.com/png-clipart/20200224/original/pngtree-avatar-icon-profile-icon-member-login-vector-isolated-png-image_5247852.jpg"
                    alt="icon"
                  />
                  <p className="">
                   David William Hill{" "}
                   </p>
                </button>
                <button className="w-24 px-2 text-sm font-bold bg-pink-100 border rounded-3xl">
                  Fiction
                </button>

                <button className="p-2 text-sm font-bold bg-gray-400 border w-28 rounded-3xl ">
                  Advanced
                </button>
              </div>
            </div>
            <div>gfg</div>
          </div>
        </div>
      </div>
    </>
  );
}
