import React from "react";
import Container from "./container";

export default function Cta() {
  return (
    <Container>
      <div className="flex flex-wrap items-center justify-between w-full max-w-7xl gap-5 mx-auto text-white  px-7 py-7 lg:px-12 lg:py-12 lg:flex-nowrap rounded-xl">
        <div className="flex-grow text-center lg:text-left">
          <h2 className="text-xl font-medium lg:text-2xl">
            Coming soon on [App Store icon] & [Play Store icon]
          </h2>
          <p className="mt-2 font-medium text-white text-opacity-90 lg:text-xl">
            Register early interest and save 5% on your next booking
          </p>
        </div>
        <div className="flex-shrink-0 gap-3 flex flex-col md:flex-row w-full text-center lg:w-auto">
          <input
            type={"email"}
            placeholder="email"
            className="outline-none rounded-sm px-8 py-4 border-l-2 border-yellow-200/10 text-gray-400 font-semibold placeholder-trueGray-400 transition-all ease-out duration-300 hover:border-yellow-500/40 focus:border-yellow-500 focus:text-yellow-500/70"
          />
          <a
            href="https://github.com/web3templates"
            target="_blank"
            rel="noopener"
            className="inline-block py-2 mx-auto text-lg font-medium text-center text-yellow-600 bg-white rounded-md px-7 lg:px-8 lg:py-3 "
          >
            Register Interest
          </a>
        </div>
      </div>
    </Container>
  );
}
