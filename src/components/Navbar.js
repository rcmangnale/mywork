
import { Disclosure } from "@headlessui/react";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { Bars3Icon,XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
  { name: "Classes", href: "#", current: true },
  { name: "Programs & Events", href: "#", current: false },
  { name: "Blogs", href: "#", current: false },
  { name: "About", href: "#", current: false },
  { name: "Get Involved", href: "#", current: false },
];



function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  return (
    <Disclosure as="header" className="mx-20 bg-white shadow">
      {({ open }) => (
        <>
          <div className="px-2 sm:px-4 lg:px-8">
            <div className="relative flex justify-between h-16">
              <div className="relative z-10 flex px-2 lg:px-0">
                <div className="flex items-center flex-shrink-0">
                  <img
                    className="block w-24 pt-8 h-36"
                    src="https://www.xing.com/imagecache/public/scaled_original_image/eyJ1dWlkIjoiM2M2OTg5OGMtOWI0OS00OGExLTg3ZDQtMGZmNjNlOTA2NWFmIiwiYXBwX2NvbnRleHQiOiJlbnRpdHktcGFnZXMiLCJtYXhfd2lkdGgiOjMyMCwibWF4X2hlaWdodCI6MzIwfQ?signature=ab93afae73984695bf81f478b9821375bd4c37aa2ad0c70d7f257cc182b825bc"
                    alt="Your Company"
                  />
                </div>
              </div>
              <div className="grid grid-cols-3 pt-8 w-96">
                <div className="flex w-36 sm:max-w-xs">
                  <label htmlFor="search" className="sr-only">
                    Search
                  </label>
                  <div className="relative ">
                    <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none">
                      <MagnifyingGlassIcon
                        className="w-4 h-4 text-gray-400"
                        aria-hidden="true"
                      />
                    </div>
                    <input
                      id="search"
                      name="search"
                      className="w-24 py-2 pl-6 text-sm placeholder-gray-500 border-none focus:text-gray-900 focus:placeholder-gray-400 sm:text-sm"
                      placeholder="Search"
                      type="search"
                    />
                  </div>
                </div>

                
                <div className="flex hidden w-24 lg:flex lg:items-center">
                  <img
                    className="block w-8 h-8"
                    src="https://png.pngtree.com/png-clipart/20200224/original/pngtree-avatar-icon-profile-icon-member-login-vector-isolated-png-image_5247852.jpg"
                    alt="Your Company"
                  />
                  {/* <BellIcon className="w-6 h-6" aria-hidden="true" /> */}
                  Sign in
                </div>
                <div className="flex hidden w-20 lg:flex lg:items-center">
                  <p>
                    <svg
                      width="16"
                      height="20"
                      viewBox="0 0 16 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14 4H12C12 1.79 10.21 0 8 0C5.79 0 4 1.79 4 4H2C0.9 4 0 4.9 0 6V18C0 19.1 0.9 20 2 20H14C15.1 20 16 19.1 16 18V6C16 4.9 15.1 4 14 4ZM6 8C6 8.55 5.55 9 5 9C4.45 9 4 8.55 4 8V6H6V8ZM8 2C9.1 2 10 2.9 10 4H6C6 2.9 6.9 2 8 2ZM12 8C12 8.55 11.55 9 11 9C10.45 9 10 8.55 10 8V6H12V8Z"
                        fill="black"
                      />
                    </svg>
                  </p>
                  (0)
                </div>
                <div className="relative z-10 flex items-center lg:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Open menu</span>
                    {open ? (
                      <XMarkIcon className="block w-6 h-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block w-6 h-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
              </div>
            </div>
            <nav
              className="hidden lg:flex lg:space-x-8 lg:py-4 lg:pl-[700px]"
              aria-label="Global"
            >
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-100 text-gray-900 font-semibold"
                      : "text-gray-900 hover:bg-gray-50 hover:text-gray-900 ",
                    "rounded-md py-2 px-3 inline-flex items-center text-sm font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </a>
              ))}
              <button className="p-2 px-4 text-white bg-red-500 rounded-3xl">Find a Class</button>
            </nav>
          </div>

          <Disclosure.Panel as="nav" className="lg:hidden" aria-label="Global">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-100 text-gray-900"
                      : "text-gray-900 hover:bg-gray-50 hover:text-gray-900",
                    "block rounded-md py-2 px-3 text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
