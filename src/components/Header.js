import React from "react";

export default function Header() {
  return (
    <>
      <div className="py-12 mx-auto ">
        <div className="h-[350px] py-12 bg-white lg:w-[1125px]">
          <div className="grid grid-cols-2 h-[230px]">
            <div className="grid h-40 grid-rows-2">
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
                  <p>David William Hill </p>
                </button>
                <button className="w-24 px-2 text-sm font-bold bg-pink-100 border rounded-3xl">
                  Fiction
                </button>

                <button className="px-2 text-sm font-bold bg-gray-400 border w-28 rounded-3xl">
                  Advanced
                </button>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="grid w-64 grid-rows-2 gap-6 h-60">
                <div className="grid grid-rows-2 h-36">
                  <div className="grid grid-cols-2 font-bold border divide-x-2 rounded-md ">
                    <div className="py-5">
                      $200
                      <p className="pb-5 font-normal text-gray-700">Member</p>
                    </div>
                    <div className="py-5">
                      $259
                      <p className="font-normal text-gray-700">Non-Member</p>
                    </div>
                  </div>
                  <div className="flex items-center content-center justify-center h-10 font-semibold text-white bg-red-500 rounded">
                    Sign Up
                  </div>
                </div>
                <div>
                  <button className="px-4 py-2 font-bold border border-gray-600 rounded-md">
                    Apply for Reduced-Rate Spot
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 pb-10 divide-x-2 w-[1050px]">
            <div>
              <div className="flex justify-center">
                <img
                  className="block w-6 h-6 bg-red-600"
                  src="https://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/calendar-icon.png"
                  alt="Your Company"
                />
                <div className="grid grid-rows-2 pl-5">
                  <p className="font-bold">
                    Jan 05 - Feb 15{" "}
                    <span className="font-normal text-red-500">
                      {" "}
                      (5 Wednesdays)
                    </span>
                  </p>
                  <p className="pr-16">10:00am - 4:00pm (PST)</p>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
                <img
                  className="block w-12 h-6 bg-red-600"
                  src="https://img.freepik.com/premium-vector/location-icon-simple-symbol-red-pin-sign_399998-369.jpg?w=2000"
                  alt="Your Company"
                />
                <div className="grid grid-rows-2 pl-2">
                  <p className="pr-32">
                    2042 balboa St.,
                    
                  </p>
                  <p className="pr-16">Sans Francisco, CA 94121</p>
                </div>
              </div>
              <div className="flex justify-center">
                <img
                  className="block w-6 h-6 bg-red-600"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNZXBWWjbJBjbmjdjPOgY_JoMal_EepGH_4DzTkP4&s"
                  alt="Your Company"
                />
                <div className="grid grid-rows-2 pl-5">
                  <p className="pr-16 font-bold">
                  Registration deadline :
                    
                  </p>
                  <p className="pr-16"> May 07 at 10:30am (PST)</p>
                </div>
              </div>
          </div>
        </div>
      </div>
    </>
  );
}
