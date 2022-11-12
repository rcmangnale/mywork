import React from "react";

export default function Remote() {
  return (
    <div>
      <div className="mx-auto lg:w-[1050px]">
        <p className="py-5 pt-10 text-lg font-bold text-left">
          About the Remote Classes
        </p>
        <p className="text-left">
          You will be able to participate in live class meetings via Zoom
          videoconference. To attend classes, you'll need a phone, tablet or
          computer and access to the internet. You can participate in the class
          from wherever you'd like, whether on your living room couch or in your
          office. Before your class meets, you'll receive an email from The
          Proprietary with more information about Zoom and your remote class. If
          you have any questions about remote learning, please don't hesitate to
          reach out to us at{" "}
          <span className="text-sky-600">hello@wisdmlabs.com.</span>
        </p>
        <div className="flex justify-start gap-16 py-6 text-left text-red-600">
          <p className="grid grid-cols-2">
            Learn About Our Classes
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-4 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </span>
          </p>
          <p className="grid grid-cols-2">
            Questions? See FAQ
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-4 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </p>
        </div>
        <hr className="py-5 "></hr>
        <div>
          <p className="py-5 pt-10 text-lg font-bold text-left">
            Cancelation Policy
          </p>
          <p className="text-left">
            In the event of an emergency, we may consider a refund or credit,
            whether partial or full. We review these requests on a case-by-case
            basis, and we ask that you notify us as near as possible to the
            start date for the class. Please read our policy details before
            requesting a refund.{" "}
          </p>
          <div className="grid grid-cols-4 gap-6 py-6 text-left">
            <div>
              <span className="font-semibold text-red-600">
                10 days or more{" "}
              </span>{" "}
              <br></br>
              before the start date for a class, the registrant will receive a
              credit minus a 10% fee OR a refund minus a 20% fee.
            </div>
            <div>
              <span className="font-semibold text-red-600">3-9 days</span>{" "}
              <br></br>
              before the start date for a class, the registrant will receive a
              credit minus a 20% fee OR a refund minus a 30% fee.
            </div>
            <div>
              <span className="font-semibold text-red-600">
                2 days or less{" "}
              </span>
              <br></br>
              before the start date for a class, the registrant will not receive
              a credit or a refund.
            </div>
            <div>
              <span className="font-semibold text-red-600">
                On the day or after
              </span>
              <br></br>
              The Proprietary cannot offer refunds, credits, or makeup sessions
              for classes a student might miss.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
