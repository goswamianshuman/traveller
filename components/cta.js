import React from "react";
import Container from "./container";

export default function Cta() {
  return (
    <Container>
      <div className="flex flex-wrap items-center justify-between w-full max-w-7xl gap-5 mx-auto dark:text-white text-trueGray-900 px-7 py-7 lg:px-12 lg:py-12 lg:flex-nowrap rounded-xl">
        <div className="flex-grow text-center lg:text-left">
          <h2 className="text-xl font-medium lg:text-2xl">
            <span className="flex gap-4 mb-3 items-center">
              Coming soon on
              <img
                src="img/App_Store.svg"
                className="h-10 w-10"
                alt=""
              /> &{" "}
              <img src="img/Google_Play.svg" className="h-10 w-10" alt="" />
            </span>
          </h2>
          <p className="mt-2 font-medium text-voilet-600 text-opacity-90 lg:text-xl">
            Register early interest and save 5% on your next booking
          </p>
        </div>
        <div className="flex-shrink-0 gap-3 flex flex-col md:flex-row w-full text-center lg:w-auto">
          <input
            type={"email"}
            placeholder="email"
            className="outline-none bg-trueGray-300/80 dark:bg-trueGray-300/30 dark:placeholder-gray-50 rounded-sm px-8 py-4 border-l-2 border-voilet-200/10 text-gray-400 font-semibold placeholder-trueGray-600 transition-all ease-out duration-300 hover:border-voilet-500/40 focus:border-voilet-500 focus:text-voilet-500 focus:font-medium"
          />
          <a
            href="https://github.com/web3templates"
            target="_blank"
            rel="noopener"
            className="inline-block py-2 mx-auto text-lg font-medium text-center dark:text-voilet-600 dark:bg-white bg-voilet-600 text-white rounded-md px-7 lg:px-8 lg:py-3 "
          >
            Register Interest
          </a>
        </div>
      </div>
    </Container>
  );
}
