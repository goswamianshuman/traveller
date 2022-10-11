import Image from "next/image";
import React from "react";
import Container from "./container";

export default function Trip(props) {
  return (
    <>
      <Container className="flex  flex-wrap mb-20 lg:gap-10 lg:flex-nowrap ">
        <div
          className={`flex items-center justify-center w-full lg:w-1/2 ${
            props.imgPos === "right" ? "lg:order-1" : ""
          }`}
        >
          <div>
            {/* <Image
              src="/img/benefit-one.png"
              width="521"
              height="482"
              alt="Benefits"
              layout="intrinsic"
              placeholder="blur"
            /> */}
          </div>
        </div>

        <div
          className={`flex flex-wrap items-center w-full lg:w-1/2 ${
            props.imgPos === "right" ? "lg:justify-end" : ""
          }`}
        >
          <div>
            <div className="flex flex-col w-full mt-4">
              <h3 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-trueGray-800 lg:leading-tight lg:text-4xl dark:text-white">
                Plan a Trip
              </h3>

              <p className="max-w-2xl py-4 text-lg leading-normal text-trueGray-600 lg:text-xl xl:text-xl dark:text-gray-300">
                Confused with thousands of online blogs, travel guides and
                reviews offering different views simply for referral
                commissions, or not getting answers to important questions like
                “which areas to avoid visiting at night”
              </p>

              <p className="max-w-2xl py-4 text-base leading-normal text-yellow-600 lg:text-lg xl:text-lg dark:text-yellow-600">
                Get personal suggestions and recommendations from a local host
                via video calls
              </p>
              <p className="max-w-2xl py-4 text-base leading-normal text-yellow-600 lg:text-lg xl:text-lg dark:text-yellow-600">
                Get answers to your specific questions and plan your trip
                without any hassle
              </p>
            </div>

            <div className="w-full mt-5">
              <Benefit />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

function Benefit(props) {
  return (
    <>
      <div className="flex items-start mt-8 space-x-3">
        <div>
          {/* <h4 className="text-xl font-medium text-trueGray-800 dark:text-gray-200">
            {props.title}
          </h4>
          <p className="mt-1 text-[#ff7300]">{props.children}</p> */}
        </div>
      </div>
    </>
  );
}
